/* Global Nav Functions */

let componentEl;
let hamburgerDropdown;
let isMenuOpen = false;
let activeMenuItem = null;

// /* Focus Region Functions */

// // Search
// let search
// setTimeout(() => {
//   search = document.getElementById('global-header__search-form');
//   search.onkeydown = onSearchEnter;
//   search.addEventListener('focusin', onSearchFocusIn)
//   search.addEventListener('focusout', onSearchLeave)
// }, 1)

// function onSearchEnter(e) {
//   if (document.activeElement.id === "global-header__search-form") {
//     if (e.code === 'Space' || e.code === 'Enter') {
//       e.preventDefault()
//       let input = document.getElementById('global-header__search-input')
//       let btn = document.getElementById('global-header__search-btn')
//       btn.tabIndex = '0'
//       input.tabIndex = '0'
//       input.focus()
//     }
//   }
// }

// function onSearchFocusIn() {
//   if (document.activeElement.id !== "global-header__search-form") {
//     let input = document.getElementById('global-header__search-input')
//     let btn = document.getElementById('global-header__search-btn')
//     btn.tabIndex = '0'
//     input.tabIndex = '0'
//   }
// }

// function onSearchLeave() {
//   console.log(document.activeElement)
//   if (document.activeElement.id !== "global-header__search-form" &&
//     document.activeElement.id !== 'global-header__search-input' &&
//     document.activeElement.id !== 'global-header__search-btn'
//   ) {
//     let input = document.getElementById('global-header__search-input')
//     let btn = document.getElementById('global-header__search-btn')
//     btn.tabIndex = '-1'
//     input.tabIndex = '-1'
//   }
// }

// // Product Categories
// let categories
// setTimeout(() => {
//   categories = document.getElementById("primary-nav");
//   categories.onkeydown = onCategoriesEnter;
//   categories.addEventListener('focusin', onCategoriesFocusIn)
//   categories.addEventListener('focusout', onCategoriesLeave)
// }, 1)

// function onCategoriesEnter(e) {
//   if (document.activeElement.id === "primary-nav") {
//     if (e.code === 'Space' || e.code === 'Enter') {
//       e.preventDefault()
//       let women = document.getElementById('main-nav-women')
//       let men = document.getElementById('main-nav-men')
//       let girls = document.getElementById('main-nav-girls')
//       let boys = document.getElementById('main-nav-boys')
//       women.tabIndex = '0'
//       men.tabIndex = '0'
//       girls.tabIndex = '0'
//       boys.tabIndex = '0'
//       women.focus()
//     }
//   }
// }

// function onCategoriesFocusIn() {
//   if (document.activeElement.id !== "primary-nav") {
//     let women = document.getElementById('main-nav-women')
//     let men = document.getElementById('main-nav-men')
//     let girls = document.getElementById('main-nav-girls')
//     let boys = document.getElementById('main-nav-boys')
//     women.tabIndex = '0'
//     men.tabIndex = '0'
//     girls.tabIndex = '0'
//     boys.tabIndex = '0'
//   }
// }

// function onCategoriesLeave() {
//   console.log(document.activeElement)
//   if (document.activeElement.id !== "primary-nav" &&
//     document.activeElement.id !== 'main-nav-women' &&
//     document.activeElement.id !== 'main-nav-men' &&
//     document.activeElement.id !== 'main-nav-boys' &&
//   document.activeElement.id !== 'main-nav-girls'
//   ) {
//     let women = document.getElementById('main-nav-women')
//     let men = document.getElementById('main-nav-men')
//     let girls = document.getElementById('main-nav-girls')
//     let boys = document.getElementById('main-nav-boys')
//     women.tabIndex = '-1'
//     men.tabIndex = '-1'
//     girls.tabIndex = '-1'
//     boys.tabIndex = '-1'
//   }
// }

// // Store
// let store
// setTimeout(() => {
//   store = document.getElementById("secondary-nav");
//   store.onkeydown = onStoreEnter;
//   store.addEventListener('focusin', onStoreFocusIn)
//   store.addEventListener('focusout', onStoreLeave)
// }, 1)

// function onStoreEnter(e) {
//   if (document.activeElement.id === "secondary-nav") {
//     if (e.code === 'Space' || e.code === 'Enter') {
//       e.preventDefault()
//       let account = document.getElementById('account-button')
//       let cart = document.getElementById('mini-cart-button')
//       let stores = document.getElementById('about-us-link')
//       let contact = document.getElementById('contact-button')
//       account.tabIndex = '0'
//       cart.tabIndex = '0'
//       stores.tabIndex = '0'
//       contact.tabIndex = '0'
//       account.focus()
//     }
//   }
// }

