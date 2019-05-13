import headerTemplate from './components/header/header.hbs';
import footerTemplate from './components/footer/footer.hbs';
import constructionModalTemplate from './components/modal/construction-modal.hbs';
import * as MiniCart from './components/mini-cart/mini-cart';
import * as GlobalNav from './components/header/global-navigation';
import * as Modal from './components/modal/modal';
import { enableSkipLinks } from './js/utils';

// Global templating
const headerDOM = document.querySelector('[data-template="global-header"]');
const footerDOM = document.querySelector('[data-template="footer"]');
const constructionModalDOM = document.querySelector('[data-template="construction-modal"]');
const header = {
  rootPath: (
    window.location.pathname === '/index.html'
    || window.location.pathname === '/accessible-ecommerce-demo/'
    || window.location.pathname === '/accessible-ecommerce-demo/index.html'
  ) ? '.' : '..'
};
if (headerDOM) headerDOM.outerHTML = headerTemplate(header);
if (footerDOM) footerDOM.outerHTML = footerTemplate();
if (constructionModalDOM) constructionModalDOM.outerHTML = constructionModalTemplate();

// Global components
GlobalNav.init();
MiniCart.init();

enableSkipLinks();