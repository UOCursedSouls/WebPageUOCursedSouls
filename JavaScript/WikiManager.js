/*===============================*/
/*       WIKI MANAGER MODULE     */
/*===============================*/

/**
 * Marked.js serve per convertire Markdown → HTML
 * Viene caricato via CDN nell'index.html
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
    }

    /* =====================================================
       INIZIALIZZAZIONE
    ===================================================== */
    async init() {
        if (this.initialized) {
            console.warn('⚠️ WikiManager già inizializzato, init saltata');
            return;
        }
        try {
            await this.setup();
            this.initialized = true;
            console.log('✅ WikiManager initialized');
        } catch (err) {
            console.error('❌ WikiManager init error:', err);
        }
    }

    /* =====================================================
       SETUP GENERALE
    ===================================================== */

    async setup() {
        /* Cache DOM */
        this.sidebar = document.getElementById('wiki-sidebar');
        this.toggleBtn = document.getElementById('wiki-toggle-btn'); // bug liveservice(locale) ma funziona html non caricato
        this.menuIcon = document.getElementById('wiki-menu-icon'); // bug liveservice(locale) ma funziona html non caricato
        this.closeIcon = document.getElementById('wiki-close-icon'); // bug liveservice(locale) ma funziona html non caricato
        this.pageTitle = document.getElementById('wiki-page-title'); // bug liveservice(locale) ma funziona html non caricato
        this.content = document.getElementById('wiki-content'); // bug liveservice(locale) ma funziona html non caricato
        this.loading = document.getElementById('wiki-loading'); // bug liveservice(locale) ma funziona html non caricato
        this.navContent = document.getElementById('wiki-nav-content');
        this.contentWrapper = document.querySelector('.wiki-content-wrapper');

        if (!this.validateDOMElements()) {
            throw new Error("Required DOM elements not found");
        }

        // Load wiki structure
        await this.loadWikiStructure();
        // Setup event listeners
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
            // pageTitle: this.pageTitle, // Questo va abilitato se si vuole HEADER di WIKI 
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
            if (!response.ok) throw new Error('Failed to load wiki structure');
            
            this.wikiStructure = await response.json();
            console.log('📚 Wiki structure loaded');
        } catch (error) {
            console.error('Error loading wiki structure:', error);
            // Fallback a struttura vuota
            this.wikiStructure = {};
            console.warn('⚠️ Wiki structure missing');
        }
    }

    /* =====================================================
       EVENTI
    ===================================================== */

    setupEventListeners() {
        if (this.listenersAttached) return;
        this.listenersAttached = true;
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggleSidebar());
        } else {
            console.warn('⚠️ Wiki toggle button not found (this.toggleBtn), event listener not attached');
        }
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
        console.log(`Wiki sidebar ${this.sidebarOpen ? 'opened' : 'closed'}`);
        // console.trace('toggleSidebar called');
        document.body.classList.toggle('wiki-open', this.sidebarOpen);
    }

    /* =====================================================
       NAVIGAZIONE
    ===================================================== */

    async renderNavigation() {
        // Verifica che entrambe le proprietà esistano
        if (!this.wikiStructure || !this.navContent) {
            return;
        }
        
        // Pulisce il contenuto esistente
        this.navContent.innerHTML = '';
        
        // Itera attraverso le voci dell'oggetto usando for...of
        const structureEntries = Object.entries(this.wikiStructure);
        
        for (const [key, value] of structureEntries) {
            // Crea l'elemento di navigazione
            const navElement = this.renderNavItem(key, value, '');
            
            // Aggiunge l'elemento al contenitore
            this.navContent.appendChild(navElement);
        }
    }

    /**
     * Render singolo item di navigazione
     */
    async renderNavItem(name, data, path) {
        const currentPath = path ? `${path}/${name}` : name;
        const container = document.createElement('div');
        
        if (data.items) {
            // Category with items
            const button = this.createCategoryButton(name, currentPath);
            container.appendChild(button);
            
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'wiki-nav-items';
            itemsContainer.style.display = this.expandedSections[currentPath] ? 'block' : 'none';
            
            data.items.forEach(item => {
                const itemButton = this.createItemButton(item, `${currentPath}/${item}`);
                itemsContainer.appendChild(itemButton);
            });
            
            container.appendChild(itemsContainer);
            
        } else if (data.subcategories) {
            // Category with subcategories
            const button = this.createCategoryButton(name, currentPath);
            container.appendChild(button);
            
            const subContainer = document.createElement('div');
            subContainer.className = 'wiki-nav-subcategory';
            subContainer.style.display = this.expandedSections[currentPath] ? 'block' : 'none';
            
            Object.entries(data.subcategories).forEach(([subName, subData]) => {
                const subElement = this.renderNavItem(subName, subData, currentPath);
                subContainer.appendChild(subElement);
            });
            
            container.appendChild(subContainer);
        }
        return container;
    }

    renderNavItem(name, data, path) {
        // Calcola il percorso corrente
        const currentPath = path ? `${path}/${name}` : name;
        
        // Crea il contenitore principale
        const container = document.createElement('div');
        
        // Gestisce i diversi tipi di contenuto
        if (data.items) {
            this.renderCategoryWithItems(name, data, currentPath, container);
        } else if (data.subcategories) {
            this.renderCategoryWithSubcategories(name, data, currentPath, container);
        }
        
        return container;
    }

    renderCategoryWithItems(name, data, currentPath, container) {
        // Crea il pulsante della categoria
        const categoryButton = this.createCategoryButton(name, currentPath);
        container.appendChild(categoryButton);
        
        // Crea il contenitore per gli elementi
        const itemsContainer = this.createItemsContainer(currentPath);
        
        // Aggiunge tutti gli elementi
        this.addItemsToContainer(data.items, currentPath, itemsContainer);
        
        container.appendChild(itemsContainer);
    }

    renderCategoryWithSubcategories(name, data, currentPath, container) {
        // Crea il pulsante della categoria
        const categoryButton = this.createCategoryButton(name, currentPath);
        container.appendChild(categoryButton);
        
        // Crea il contenitore per le sottocategorie
        const subcategoryContainer = this.createSubcategoryContainer(currentPath);
        
        // Aggiunge tutte le sottocategorie
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

    //* =====================================================
    createCategoryButton(name, path) {
        const btn = document.createElement('button');
        btn.className = 'wiki-nav-item wiki-nav-category';

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

        btn.addEventListener('click', () => {
            this.expandedSections[path] = !this.expandedSections[path];
            this.renderNavigation();
        });

        return btn;
    }


    createItemButton(name, path) {
        const btn = document.createElement('button');
        btn.className = 'wiki-nav-item';
        btn.textContent = name;

        btn.addEventListener('click', () => this.loadPage(path));
        return btn;
    }

    /* =====================================================
       CARICAMENTO PAGINE
    ===================================================== */

    async loadPage(path) {
        console.log(`Loading wiki page: ${path}`);
        // if (!this.initialized) {
        //     console.warn('WikiManager not initialized yet');
        //     return;
        // }
        this.currentPage = path;

        // blocco altezza per evitare salti layout
        if (this.contentWrapper) {
            this.contentWrapper.style.minHeight =
                `${this.contentWrapper.offsetHeight || 500}px`;
        }
        // Show loading
        this.loading.classList.remove('hidden');
        this.content.classList.add('hidden');

        try {
            console.log(`📄 Wiki page loaded: ${path}`);
            const md = await this.loadMarkdownFile(path);
            this.renderContentByMarkedJS(md);
        } catch (error) {
            console.error('Error loading page:', error);
            this.renderContentByMarkedJS('# Errore\nPagina non trovata.');
        } finally {
            this.loading.classList.add('hidden');
            this.content.classList.remove('hidden');

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
        // If it's home, load default content
        console.log(`Loading markdown for path: ${path}`);
        if (path === 'home') {
            return this.getHomeContent();
        }
        
        // Try to load the .md file
        try { 
            const url = `./Documents/UOCS_Wiki_md/${path}.md`;
            const response = await fetch(url);
            if (!response.ok) throw new Error('File MD not found');

            return await response.text();
        } catch (error) {
            throw new Error(`Error loading markdown file for url "${url}": ${error.message}, using mock content`);
            // return this.getMockContent(path);
        }
    }

    /* =====================================================
       MARKDOWN RENDER + LINK WIKI
    ===================================================== */

    renderContentByMarkedJS(markdown) {
        this.content.innerHTML = marked.parse(markdown);

        /**
         * 🔗 Intercetta link del tipo:
         * [Leatherworking](#sectionWiki/Skills/Leatherworking)
         */
        const wikiLinks = this.content.querySelectorAll('a[href^="#sectionWiki/"]');

        wikiLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const route = link
                    .getAttribute('href')
                    .replace('#sectionWiki/', '');

                // Supporta Troll-Leather → Troll Leather
                const normalizedPath = route
                    .split('/')
                    .map(p => p.replace(/-/g, ' '))
                    .join('/');

                this.loadPage(normalizedPath);
            });
        });
    }

    /* =====================================================
       CONTENUTI DEFAULT
    ===================================================== */

