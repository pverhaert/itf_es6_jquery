import './prism.js';
import './prism-file-highlight.min.js';

import TmkFooter from './components/FooterComponent.js';
import TmkNavbar from './components/NavComponent.js';
import TmkTabs from './components/TabComponent.js';

import Highlight from './modules/highlight.js';

// customElements.define('tmk-footer', TmkFooter);
// customElements.define('tmk-navbar', TmkNavbar);
// customElements.define('tmk-tabs', TmkTabs);

// console.log('module script'):

// Open external links in new window
document.querySelectorAll('a[href^="https://"], a[href^="http://"]').forEach((link) => {
    link.setAttribute('target', '_blank');
});
