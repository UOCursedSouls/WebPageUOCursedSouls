/*===============================*/
/*         MAIN APP JS           */
/*===============================*/

// Import modules
import UtilityClass from "./UtilityClass.js";
import HtmlBuilder from "./HtmlBuilder.js";
import IndexManager from "./IndexManager.js";
import WikiManager from "./WikiManager.js";
import ParticleEffect from "./ParticleEffect.js";
import UOServerApi from "./UOServerApi.js";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

class Main_App_UOCS {
    constructor() {
        /*===============================*/
        /*        CORE STATE             */
        /*===============================*/
        this.jsonDataInfo = null;
        this.htmlBuilder = null;
        this.wikiManager = null;
        this.currentSection = 'sectionHome';
        this.navbarScroll = null;

        /*===============================*/
        /*      UO SHARD API STATE       */
        /*===============================*/
        this.uoShardApi = null;
        this.statusData = null;
        this.playersData = null;

        // UI Elements - Server Status
        this.elStatusServerChecking = null;
        this.elStatusServerOnline = null;
        this.elStatusServerOffline = null;

        // UI Elements - Players
        this.elPlayerLabelPlayersChecking = null;
        this.elPlayerLabelPlayers = null;
        this.elPlayerLabelCountNumber = null;
        this.elPlayerLabelRealUnreachable = null;

        /*===============================*/
        /*      TOAST NOTIFICATIONS      */
        /*===============================*/
        this.toast_container = null;
        this.toastLiveNotification = null;
        this.toastLiveNotificationTimer = null;
        this.toastLiveNotificationTitle = null;
        this.toastLiveNotificationMSG = null;

        /*===============================*/
        /*        VISUAL EFFECTS         */
        /*===============================*/
        this.particleEffect = null;

        this.initialized = false;
        this.partPath = null;

        this.init();
    }