getHomeContent() {
        return `# Wiki di UOCS

Benvenuto nella Wiki ufficiale del nostro shard Ultima Online!

## Cosa troverai qui

Questa wiki contiene tutte le informazioni dettagliate su:

- **Skills**: Tutte le abilità disponibili nel gioco
- **Classi**: Le classi giocabili con le loro specializzazioni
- **Razze**: Le razze uniche del nostro mondo
- **Items**: Oggetti, armi, strumenti e risorse

## Come navigare

Usa il menu laterale per esplorare le diverse sezioni. Clicca su una categoria per espanderla e vedere tutti gli elementi disponibili.

## Aggiornamenti recenti

La wiki viene costantemente aggiornata con nuove informazioni sul mondo di UOCS. Torna spesso per scoprire le novità!`;
    }

    /**
     * Mock content per pagine non trovate
     */
    getMockContent(path) {
        const pageName = path.split('/').pop();
        const category = path.split('/')[0];
        
        return `# ${pageName}

## Descrizione

Questa è la pagina wiki per **${pageName}**. Qui troverai tutte le informazioni dettagliate su questo elemento del gioco.

## Caratteristiche principali

- **Requisito Livello**: 25
- **Categoria**: ${category}
- **Rarità**: Comune/Raro/Epico
- **Utilizzo**: Descrizione dell'utilizzo principale

## Statistiche

| Attributo | Valore |
|-----------|--------|
| Difficoltà | Media |
| Costo | 1000 GP |
| Peso | 5 Stone |

## Dettagli

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Questo elemento è fondamentale per il tuo personaggio e offre vantaggi unici nel mondo di UOCS.

### Come ottenerlo

Puoi ottenere questo elemento attraverso:
- Crafting con le skill appropriate
- Drop da creature specifiche
- Acquisto dai mercanti NPC
- Scambio con altri giocatori

## Note aggiuntive

Informazioni extra e consigli utili per sfruttare al meglio questo elemento nel tuo gameplay.

## Vedi anche

- Altri elementi correlati
- Guide correlate`;
    }
    /* =====================================================
       CLEANUP
    ===================================================== */

    destroy() {
        this.sidebar = null;
        this.toggleBtn = null;
        this.content = null;
        this.navContent = null;
        this.initialized = false;
    }
}
