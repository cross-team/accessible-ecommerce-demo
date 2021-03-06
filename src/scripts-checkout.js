import headerTemplate from './components/header-checkout/header-checkout.hbs';
import footerTemplate from './components/footer/footer.hbs';
import constructionModalTemplate from './components/modal/construction-modal.hbs';
import * as GlobalNav from './components/header-checkout/global-navigation-checkout';
import { enableSkipLinks } from './js/utils';

// Global templating
const headerDOM = document.querySelector('[data-template="global-header-checkout"]');
const footerDOM = document.querySelector('[data-template="footer"]');
const constructionModalDOM = document.querySelector('[data-template="construction-modal"]');
const globalVariables = {
  rootPath: (
    window.location.pathname === '/index.html'
    || window.location.pathname === '/accessible-ecommerce-demo/'
    || window.location.pathname === '/accessible-ecommerce-demo/index.html'
  ) ? '.' : '..'
};
if (headerDOM) headerDOM.outerHTML = headerTemplate(globalVariables);
if (footerDOM) footerDOM.outerHTML = footerTemplate(globalVariables);
if (constructionModalDOM) constructionModalDOM.outerHTML = constructionModalTemplate(globalVariables);

// Global components
GlobalNav.init();
enableSkipLinks();