// function onStoreFocusIn() {
//   if (document.activeElement.id !== "secondary-nav") {
//     let account = document.getElementById('account-button')
//     let cart = document.getElementById('mini-cart-button')
//     let stores = document.getElementById('about-us-link')
//     let contact = document.getElementById('contact-button')
//     account.tabIndex = '0'
//     cart.tabIndex = '0'
//     stores.tabIndex = '0'
//     contact.tabIndex = '0'
//   }
// }

// function onStoreLeave() {
//   console.log(document.activeElement)
//   if (document.activeElement.id !== "secondary-nav" &&
//     document.activeElement.id !== 'account-button' &&
//     document.activeElement.id !== 'account-button' &&
//     document.activeElement.id !== 'about-us-link' &&
//   document.activeElement.id !== 'contact-button'
//   ) {
//     let account = document.getElementById('account-button')
//     let cart = document.getElementById('mini-cart-button')
//     let stores = document.getElementById('about-us-link')
//     let contact = document.getElementById('contact-button')
//     account.tabIndex = '-1'
//     cart.tabIndex = '-1'
//     stores.tabIndex = '-1'
//     contact.tabIndex = '-1'
//   }
// }

// /* End Focus Region Functions */

function onHamburgerMenuClick(event) {
  isMenuOpen = !isMenuOpen;
  event.currentTarget.setAttribute('aria-expanded', isMenuOpen);
  hamburgerDropdown.forEach(function(dropdown) {
    dropdown.classList.toggle('open');
  });
}

function onDocumentClick(event) {
  const target = event.target;
  if (!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('primary-nav__heading')) {
    closeMenu(activeMenuItem);
    removeDocumentClickHandler();
  }
}

function addDocumentClickHandler() {
  setTimeout(function() {
    window.addEventListener('click', onDocumentClick);
  }, 1);
}

function removeDocumentClickHandler() {
  window.removeEventListener('click', onDocumentClick);
}

function getActiveElement() {
  // the active element (with focus) isn't available yet when the blur event fires
  // so we kick this function down the stack a little with setTimeout
  return new Promise(function(resolve) {
    setTimeout(function() {
      const activeFocusElement = document.activeElement;
      resolve({
        inOpenMenu: activeFocusElement.matches('.has-submenu.open *')
      });
    }, 1);
  });
}

function onMenuItemBlur(event) {
  const blurFromOpenMenu = event.currentTarget.matches('.has-submenu.open *');
  getActiveElement().then(function(focusElement) {
    if (blurFromOpenMenu && !focusElement.inOpenMenu) {
      closeMenu(activeMenuItem);
    }
  });
}

function closeMenu(element) {
  if (element && element.parentNode.classList.contains('open')) {
    element.parentNode.classList.remove('open');
    element.setAttribute('aria-expanded', 'false');
    activeMenuItem = null;
  }
}

function openMenu(element) {
  const parent = element.parentNode;
  closeMenu(activeMenuItem);
  parent.classList.add('open');
  element.setAttribute('aria-expanded', 'true');
  activeMenuItem = element;
  addDocumentClickHandler();
}

function onClickMenuItemWithSubmenu(event) {
  event.stopPropagation();
  const target = event.currentTarget;
  target.parentNode.classList.contains('open') ? closeMenu(target) : openMenu(target);
  return false;
}

function setActiveClass() {
  // temporary way to set active class on "Women" nav item when in PLP or PDP page
  var pathname = window.location.pathname;
  if(pathname.indexOf("/plp/") >= 0 || pathname.indexOf("/pdp/") >= 0) {
    document.querySelector('#main-nav-women').className += " active";
  }
}

function init() {
  componentEl = document.querySelector('[data-component="global-header"]');
  const menuItems = componentEl.querySelectorAll('[data-js="dropdown-toggle"]');
  const submenuLastChildren = componentEl.querySelectorAll('.submenu-item:last-child a');
  const hamburgerMenuButton = componentEl.querySelector('[data-js="hamburger-toggle"]');
  hamburgerDropdown = componentEl.querySelectorAll('[data-js="hamburger-dropdown"]');

  menuItems.forEach(el => {
    el.addEventListener('click', onClickMenuItemWithSubmenu);
    el.addEventListener('blur', onMenuItemBlur);
  });

  submenuLastChildren.forEach(el => {
    el.addEventListener('blur', onMenuItemBlur);
  });

  hamburgerMenuButton.addEventListener('click', onHamburgerMenuClick);

  setActiveClass();
}

export { init };
