/*===============================*/
/*     ROADMAP TIMELINE CLASS    */
/*===============================*/

export default class RoadmapTimeline {

    constructor(containerId, roadmapData = []) {
        this.containerId = containerId;
        this.roadmapData = roadmapData;
        this.initialized = false;
        this.container = null;

        // Mappa status dal JSON → label e classe CSS
        this.statusConfig = {
            completed: { label: 'COMPLETED',    cssClass: 'completed' },
            active:    { label: 'IN PROGRESS',  cssClass: 'active' },
            current:   { label: 'IN PROGRESS',  cssClass: 'active' },
            future:    { label: 'UPCOMING',     cssClass: 'future' },
            upcoming:  { label: 'UPCOMING',     cssClass: 'future' }
        };
    }

    /*===============================*/
    /*        INITIALIZATION         */
    /*===============================*/

    async init() {
        if (this.initialized) {
            console.warn('RoadmapTimeline already initialized');
            return;
        }

        try {
            this.container = document.getElementById(this.containerId);

            if (!this.container) {
                throw new Error(`Container #${this.containerId} not found`);
            }

            this.render();
            this.initialized = true;
            console.log('RoadmapTimeline initialized');

        } catch (error) {
            console.error('RoadmapTimeline init error:', error);
        }
    }

    /*===============================*/
    /*        RENDER                  */
    /*===============================*/

    render() {
        this.container.innerHTML = '';

        this.roadmapData.forEach((item) => {
            const config = this.statusConfig[item.status] || this.statusConfig.future;
            const dateRange = `${this.formatDate(item.date_start)} - ${this.formatDate(item.date_end)}`;

            // Item wrapper
            const itemEl = document.createElement('div');
            itemEl.className = `roadmap-item roadmap-${config.cssClass}`;

            // Node (il pallino sulla corda)
            const node = document.createElement('div');
            node.className = 'roadmap-node';
            itemEl.appendChild(node);

            // Card contenuto
            const card = document.createElement('div');
            card.className = 'roadmap-card';

            // Immagine (se valida)
            if (item.image_url && !item.image_url.includes('example.com')) {
                const imgWrap = document.createElement('div');
                imgWrap.className = 'roadmap-card-image';

                const img = document.createElement('img');
                img.src = item.image_url;
                img.alt = item.title;
                img.loading = 'lazy';
                imgWrap.appendChild(img);
                card.appendChild(imgWrap);
            }

            // Date
            const dateEl = document.createElement('span');
            dateEl.className = 'roadmap-card-date';
            dateEl.textContent = dateRange;
            card.appendChild(dateEl);

            // Title
            const titleEl = document.createElement('h3');
            titleEl.className = 'roadmap-card-title';
            titleEl.textContent = item.title;
            card.appendChild(titleEl);

            // Description
            const descEl = document.createElement('p');
            descEl.className = 'roadmap-card-desc';
            descEl.textContent = item.description;
            card.appendChild(descEl);

            // Status badge
            const badge = document.createElement('span');
            badge.className = `roadmap-badge roadmap-badge-${config.cssClass}`;
            badge.textContent = config.label;
            card.appendChild(badge);

            itemEl.appendChild(card);
            this.container.appendChild(itemEl);
        });
    }

    /*===============================*/
    /*        UTILITIES              */
    /*===============================*/

    formatDate(dateStr) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(dateStr);
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    /*===============================*/
    /*        PUBLIC METHODS         */
    /*===============================*/

    setData(newData) {
        this.roadmapData = newData;
        if (this.initialized) {
            this.render();
        }
    }

    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.initialized = false;
    }
}
