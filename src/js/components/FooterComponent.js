export default class TmkFooter extends HTMLElement {
    // This gets called when the HTML parser sees your tag
    constructor() {
        super();
    }

    // Called when your element is inserted in the DOM or
    // immediately after the constructor if it’s already in the DOM
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <hr>
                <footer>
                  <p><a href="https://itf-web-advanced.netlify.app/">Webdesign Advanced</a> - <a href="https://www.thomasmore.be/opleidingen/professionele-bachelor/it-factory">IT Factory</a><br>
                  Thomas More Kempen - &copy; ${new Date().getFullYear()}</p>
                </footer>
            </div>
        `;
    }
}

// This registers your new tag and associates it with your class
customElements.define('tmk-footer', TmkFooter);
