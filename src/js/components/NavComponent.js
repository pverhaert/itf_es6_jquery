export default class TmkNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const active = this.getAttribute('active');
        this.innerHTML = `
            <div class="container">
                <header class="sticky">
                    <a href="/index.html" class="button ${active === 'home' ? 'active' : ''}">Home</a>
                    <a href="/es6/index.html" class="button ${active === 'es6' ? 'active' : ''}">
                      <span class="hidden-sm">JavaScript (ES6)</span>
                      <span class="hidden-md hidden-lg">ES6</span>
                    </a>
                    <a href="/jquery/index.html" class="button ${active === 'jq' ? 'active' : ''}">
                      <span class="hidden-sm">jQuery</span>
                      <span class="hidden-md hidden-lg">JQ</span>
                    </a>
                    <a href="/exercises/index.html" class="button ${active === 'ex' ? 'active' : ''}">
                      <span class="hidden-sm">Exercises</span>
                      <span class="hidden-md hidden-lg">EX</span>
                    </a>
                </header>
            <hr>
            </div>
        `;
    }
}
customElements.define('tmk-navbar', TmkNavbar);
