/*===============================*/
/*       WIKI MANAGER MODULE     */
/*===============================*/

/**
 * Marked.js serve per convertire Markdown -> HTML
 * Viene caricato via ESM import (unica fonte, no CDN duplicato)
 */
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export default class WikiManager {

    constructor() {
        /* ===============================
           STATO INTERNO
        =============================== */

        this.wikiStructure = null;       // Struttura della wiki (JSON)
        this.currentPage = 'home';       // Pagina attualmente caricata
        this.sidebarOpen = false;         // Stato sidebar (open / collapsed)
        this.expandedSections = {};      // Stato categorie aperte

        /* ===============================
           RIFERIMENTI DOM
        =============================== */

        this.sidebar = null;
        this.toggleBtn = null;
        this.menuIcon = null;
        this.closeIcon = null;
        this.pageTitle = null;
        this.content = null;
        this.loading = null;
        this.navContent = null;
        this.contentWrapper = null;
        this.wikiHomeBtn = null;

        this.initialized = false;
        this._toggleHandler = null;     // Stored reference for cleanup
        this._navDelegateHandler = null; // Event delegation handler
        this._searchHandler = null;     // Search input handler
        this.searchInput = null;
        this.breadcrumb = null;
    }

    /* =====================================================
       INIZIALIZZAZIONE
    ===================================================== */
    async init() {
        if (this.initialized) {
            console.warn('WikiManager already initialized, skipping');
            return;
        }
        try {
            await this.setup();
            this.initialized = true;
        } catch (err) {
            console.error('WikiManager init error:', err);
        }
    }

    /* =====================================================
       SETUP GENERALE
    ===================================================== */

    async setup() {
        /* Cache DOM */
        this.sidebar = document.getElementById('wiki-sidebar');
        this.toggleBtn = document.getElementById('wiki-toggle-btn');
        this.menuIcon = document.getElementById('wiki-menu-icon');
        this.closeIcon = document.getElementById('wiki-close-icon');
        this.pageTitle = document.getElementById('wiki-page-title');
        this.content = document.getElementById('wiki-content');
        this.loading = document.getElementById('wiki-loading');
        this.navContent = document.getElementById('wiki-nav-content');
        this.contentWrapper = document.querySelector('.wiki-content-wrapper');
        this.searchInput = document.getElementById('wiki-search');
        this.breadcrumb = document.getElementById('wiki-breadcrumb');

        if (!this.validateDOMElements()) {
            throw new Error("Required DOM elements not found");
        }

        // Load wiki structure
        await this.loadWikiStructure();
        // Setup event listeners (with delegation)
        this.setupEventListeners();
        // Render navigation
        this.renderNavigation();
        // Load home page
        this.loadPage('Home');
    }

    /* =====================================================
     Valida che tutti gli elementi DOM necessari esistano
    ===================================================== */

    validateDOMElements() {
        const requiredElements = {
            sidebar: this.sidebar,
            toggleBtn: this.toggleBtn,
            menuIcon: this.menuIcon,
            closeIcon: this.closeIcon,
            content: this.content,
            loading: this.loading,
            navContent: this.navContent
        };

        for (const [name, element] of Object.entries(requiredElements)) {
            if (!element) {
                console.error(`Missing DOM element: ${name}`);
                return false;
            }
        }

        return true;
    }

    /* =====================================================
       CARICAMENTO STRUTTURA WIKI (JSON)
    ===================================================== */

    async loadWikiStructure() {
        try {
            const response = await fetch('./Json/Wiki-Structure.json');
            if (!response.ok) {
                throw new Error('Failed to load wiki structure');
            }

            this.wikiStructure = await response.json();
        } catch (error) {
            console.error('Error loading wiki structure:', error);
            this.wikiStructure = {};
        }
    }

    /* =====================================================
       EVENTI (Event Delegation — no memory leaks)
    ===================================================== */

    setupEventListeners() {
        // Toggle sidebar button
        if (this.toggleBtn && !this._toggleHandler) {
            this._toggleHandler = () => this.toggleSidebar();
            this.toggleBtn.addEventListener('click', this._toggleHandler);
        }

        // Event delegation on nav container — handles ALL nav clicks
        if (this.navContent && !this._navDelegateHandler) {
            this._navDelegateHandler = (e) => this.handleNavClick(e);
            this.navContent.addEventListener('click', this._navDelegateHandler);
        }

        // Wiki search — live filter
        if (this.searchInput && !this._searchHandler) {
            this._searchHandler = () => this.filterNavigation(this.searchInput.value);
            this.searchInput.addEventListener('input', this._searchHandler);
        }
    }

    handleNavClick(e) {
        const btn = e.target.closest('button.wiki-nav-item');
        if (!btn) {
            return;
        }

        const path = btn.dataset.path;
        if (!path) {
            return;
        }

        if (btn.classList.contains('wiki-nav-category')) {
            // Category toggle
            this.expandedSections[path] = !this.expandedSections[path];
            this.renderNavigation();
        } else {
            // Item click — load page + highlight active
            this.loadPage(path);
            this.navContent.querySelectorAll('.wiki-nav-item:not(.wiki-nav-category)').forEach(
                el => el.classList.toggle('active', el.dataset.path === path)
            );
            // Close sidebar on mobile after selection
            if (this.sidebarOpen && window.innerWidth < 992) {
                this.toggleSidebar();
            }
        }
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
        document.body.classList.toggle('wiki-open', this.sidebarOpen);
    }

    /* =====================================================
       NAVIGAZIONE
    ===================================================== */

    renderNavigation() {
        if (!this.wikiStructure || !this.navContent) {
            return;
        }

        // Clear existing content (event delegation means no listener leak)
        this.navContent.innerHTML = '';

        const structureEntries = Object.entries(this.wikiStructure);

        for (const [key, value] of structureEntries) {
            const navElement = this.renderNavItem(key, value, '');
            this.navContent.appendChild(navElement);
        }
    }

    renderNavItem(name, data, path) {
        const currentPath = path ? `${path}/${name}` : name;
        const container = document.createElement('div');

        if (data.items) {
            this.renderCategoryWithItems(name, data, currentPath, container);
        } else if (data.subcategories) {
            this.renderCategoryWithSubcategories(name, data, currentPath, container);
        }

        return container;
    }

    renderCategoryWithItems(name, data, currentPath, container) {
        const categoryButton = this.createCategoryButton(name, currentPath);
        container.appendChild(categoryButton);

        const itemsContainer = this.createItemsContainer(currentPath);
        this.addItemsToContainer(data.items, currentPath, itemsContainer);
        container.appendChild(itemsContainer);
    }

    renderCategoryWithSubcategories(name, data, currentPath, container) {
        const categoryButton = this.createCategoryButton(name, currentPath);
        container.appendChild(categoryButton);

        const subcategoryContainer = this.createSubcategoryContainer(currentPath);
        this.addSubcategoriesToContainer(data.subcategories, currentPath, subcategoryContainer);
        container.appendChild(subcategoryContainer);
    }

    createItemsContainer(currentPath) {
        const container = document.createElement('div');
        container.className = 'wiki-nav-items';
        container.style.display = this.expandedSections[currentPath] ? 'block' : 'none';
        return container;
    }

    createSubcategoryContainer(currentPath) {
        const container = document.createElement('div');
        container.className = 'wiki-nav-subcategory';
        container.style.display = this.expandedSections[currentPath] ? 'block' : 'none';
        return container;
    }

    addItemsToContainer(items, currentPath, container) {
        for (let i = 0; i < items.length; i++) {
            const itemName = items[i];
            const itemPath = `${currentPath}/${itemName}`;
            const itemButton = this.createItemButton(itemName, itemPath);
            container.appendChild(itemButton);
        }
    }

    addSubcategoriesToContainer(subcategories, currentPath, container) {
        const subcategoryNames = Object.keys(subcategories);

        for (let i = 0; i < subcategoryNames.length; i++) {
            const subName = subcategoryNames[i];
            const subData = subcategories[subName];
            const subElement = this.renderNavItem(subName, subData, currentPath);
            container.appendChild(subElement);
        }
    }

    /* =====================================================
       Button creation (no addEventListener — uses data-path + delegation)
    ===================================================== */

    createCategoryButton(name, path) {
        const btn = document.createElement('button');
        btn.className = 'wiki-nav-item wiki-nav-category';
        btn.dataset.path = path;

        btn.innerHTML = `
            <svg class="wiki-nav-category-icon ${this.expandedSections[path] ? 'expanded' : ''}"
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span class="wiki-nav-category-text">${name}</span>
        `;

        return btn;
    }

    createItemButton(name, path) {
        const btn = document.createElement('button');
        btn.className = 'wiki-nav-item';
        btn.textContent = name;
        btn.dataset.path = path;
        return btn;
    }

    /* =====================================================
       CARICAMENTO PAGINE
    ===================================================== */

    async loadPage(path) {
        this.currentPage = path;
        this.updateBreadcrumb(path);

        // Lock height to prevent layout jumps
        if (this.contentWrapper) {
            this.contentWrapper.style.minHeight =
                `${this.contentWrapper.offsetHeight || 500}px`;
        }

        // Show loading
        this.loading?.classList.remove('hidden');
        this.content?.classList.add('hidden');

        try {
            const md = await this.loadMarkdownFile(path);
            this.renderContentByMarkedJS(md);
        } catch (error) {
            console.error('Error loading page:', error);
            this.renderContentByMarkedJS('# Errore\nPagina non trovata.');
        } finally {
            this.loading?.classList.add('hidden');
            this.content?.classList.remove('hidden');

            setTimeout(() => {
                if (this.contentWrapper) {
                    this.contentWrapper.style.minHeight = '';
                }
            }, 50);
        }
    }

    /* =====================================================
       MARKDOWN LOADING
    ===================================================== */

    async loadMarkdownFile(path) {
        if (path === 'home') {
            return this.getHomeContent();
        }

        const url = `./Documents/UOCS_Wiki_md/${path}.md`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('File MD not found');
            }
            return await response.text();
        } catch (error) {
            throw new Error(`Error loading markdown file "${url}": ${error.message}`);
        }
    }

    /* =====================================================
       MARKDOWN RENDER + LINK WIKI (with error handling)
    ===================================================== */

    renderContentByMarkedJS(markdown) {
        try {
            this.content.innerHTML = marked.parse(markdown);
        } catch (error) {
            console.error('Markdown parsing error:', error);
            this.content.innerHTML = '<h1>Rendering Error</h1><p>Could not parse the page content.</p>';
            return;
        }

        // Highlight search terms if coming from search
        if (this._pendingHighlight) {
            this.highlightText(this._pendingHighlight);
            this._pendingHighlight = null;
        }

        // Intercept wiki links: [Text](#sectionWiki/Path/To/Page)
        const wikiLinks = this.content.querySelectorAll('a[href^="#sectionWiki/"]');

        wikiLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const route = link
                    .getAttribute('href')
                    .replace('#sectionWiki/', '');

                const normalizedPath = route
                    .split('/')
                    .map(p => decodeURIComponent(p).replace(/-/g, ' '))
                    .join('/');

                this.loadPage(normalizedPath);
            });
        });
    }

    /* =====================================================
       CONTENUTI DEFAULT
    ===================================================== */

    getHomeContent() {
        return `# UOCS Wiki

Welcome to the official Wiki of our Ultima Online shard!

## What you will find here

This wiki contains all the detailed information about:

- **Skills**: All available abilities in the game
- **Classes**: Playable classes with their specializations
- **Races**: The unique races of our world
- **Items**: Weapons, armor, tools, and resources

## How to navigate

Use the sidebar menu to explore the different sections. Click on a category to expand it and see all available entries.

## Recent updates

The wiki is constantly updated with new information about the world of UOCS. Check back often to discover what's new!`;
    }

    /* =====================================================
       WIKI SEARCH (full-text with results dropdown)
    ===================================================== */

    // Build flat index of all wiki pages from the structure tree
    buildSearchIndex(obj, parentPath) {
        const results = [];
        for (const [key, val] of Object.entries(obj)) {
            const path = parentPath ? `${parentPath}/${key}` : key;
            if (val.items) {
                // category label
                for (const item of val.items) {
                    results.push({ name: item, path: `${path}/${item}`, category: key });
                }
            }
            if (val.subcategories) {
                results.push(...this.buildSearchIndex(val.subcategories, path));
            }
        }
        return results;
    }

    filterNavigation(query) {
        const q = query.toLowerCase().trim();

        // Get or create results dropdown
        let dropdown = document.getElementById('wiki-search-results');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.id = 'wiki-search-results';
            dropdown.className = 'wiki-search-results';
            this.searchInput.parentNode.appendChild(dropdown);
        }

        if (!q) {
            dropdown.innerHTML = '';
            dropdown.style.display = 'none';
            this._pendingHighlight = null;
            return;
        }

        // Build index on first search
        if (!this._searchIndex) {
            this._searchIndex = this.buildSearchIndex(this.wikiStructure, '');
        }

        // Filter matching items
        const matches = this._searchIndex.filter(item =>
            item.name.toLowerCase().includes(q)
        ).slice(0, 12); // max 12 results

        if (matches.length === 0) {
            dropdown.innerHTML = '<div class="wiki-search-empty">No results found</div>';
            dropdown.style.display = 'block';
            return;
        }

        dropdown.innerHTML = matches.map(m => {
            // Highlight the matched portion in the name
            const idx = m.name.toLowerCase().indexOf(q);
            const before = m.name.slice(0, idx);
            const match = m.name.slice(idx, idx + q.length);
            const after = m.name.slice(idx + q.length);
            return `<button class="wiki-search-item" data-path="${m.path}" data-query="${q}">
                <span class="wiki-search-name">${before}<mark>${match}</mark>${after}</span>
                <span class="wiki-search-cat">${m.category}</span>
            </button>`;
        }).join('');

        dropdown.style.display = 'block';

        // Wire up click handlers
        dropdown.querySelectorAll('.wiki-search-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const path = btn.dataset.path;
                const searchQuery = btn.dataset.query;
                this._pendingHighlight = searchQuery;
                this.loadPage(path);

                // Highlight active in sidebar
                this.navContent.querySelectorAll('.wiki-nav-item:not(.wiki-nav-category)').forEach(
                    el => el.classList.toggle('active', el.dataset.path === path)
                );

                // Clear search
                this.searchInput.value = '';
                dropdown.innerHTML = '';
                dropdown.style.display = 'none';

                // Close sidebar on mobile
                if (this.sidebarOpen && window.innerWidth < 992) {
                    this.toggleSidebar();
                }
            });
        });
    }

    /* =====================================================
       TEXT HIGHLIGHT (search result)
    ===================================================== */

    highlightText(query) {
        if (!this.content || !query) return;
        const q = query.toLowerCase();

        // Walk all text nodes in the content
        const walker = document.createTreeWalker(
            this.content, NodeFilter.SHOW_TEXT, null
        );

        const matches = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.nodeValue.toLowerCase().includes(q)) {
                matches.push(node);
            }
        }

        // Replace text nodes with highlighted spans
        for (const textNode of matches) {
            const text = textNode.nodeValue;
            const lower = text.toLowerCase();
            const frag = document.createDocumentFragment();
            let lastIndex = 0;
            let idx;

            while ((idx = lower.indexOf(q, lastIndex)) !== -1) {
                // Text before match
                if (idx > lastIndex) {
                    frag.appendChild(document.createTextNode(text.slice(lastIndex, idx)));
                }
                // Highlighted match
                const mark = document.createElement('mark');
                mark.className = 'wiki-highlight';
                mark.textContent = text.slice(idx, idx + q.length);
                frag.appendChild(mark);
                lastIndex = idx + q.length;
            }

            // Remaining text
            if (lastIndex < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIndex)));
            }

            textNode.parentNode.replaceChild(frag, textNode);
        }

        // Scroll to first highlight
        const firstMark = this.content.querySelector('.wiki-highlight');
        if (firstMark) {
            firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    /* =====================================================
       BREADCRUMB
    ===================================================== */

    updateBreadcrumb(path) {
        if (!this.breadcrumb) return;

        if (path === 'Home' || path === 'home') {
            this.breadcrumb.innerHTML = '<span class="breadcrumb-item">Wiki</span>';
            return;
        }

        const parts = path.split('/');
        let html = '<a class="breadcrumb-link" data-bc-home>Wiki</a>';

        for (let i = 0; i < parts.length; i++) {
            html += '<span class="breadcrumb-sep">›</span>';
            if (i < parts.length - 1) {
                html += `<span class="breadcrumb-item">${parts[i]}</span>`;
            } else {
                html += `<span class="breadcrumb-item breadcrumb-current">${parts[i]}</span>`;
            }
        }

        this.breadcrumb.innerHTML = html;

        // Wire up the Wiki home link
        const homeLink = this.breadcrumb.querySelector('[data-bc-home]');
        if (homeLink) {
            homeLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadPage('Home');
            });
        }
    }

    /* =====================================================
       CLEANUP (proper listener removal)
    ===================================================== */

    destroy() {
        if (this.toggleBtn && this._toggleHandler) {
            this.toggleBtn.removeEventListener('click', this._toggleHandler);
            this._toggleHandler = null;
        }

        if (this.navContent && this._navDelegateHandler) {
            this.navContent.removeEventListener('click', this._navDelegateHandler);
            this._navDelegateHandler = null;
        }

        if (this.searchInput && this._searchHandler) {
            this.searchInput.removeEventListener('input', this._searchHandler);
            this._searchHandler = null;
        }

        this.sidebar = null;
        this.toggleBtn = null;
        this.content = null;
        this.navContent = null;
        this.searchInput = null;
        this.breadcrumb = null;
        this.initialized = false;
    }
}