    /*===============================*/
    /*          INIT FLOW            */
    /*===============================*/
    async init() {
        console.log('🚀 Initializing UOCS App...');

        // Wait DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            await this.setup();
            this.ShowToast(
                'Welcome to UOCS!',
                'The UOCS App has been successfully loaded.',
                'success'
            );
        }
    }

    async setup() {
        try {
            // Initialize components
            await this.initializeComponents();
            // Build initial page
            await this.BuildPage();
            // Sing element on variables
            this.SetVariables();
            // Setup navigation
            this.setupNavigation();

            // First tick immediately
            this.Tick(); // Primo avvio immediato
            setInterval(() => this.Tick(), 60000); // Aggiorna ogni 60 secondi

            this.initialized = true;
            console.log('✅ UOCS App initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing app:', error);
        }
    }

    /*===============================*/
    /*     COMPONENT INITIALIZATION  */
    /*===============================*/
    async initializeComponents() {
        this.partPath = window.location.hash;

        // Load global site data
        this.jsonDataInfo = await UtilityClass.GetJsonFromRootPage("DataInfo");

        this.htmlBuilder = new HtmlBuilder("../Views");

        // Wiki manager (lazy loaded)
        this.wikiManager = new WikiManager();

        // Ambient particle effect
        this.particleEffect = new ParticleEffect('fx', 'ambient', 60);

        // UO Shard API instance (IP, Porta, [User], [Pass])
        this.uoShardApi = new UOServerApi('127.0.0.1', '2593');

        // console.log('📚 WikiManager ready (lazy load)');
    }

    /*===============================*/
    /*        BUILD STATIC PAGE      */
    /*===============================*/
    async BuildPage() {
        // Navbar
        let htmlNavbar = await this.htmlBuilder.GetStringView('Navbar.html');
        htmlNavbar = await HtmlBuilder.RepalceKeysDataInfoOnString(htmlNavbar, this.jsonDataInfo);
        IndexManager.ReplaceHtmlContent("navbar", htmlNavbar);

        // Footer
        let htmlFooter = await this.htmlBuilder.GetStringView('Footer.html');
        htmlFooter = await HtmlBuilder.RepalceKeysDataInfoOnString(htmlFooter, this.jsonDataInfo);
        IndexManager.ReplaceHtmlContent("footer", htmlFooter);

        // Sections
        const sections = [
            "Home",
            // "Wiki",
            "Rules",
            "Media",
            "Downloads",
            "Status",
            "Contact"
        ];

        for (const section of sections) {
            let html = await this.htmlBuilder.GetStringView(`ViewSections/${section}.html`);
            html = await HtmlBuilder.RepalceKeysDataInfoOnString(html, this.jsonDataInfo);
            if (section === "Status") {
                // Roadmap items
                let htmlElementRoadmap_item = await this.htmlBuilder.GetStringView("ViewElements/Roadmap_Item.html");
                html = await HtmlBuilder.ProcessRoadmapSection(html, this.jsonDataInfo, htmlElementRoadmap_item);
            }
            IndexManager.ReplaceHtmlContent(`section${section}`, html);
        }

        // Wiki init (but content loads on demand)
        // this.wikiManager.init();
        await this.wikiManager.init();
    }

    /*===============================*/
    /*        CACHE DOM ELEMENTS     */
    /*===============================*/
    SetVariables() {
        // Get elements for Toast Notifications
        this.toast_container = document.getElementById('toastContainer');
        this.toastLiveNotification = document.getElementById("toastLiveNotification");
        this.toastLiveNotificationTimer = document.getElementById("toastTime");
        this.toastLiveNotificationTitle = document.getElementById("toastTitle");
        this.toastLiveNotificationMSG = document.getElementById("toastMessage");

        // Get elements for UO Shard API
        this.elStatusServerChecking = document.getElementById("server-status-text-checking");
        this.elStatusServerOnline = document.getElementById("server-status-text-online");
        this.elStatusServerOffline = document.getElementById("server-status-text-offline");

        // Get elements for Player counters
        this.elPlayerLabelPlayersChecking = document.getElementById("player-count-label-checking");
        this.elPlayerLabelCountNumber = document.getElementById("player-count-number");
        this.elPlayerLabelPlayers = document.getElementById("player-count-label-players");
        this.elPlayerLabelRealUnreachable = document.getElementById("player-count-label-unreachable");
    }

    /*===============================*/
    /*        NAVIGATION SYSTEM      */
    /*===============================*/
    setupNavigation() {
        const navLinks = document.querySelectorAll('#navbar .nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').replace('#', '');
                await this.navigateToSection(sectionId);
            });
        });

        // Browser back / forward
        window.addEventListener('popstate', (e) => {
            if (e.state?.section) {
                this.navigateToSection(e.state.section, false);
            }
        });

        /*========================================*/
        /* DEFAULT SECTION LOAD (FIX PRINCIPALE)  */
        /*========================================*/
        const hash = window.location.hash.replace('#', '');

        // Fallback automatico se hash non valido
        const initialSection = document.getElementById(hash)
            ? hash
            : 'sectionHome';

        this.navigateToSection(initialSection, true);
    }

    /*===============================*/
    /*     SECTION NAVIGATION CORE   */
    /*===============================*/
    async navigateToSection(sectionId, addToHistory = true) {
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) {
            console.warn(`Section not found: ${sectionId}`);
            return;
        }

        // Hide all sections
        document.querySelectorAll('.section').forEach(section =>
            section.classList.remove('active')
        );

        // Show target
        targetSection.classList.add('active');

        // Lazy init wiki
        // if (sectionId === 'sectionWiki' && this.wikiManager && !this.wikiManager.initialized) {
        //     console.log(sectionId, this.wikiManager && !this.wikiManager.initialized);
        //     console.log('📚 Initializing WikiManager...');
        //     // await this.wikiManager.init();
        // }

        // History
        if (addToHistory) {
            history.pushState({ section: sectionId }, '', `#${sectionId}`);
        }

        // Scroll reset
        window.scrollTo({ top: 0, behavior: 'smooth' });

        this.currentSection = sectionId;
        console.log(`📍 Navigated to: ${sectionId}`);
    }

    /*===============================*/
    /*        TOAST HELPER           */
    /*===============================*/
    ShowToast(title, message, type = "") {
        this.toastLiveNotification.classList.remove(
            "toast-success",
            "toast-error",
            "toast-warning"
        );

        if (type) this.toastLiveNotification.classList.add(`toast-${type}`);

        this.toastLiveNotificationTitle.innerText = title;
        this.toastLiveNotificationMSG.innerText = message;
        this.toastLiveNotificationTimer.innerText = "now";

        new bootstrap.Toast(this.toastLiveNotification, { delay: 4000 }).show();
    }

    /*===============================*/
    /*        GLOBAL UPDATE TICK     */
    /*===============================*/
    Tick() {
        console.log("🔄 Global update...");
        this.updateDashboard();
    }

    /*===============================*/
    /*        DASHBOARD UPDATE       */
    /*===============================*/
    async updateDashboard() {
        try {
            this.setServerCheckingUI();

            this.statusData = await this.uoShardApi.getServerStatus();
            this.playersData = await this.uoShardApi.getPlayerList();

            const isOnline = this.statusData?.online === true;

            if (!isOnline) throw new Error("Server offline");

            this.elStatusServerOffline.classList.add("hidden");
            this.elStatusServerOnline.classList.remove("hidden");

            const count = Array.isArray(this.playersData)
                ? this.playersData.length
                : 0;

            this.elPlayerLabelCountNumber.innerText = count;

            this.elPlayerLabelRealUnreachable.classList.add("hidden");
            this.elPlayerLabelCountNumber.classList.remove("hidden");
            this.elPlayerLabelPlayers.classList.remove("hidden");
        } catch {
            this.setServerOfflineUI();
        }
    }

    setServerOfflineUI() {
        this.elStatusServerChecking.classList.add("hidden");
        this.elStatusServerOnline.classList.add("hidden");
        this.elStatusServerOffline.classList.remove("hidden");

        this.elPlayerLabelPlayersChecking.classList.add("hidden");
        this.elPlayerLabelCountNumber.classList.add("hidden");
        this.elPlayerLabelPlayers.classList.add("hidden");
        this.elPlayerLabelRealUnreachable.classList.remove("hidden");
    }

    setServerCheckingUI() {
        this.elStatusServerOnline.classList.add("hidden");
        this.elStatusServerOffline.classList.add("hidden");

        this.elPlayerLabelCountNumber.classList.add("hidden");
        this.elPlayerLabelPlayers.classList.add("hidden");
        this.elPlayerLabelRealUnreachable.classList.add("hidden");

        this.elStatusServerChecking.classList.remove("hidden");
        this.elPlayerLabelPlayersChecking.classList.remove("hidden");
    }
}

/*===============================*/
/*        APP BOOTSTRAP           */
/*===============================*/
const app = new Main_App_UOCS();

window.UOCS = {
    app,
    version: '1.0.0'
};

console.log('🎮 UOCS App loaded');