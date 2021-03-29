// Info: https://dev.to/ndesmic/how-to-make-a-tab-control-with-web-components-57on
const template = `
    <style>
        hr {
            box-sizing: content-box;
            border: 0;
            line-height: .5em;
            margin: var(--universal-margin);
            height: 0.0625rem;
            background: linear-gradient(to right, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent);
        }
        .tabs { 
          display: flex; 
          flex-direction: row; 
          flex-wrap: nowrap;
        }
        .tabs ::slotted(*) { 
            user-select: none; 
            cursor: pointer;
        }
        .tabs ::slotted(.selected) { 
            color: var(--pre-color);
            font-weight:bold;
        }
        .tabs-content ::slotted(*) { 
            display: none;
        }
        .tabs-content ::slotted(.show) { 
            display:block;
        }
    </style>
    <div class="tabs">
        <slot id="tab-slot" name="tab"></slot>
    </div>
    <hr>
    <div class="tabs-content">
        <slot id="content-slot" name="content"></slot>
    </div>
`;
export default class TmkTabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        this.selectedIndex = 0;
    }

    connectedCallback() {
        this.dom = {
            tabSlot: this.shadowRoot.getElementById('tab-slot'),
            tabs: this.shadowRoot.getElementById('tab-slot').assignedElements(),
            contentSlot: this.shadowRoot.getElementById('content-slot'),
            contents: this.shadowRoot.getElementById('content-slot').assignedElements(),
        };
        this.dom.tabs[0].classList.add('selected');
        this.dom.contents[0].classList.add('show');
        this.dom.tabSlot.addEventListener('click', (e) => this.clickTab(e));
    }

    clickTab(e) {
        const { target } = e;
        if (target.slot === 'tab') {
            const tabIndex = this.dom.tabs.indexOf(target);
            this.dom.tabs.forEach((tab) => tab.classList.remove('selected'));
            this.dom.tabs[tabIndex].classList.add('selected');
            this.dom.contents.forEach((content) => content.classList.remove('show'));
            this.dom.contents[tabIndex].classList.add('show');
        }
    }
}

customElements.define('tmk-tabs', TmkTabs);
