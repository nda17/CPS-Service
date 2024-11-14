/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/index.mjs");




window.addEventListener('DOMContentLoaded', () => {
  const veil = document.querySelector('.page-container__veil');
  const sideBar = document.querySelector('.aside');
  const btnBurgerMenu = document.querySelector('.btn-burger-menu');
  const btnSideBarClose = document.querySelector('.side-bar__btn-close');
  const btnModalCallClose = document.querySelector('.modal-call__btn--close');
  const btnModalMessageClose = document.querySelector('.modal-message__btn--close');
  const modalCall = document.querySelector('.modal-call');
  const btnCall = document.querySelectorAll('.btn-modal-call');
  const modalMessage = document.querySelector('.modal-message');
  const btnMessage = document.querySelectorAll('.btn-modal-message');
  const slideLink = document.querySelectorAll('.slide-list__link');
  slideLink[0].classList.add('slide-list-link--active');
  const langLink = document.querySelectorAll('.side-bar-lang__link');
  langLink[0].classList.add('side-bar-lang__link--active');
  const asideMenuLink = document.querySelectorAll('.side-bar-link__item ');
  asideMenuLink[0].classList.add('side-bar-link__item--active');
  const btnMoreInfoAbout = document.querySelector('.about__btn-control-visible');
  const moreInfoTextAbout = document.querySelector('.about__btn-control-visible-name');
  const arrowAbout = document.querySelector('.about__btn-control-visible-icon');
  const hiddenTextAbout = document.querySelector('.about-text-wrap__hidden');
  const btnMoreInfoRepair = document.querySelector('.repair__btn-control-visible');
  const moreInfoTextRepair = document.querySelector('.repair__btn-control-visible-name');
  const arrowRepair = document.querySelector('.repair__btn-control-visible-icon');
  const repairCardWrap = document.querySelector('.repair-card-desktop-wrap');
  const btnMoreInfoBrand = document.querySelector('.brand__btn-control-visible');
  const moreInfoTextBrand = document.querySelector('.brand__btn-control-visible-name');
  const arrowBrand = document.querySelector('.brand__btn-control-visible-icon');
  const brandCardWrap = document.querySelector('.brand-card-desktop-wrap');
  const changeStateVeil = () => {
    if (!veil.classList.contains('page-container__veil--active')) {
      veil.classList.add('page-container__veil--active');
    } else {
      veil.classList.remove('page-container__veil--active');
    }
  };
  const clickVeilArea = () => {
    const menuModalActive = document.querySelector('.aside--active');
    const modalCallActive = document.querySelector('.modal-call--active');
    const modalMessageActive = document.querySelector('.modal-message--active');
    if (menuModalActive) {
      menuModalActive.classList.remove('aside--active');
      changeStateVeil();
    }
    if (modalCallActive) {
      modalCallActive.classList.remove('modal-call--active');
      changeStateVeil();
    }
    if (modalMessageActive) {
      modalMessageActive.classList.remove('modal-message--active');
      changeStateVeil();
    }
  };
  const changeStateMenuModal = () => {
    if (!sideBar.classList.contains('aside--active')) {
      changeStateVeil();
      sideBar.classList.add('aside--active');
    } else {
      changeStateVeil();
      sideBar.classList.remove('aside--active');
    }
  };
  const slideListLinkActive = event => {
    const active = document.querySelector('.slide-list-link--active');
    if (event.target.classList.contains('slide-list-link--active')) {
      return;
    } else {
      active.classList.remove('slide-list-link--active');
      event.target.classList.add('slide-list-link--active');
    }
  };
  const changeStateTextAbout = () => {
    if (!hiddenTextAbout.classList.contains('about-text-wrap__hidden--active')) {
      hiddenTextAbout.classList.add('about-text-wrap__hidden--active');
      arrowAbout.style.transform = 'rotate(180deg)';
      moreInfoTextAbout.innerText = 'Скрыть';
    } else {
      arrowAbout.style.transform = 'rotate(0deg)';
      moreInfoTextAbout.innerText = 'Читать далее';
      hiddenTextAbout.classList.remove('about-text-wrap__hidden--active');
    }
  };
  const changeStateGroupRepair = () => {
    if (!repairCardWrap.classList.contains('repairCardWrap--active')) {
      repairCardWrap.classList.add('repairCardWrap--active');
      arrowRepair.style.transform = 'rotate(180deg)';
      moreInfoTextRepair.innerText = 'Показать меньше';
    } else {
      arrowRepair.style.transform = 'rotate(0deg)';
      moreInfoTextRepair.innerText = 'Показать все';
      repairCardWrap.classList.remove('repairCardWrap--active');
    }
  };
  const changeStateGroupBrand = () => {
    if (!brandCardWrap.classList.contains('brandCardWrap--active')) {
      brandCardWrap.classList.add('brandCardWrap--active');
      arrowBrand.style.transform = 'rotate(180deg)';
      moreInfoTextBrand.innerText = 'Показать меньше';
    } else {
      arrowBrand.style.transform = 'rotate(0deg)';
      moreInfoTextBrand.innerText = 'Показать все';
      brandCardWrap.classList.remove('brandCardWrap--active');
    }
  };
  const asideMenuLinkActive = event => {
    const active = document.querySelector('.side-bar-link__item--active');
    if (event.target.closest('.side-bar-link__item--active')) {
      return;
    } else {
      active.classList.remove('side-bar-link__item--active');
      const parentCurrentItem = event.target.closest('.side-bar-link__item');
      parentCurrentItem.classList.add('side-bar-link__item--active');
    }
  };
  const langListLinkActive = event => {
    const active = document.querySelector('.side-bar-lang__link--active');
    if (event.target.classList.contains('slide-list-link--active')) {
      return;
    } else {
      active.classList.remove('side-bar-lang__link--active');
      event.target.classList.add('side-bar-lang__link--active');
    }
  };
  const changeStateCallModal = () => {
    const modalMessageActive = document.querySelector('.modal-message--active');
    const asideMenu = document.querySelector('.aside--active');
    if (asideMenu) {
      changeStateVeil();
      asideMenu.classList.remove('aside--active');
    }
    if (modalMessageActive) {
      changeStateMessageModal();
    }
    if (!modalCall.classList.contains('modal-call--active')) {
      changeStateVeil();
      modalCall.classList.add('modal-call--active');
    } else {
      changeStateVeil();
      modalCall.classList.remove('modal-call--active');
    }
  };
  const changeStateMessageModal = () => {
    const modalCallActive = document.querySelector('.modal-call--active');
    const asideMenu = document.querySelector('.aside--active');
    if (asideMenu) {
      changeStateVeil();
      asideMenu.classList.remove('aside--active');
    }
    if (modalCallActive) {
      changeStateCallModal();
    }
    if (!modalMessage.classList.contains('modal-message--active')) {
      changeStateVeil();
      modalMessage.classList.add('modal-message--active');
    } else {
      changeStateVeil();
      modalMessage.classList.remove('modal-message--active');
    }
  };
  btnBurgerMenu.addEventListener('click', changeStateMenuModal);
  btnSideBarClose.addEventListener('click', changeStateMenuModal);
  veil.addEventListener('click', clickVeilArea);
  slideLink.forEach(el => el.addEventListener('click', slideListLinkActive));
  btnMoreInfoAbout.addEventListener('click', changeStateTextAbout);
  btnMoreInfoRepair.addEventListener('click', changeStateGroupRepair);
  btnMoreInfoBrand.addEventListener('click', changeStateGroupBrand);
  asideMenuLink.forEach(el => el.addEventListener('click', asideMenuLinkActive));
  langLink.forEach(el => el.addEventListener('click', langListLinkActive));
  btnCall.forEach(el => el.addEventListener('click', changeStateCallModal));
  btnMessage.forEach(el => el.addEventListener('click', changeStateMessageModal));
  btnModalCallClose.addEventListener('click', changeStateCallModal);
  btnModalMessageClose.addEventListener('click', changeStateMessageModal);

  //Swiper
  if (window.innerWidth < 768) {
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.brand-slider', {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      initialSlide: 0,
      slidesPerView: 1.2,
      loop: true,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: true,
        disableOnInteraction: false
      }
    });
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.repair-slider', {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      initialSlide: 0,
      slidesPerView: 1.16,
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false
      }
    });
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.price-slider', {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      initialSlide: 0,
      slidesPerView: 1.16,
      loop: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: false
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}

.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}

/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 8px;
  bottom: var(--swiper-pagination-bottom, 8px);
  top: auto;
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}

/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}

.swiper-pagination-bullet {
  width: 8px;
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: 8px;
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: 50%;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: #000;
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: 0.2;
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}

.swiper-pagination-bullet:only-child {
  display: none !important;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: 8px;
  right: var(--swiper-pagination-right, 8px);
  left: auto;
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}

.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}

.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}

.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}

/* Fraction */
.swiper-pagination-fraction {
  color: inherit;
  color: var(--swiper-pagination-fraction-color, inherit);
}

/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}

.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}

.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}

.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: 4px;
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}

.swiper-pagination-lock {
  display: none;
}`, "",{"version":3,"sources":["webpack://./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css","webpack://./../../../1.%20Frontend/7.%20%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/CPS-Service/node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css"],"names":[],"mappings":"AAAA;EACE;;;;;;;;;;;;;;;;;;GAAA;ACmBF;;ADCA;EACE,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,+BAAA;EACA,WAAA;ACEF;;ADAA;EACE,UAAA;ACGF;;ADDA;;EAEE,wBAAA;ACIF;;ADFA,kBAAA;AACA;;;;EAIE,WAAA;EAAA,4CAAA;EACA,SAAA;EAAA,uCAAA;EACA,OAAA;EACA,WAAA;ACKF;;ADHA,YAAA;AACA;EACE,gBAAA;EACA,YAAA;ACMF;;ADJA;EACE,sBAAA;EACA,kBAAA;ACOF;;ADLA;EACE,mBAAA;ACQF;;ADNA;EACE,mBAAA;ACSF;;ADPA;EACE,sBAAA;ACUF;;ADRA;EACE,sBAAA;ACWF;;ADTA;EACE,sBAAA;ACYF;;ADVA;EACE,sBAAA;ACaF;;ADXA;EACE,UAAA;EAAA,uFAAA;EACA,WAAA;EAAA,yFAAA;EACA,qBAAA;EACA,kBAAA;EAAA,iEAAA;EACA,gBAAA;EAAA,gEAAA;EACA,YAAA;EAAA,8DAAA;ACcF;;ADZA;EACE,YAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,wBAAA;EACQ,gBAAA;ACeV;;ADbA;EACE,eAAA;ACgBF;;ADdA;EACE,wBAAA;ACiBF;;ADfA;EACE,UAAA;EAAA,mDAAA;EACA,qEAAA;ACkBF;;ADhBA;;EAEE,UAAA;EAAA,0CAAA;EACA,UAAA;EAAA,yCAAA;EACA,QAAA;EACA,oCAAA;ACmBF;;ADjBA;;EAEE,aAAA;EAAA,2DAAA;EACA,cAAA;ACoBF;;ADlBA;;EAEE,QAAA;EACA,2BAAA;EACA,UAAA;ACqBF;;ADnBA;;EAEE,qBAAA;EACA,sCAAA;ACsBF;;ADnBA;;EAEE,aAAA;EAAA,6DAAA;ACsBF;;ADpBA;;EAEE,SAAA;EACA,2BAAA;EACA,mBAAA;ACuBF;;ADrBA;;EAEE,uCAAA;ACwBF;;ADrBA;EACE,wCAAA;ACwBF;;ADrBA,aAAA;AACA;EACE,cAAA;EAAA,uDAAA;ACwBF;;ADtBA,aAAA;AACA;EACE,+BAAA;EAAA,8EAAA;EACA,kBAAA;ACyBF;;ADvBA;EACE,qEAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;AC0BF;;ADxBA;EACE,2BAAA;AC2BF;;ADzBA;;;;EAIE,WAAA;EACA,WAAA;EAAA,sDAAA;EACA,OAAA;EACA,MAAA;AC4BF;;AD1BA;;;;EAIE,UAAA;EAAA,qDAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;AC6BF;;AD3BA;EACE,aAAA;AC8BF","sourcesContent":[":root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.swiper-pagination-lock {\n  display: none;\n}",":root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.swiper-pagination-lock {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:application/font-woff;charset=utf-8;base64, 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 */ "data:application/font-woff;charset=utf-8;base64, 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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Swiper 11.1.14
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 12, 2024
 */
/* FONT_START */
@font-face {
  font-family: "swiper-icons";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}

:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}

.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: ease;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, ease);
  transition-timing-function: initial;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}

.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-horizontal {
  touch-action: pan-y;
}

.swiper-vertical {
  touch-action: pan-x;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}

.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}

.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}

.swiper-3d {
  perspective: 1200px;
}

.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}

/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}

.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}

.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-left: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-top: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}

/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid #007aff;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}

.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}

.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}

.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}

@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */`, "",{"version":3,"sources":["webpack://./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css","webpack://./../../../1.%20Frontend/7.%20%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/CPS-Service/node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css"],"names":[],"mappings":"AAAA;;;;;;;;;;EAAA;AAYA,eAAA;AACA;EACE,2BAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA,aAAA;AACA;EACE,6BAAA;EACA;;;GAAA;ACGF;;ADEA;EACE,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;ACCF;;ADCA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,UAAA;EACA,cAAA;ACEF;;ADAA;EACE,sBAAA;ACGF;;ADDA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,gCAAA;EAAA,kFAAA;EAAA,mCAAA;EAAA,qFAAA;EACA,uBAAA;ACIF;;ADFA;;;EAGE,iCAAA;ACKF;;ADHA;EACE,mBAAA;ACMF;;ADJA;EACE,mBAAA;ACOF;;ADLA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,8BAAA;EACA,cAAA;ACQF;;ADNA;EACE,kBAAA;ACSF;;ADPA,gBAAA;AACA;;EAEE,YAAA;ACUF;;ADRA;EACE,uBAAA;EACA,sCAAA;ACWF;;ADTA;EACE,wBAAA;EAEQ,2BAAA;ACYV;;ADVA,eAAA;AACA;EACE,mBAAA;ACaF;;ADXA;EACE,4BAAA;ACcF;;ADZA;EACE,mBAAA;ACeF;;ADbA;;EAEE,4BAAA;ACgBF;;ADdA,aAAA;AACA;EACE,cAAA;EACA,qBAAA;EACA,gBAAA;EACA,wBAAA;EACA,mCAAA;ACiBF;;ADfA;EACE,aAAA;ACkBF;;ADhBA;EACE,8BAAA;ACmBF;;ADjBA;EACE,6BAAA;ACoBF;;ADlBA;EACE,6BAAA;ACqBF;;ADnBA;EACE,sBAAA;ACsBF;;ADpBA;EACE,uBAAA;ACuBF;;ADrBA;EACE,WAAA;EACA,cAAA;EACA,WAAA;ACwBF;;ADtBA;EACE,gCAAA;EACA,wBAAA;ACyBF;;ADvBA;EACE,iDAAA;AC0BF;;ADxBA;EACE,YAAA;EACA,eAAA;EACA,0CAAA;AC2BF;;ADzBA;EACE,gDAAA;AC4BF;;AD1BA;EACE,WAAA;EACA,cAAA;EACA,2CAAA;AC6BF;;AD3BA,uBAAA;AACA,eAAA;AACA;;;;;;;;;;EAUE,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,WAAA;AC8BF;;AD5BA;EACE,+BAAA;AC+BF;;AD7BA;EACE,gFAAA;ACgCF;;AD9BA;EACE,iFAAA;ACiCF;;AD/BA;EACE,+EAAA;ACkCF;;ADhCA;EACE,kFAAA;ACmCF;;ADjCA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;EAAA,0EAAA;EACA,kBAAA;EACA,6BAAA;ACoCF;;ADlCA;;EAEE,mDAAA;ACqCF;;ADnCA;EACE,8BAAA;ACsCF;;ADpCA;EACE,8BAAA;ACuCF;;ADrCA;EACE;IACE,uBAAA;ECwCF;EDtCA;IACE,yBAAA;ECwCF;AACF;ADtCA,qBAAA","sourcesContent":["/**\n * Swiper 11.1.14\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 12, 2024\n */\n/* FONT_START */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n\n.swiper-vertical {\n  touch-action: pan-x;\n}\n\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n\n.swiper-3d {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */","/**\n * Swiper 11.1.14\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 12, 2024\n */\n/* FONT_START */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n\n.swiper-vertical {\n  touch-action: pan-x;\n}\n\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n\n.swiper-3d {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes/TTLakes-Regular.woff */ "./src/fonts/TTLakes/TTLakes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/pages/home-page/services/go.svg */ "./src/icons/pages/home-page/services/go.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/buttons/btn-control-visible/arrow.svg */ "./src/icons/buttons/btn-control-visible/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/buttons/btn-conditions/line-arrow.svg */ "./src/icons/buttons/btn-conditions/line-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/side-bar/highlight.svg */ "./src/icons/side-bar/highlight.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
  font-family: TTLakes;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  font-weight: 400;
  font-style: normal;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
}

button {
  background-color: transparent;
  outline: none;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

html {
  scrollbar-gutter: stable;
}

html,
body {
  height: 100%;
  line-height: 1;
  font-size: 16px;
  font-family: "TTLakes";
  background-color: #f8f8f8;
  color: #1b1c21;
}

.page-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.page-container__veil {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
  z-index: 10;
  opacity: 0.7;
  display: none;
}
.page-container__veil--active {
  display: block;
}

.visually-hidden {
  display: none;
}

.container {
  padding: 0 16px;
}
.header {
  height: 88px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #b8ffec;
}

.header--mg {
  margin-bottom: 24px;
}
.aside {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  min-height: 676px;
  background-color: #ffffff;
  visibility: hidden;
  transition: all 1s;
  transform: translate(-500px);
  padding: 16px 24px 32px 24px;
  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2);
}

.aside--active {
  visibility: visible;
  transform: translate(0);
}
.footer {
  padding-top: 16px;
}
.footer__privacy-policy {
  display: flex;
  transition: all 0.4s;
}
.footer__privacy-policy:hover {
  color: #000000;
}
.footer__privacy-policy-text {
  padding-bottom: 19px;
  text-align: center;
  -webkit-user-select: none;
          user-select: none;
}
.footer__privacy-policy, .footer__privacy-policy-text {
  font-size: 14px;
  line-height: 16px;
  color: #7e7e82;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__company-text--mg, .footer__privacy-policy--mg {
  margin-bottom: 16px;
}

.footer-company-info {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
          user-select: none;
}
.footer-company-info__year, .footer-company-info__text {
  font-size: 14px;
  line-height: 16px;
  color: #7e7e82;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.nav-menu__wrap {
  display: flex;
  align-items: center;
  position: relative;
}

.header-logo-wrap {
  position: relative;
}

.line-decor {
  border: 2px solid #eaeaea;
  height: 32px;
  border-radius: 5px;
  top: 0;
  bottom: 0;
  margin: auto;
}

.line-decor--mg {
  position: absolute;
  left: 0;
}

.nav-menu-logo {
  display: flex;
  align-items: center;
}
.nav-menu-logo__img {
  width: 96.55px;
  height: 50.81px;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.4s;
}
.nav-menu-logo__img:hover {
  transform: scale(1.04);
}

.nav-menu-list {
  display: flex;
}
.nav-menu-list__icon {
  width: 40px;
  height: 40px;
  transition: all 0.4s;
}
.nav-menu-list__icon:hover {
  transform: scale(1.04);
}
.nav-menu-list__icon--mg {
  margin-right: 20px;
}

.nav-menu-list--hidden {
  display: none;
}

.btn-modal-profile,
.btn-modal-repair,
.btn-modal-search {
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-burger-menu {
  width: 40px;
  height: 40px;
  transition: all 0.4s;
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-burger-menu:hover {
  cursor: pointer;
  transform: scale(1.04);
}

.btn-burger-menu--mg {
  margin-right: 20px;
}
.btn-close {
  width: 40px;
  height: 40px;
  background: transparent;
  transition: all 0.4s;
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-close:hover {
  cursor: pointer;
  transform: scale(1.04);
}

.btn-call {
  width: 40px;
  height: 40px;
  background: transparent;
  transition: all 0.4s;
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-call:hover {
  cursor: pointer;
  transform: scale(1.04);
}

.btn-go-to-product {
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: drop-shadow(1px 1px 3px #7e7e82);
  transition: all 0.4s;
}
.btn-go-to-product:hover {
  transform: scale(1.04);
}

.btn-message {
  width: 40px;
  height: 40px;
  background: transparent;
  transition: all 0.4s;
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-message:hover {
  cursor: pointer;
  transform: scale(1.04);
}

.btn-submit-form-wrap {
  background: transparent;
  display: flex;
  justify-content: flex-end;
}
.btn-submit-form-wrap:hover {
  cursor: pointer;
}

.btn-submit-form {
  width: 119px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff3e79;
  letter-spacing: -0.15px;
  border-radius: 16px;
  transition: all 0.4s;
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-submit-form:hover {
  transform: scale(0.98);
}

.btn-order {
  width: 119px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff3e79;
  letter-spacing: -0.15px;
  border-radius: 16px;
  transition: all 0.4s;
  filter: drop-shadow(1px 1px 3px #000000);
}
.btn-order:hover {
  transform: scale(0.98);
}

.btn-order--position {
  position: absolute;
  bottom: 0;
  right: 0;
}

.btn-control-visible-wrap {
  width: 100%;
}

.btn-control-visible {
  display: flex;
  height: 24px;
  padding-left: 24px;
  filter: drop-shadow(1px 1px 3px #eaeaea);
}

.btn-control-visible-icon-wrap {
  width: 24px;
  height: 24px;
  position: relative;
}

.btn-control-visible-icon {
  width: 7.41px;
  height: 10.29px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.btn-control-visible-icon--mg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.btn-control-visible-name {
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
  letter-spacing: -0.2px;
  font-weight: 800;
  transition: all 0.4s;
}
.btn-control-visible-name:hover {
  cursor: pointer;
  color: #7e7e82;
}
.btn-conditions {
  display: block;
  position: relative;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  transition: all 0.4s;
  max-width: 192px;
  filter: drop-shadow(1px 1px 3px #b5b6bc);
}
.btn-conditions:hover {
  color: #7e7e82;
}
.btn-conditions__arrow-image {
  display: block;
  width: 24px;
  height: 27.49px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  left: 100px;
  bottom: -3px;
}
.title {
  display: flex;
  justify-content: flex-start;
  -webkit-user-select: none;
          user-select: none;
}
.title__text {
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.6px;
  font-weight: 800;
}

.title--mg {
  margin-bottom: 24px;
}

.line {
  border-radius: 0 13px 13px 0;
  width: 4px;
  height: 40px;
  background-color: #41f6d7;
}

.line--mg {
  margin-right: 12px;
}

.title-link-wrap {
  display: none;
}
.subtitle {
  width: 100%;
  text-transform: uppercase;
  padding: 16px;
  letter-spacing: -0.2px;
  background-color: #ffffff;
  color: #7e7e82;
  font-size: 18px;
  line-height: 24px;
  -webkit-user-select: none;
          user-select: none;
  background: linear-gradient(90deg, #f8f8f8 1.39%, #ffffff 100%);
}
.side-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.side-bar__link {
  transition: all 0.4s;
}
.side-bar__link:hover {
  transform: scale(1.04);
}
.side-bar__btn-close {
  margin-right: 7.22px;
}
.side-bar__link-image {
  width: 40px;
  height: 40px;
}
.side-bar__btn-search, .side-bar__btn-profile {
  filter: drop-shadow(1px 1px 3px #000000);
}
.side-bar__link-image-logo {
  transition: all 0.4s;
  width: 103.44px;
  height: 54.44px;
}
.side-bar__link-image-logo:hover {
  transform: scale(0.98);
}

.side-bar--mg {
  margin-bottom: 20.78px;
}

.side-bar-wrap {
  display: flex;
  align-items: center;
}

.side-bar-link {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.side-bar-link__item {
  position: relative;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
  -webkit-user-select: none;
          user-select: none;
  transition: all 0.4s;
}
.side-bar-link__item:hover {
  transform: translateY(2px);
}
.side-bar-link__item--active {
  color: #7e7e82;
}
.side-bar-link__item--active::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  position: absolute;
  left: -22px;
  top: -5px;
}

.side-bar-link--mg {
  margin-bottom: 32px;
}

.side-bar--mg-icon-block {
  margin-bottom: 16px;
  justify-content: inherit;
}

.side-bar-btn--mg {
  margin-right: 16px;
}

.side-bar-email {
  transition: all 0.4s;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
}
.side-bar-email:hover {
  color: #7e7e82;
}

.side-bar-email--mg {
  margin-bottom: 16px;
}

.side-bar-tel {
  transition: all 0.4s;
}

.side-bar-tel {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.6px;
  text-align: left;
}
.side-bar-tel:hover {
  color: #7e7e82;
}

.side-bar-tel--mg {
  margin-bottom: 8px;
}

.side-bar-lang__link {
  color: #1b1c21;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
}
.side-bar-lang__link--active {
  font-weight: 600;
  color: #7e7e82;
}
.side-bar-lang__link {
  -webkit-user-select: none;
          user-select: none;
}
.modal-call {
  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  min-height: 676px;
  background-color: #ffffff;
  visibility: hidden;
  transition: all 1s;
  border-left: 1px solid #d9fff5;
  box-shadow: -8px 7px 8px 0px rgba(14, 24, 80, 0.2);
  right: 0;
  transform: translate(500px);
  padding: 24px 16px 75px 16px;
}
.modal-call__btn-close--mg {
  margin-bottom: 40px;
}

.modal-call--active {
  visibility: visible;
  transform: translate(0);
}

.modal-title--mg {
  margin-left: -17px;
  margin-bottom: 24px;
}

.input-form {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  outline: none;
}
.input-form::placeholder {
  font-family: TT Lakes;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
  margin-bottom: 16px;
}
.input-form:focus {
  border: 2px solid #41f6d7;
}

.input-form--mg {
  margin-bottom: 16px;
}
.modal-message {
  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  min-height: 676px;
  background-color: #ffffff;
  visibility: hidden;
  transition: all 1s;
  border-left: 1px solid #d9fff5;
  box-shadow: -8px 7px 8px 0px rgba(14, 24, 80, 0.2);
  right: 0;
  transform: translate(500px);
  padding: 24px 16px 75px 16px;
}
.modal-message__btn-close--mg {
  margin-bottom: 40px;
}

.modal-message--active {
  visibility: visible;
  transform: translate(0);
}

.modal-title--mg {
  margin-left: -17px;
  margin-bottom: 24px;
}

.input-form {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  outline: none;
}
.input-form::placeholder {
  font-family: TT Lakes;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
  margin-bottom: 16px;
}
.input-form:focus {
  border: 2px solid #41f6d7;
}

.input-form--mg {
  margin-bottom: 16px;
}

.textarea-form {
  width: 100%;
  resize: none;
  outline: none;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  height: 118px;
  padding: 12px 16px;
}
.textarea-form::placeholder {
  font-family: TT Lakes;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
  margin-bottom: 16px;
}
.textarea-form:focus {
  border: 2px solid #41f6d7;
}

.textarea-form--mg {
  margin-bottom: 16px;
}
.privacy-policy {
  font-size: 14px;
}

.privacy-policy--mg {
  margin-bottom: 19px;
}

.privacy-policy-link {
  transition: all 0.4s;
  color: #ff3e79;
  font-size: 14px;
  line-height: 16px;
}
.privacy-policy-link:hover {
  color: #000000;
}

.slide-list-wrap {
  position: relative;
}

.slide-list {
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
  display: flex;
  overflow-y: hidden;
}
.slide-list::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.slide-list__link {
  display: block;
  color: #7e7e82;
  letter-spacing: -0.2px;
  white-space: nowrap;
  padding: 8px 16.54px;
  border: 2px solid transparent;
  transition: all 0.4s;
}
.slide-list__link:hover {
  color: #000000;
}

.slide-list-link--active {
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid #b8ffec;
}

.slide-list--mg {
  margin-bottom: 24px;
}
.veil-gradient {
  position: absolute;
  z-index: 10;
  right: 0;
  width: 24px;
  background: linear-gradient(270deg, #f8f8f8 16.84%, rgba(248, 248, 248, 0.0001) 100%);
}
.veil-gradient__slide-list--height {
  top: 0;
  right: 0;
  height: 36px;
}
.veil-gradient__services--height {
  top: 96px;
  height: 71px;
}
.veil-gradient__repair--height {
  top: 96px;
  height: 159px;
}
.veil-gradient__price--height {
  top: 72px;
  height: 200px;
}
.about {
  border-bottom: 1px solid #d9fff5;
  padding-bottom: 24px;
}
.about__btn-control-visible {
  padding-left: 0px !important;
}

.about-text-wrap {
  padding: 0 16px;
}
.about-text-wrap__visible {
  font-size: 14px;
  -webkit-user-select: none;
          user-select: none;
}
.about-text-wrap__visible--mg {
  margin-bottom: 16px;
}
.about-text-wrap__hidden {
  font-size: 14px;
  display: none;
}
.about-text-wrap__hidden--mg {
  margin-bottom: 16px;
}
.about-text-wrap__hidden--active {
  display: block;
}

.about-text-wrap--mg {
  margin-bottom: 32px;
}

.about-image-wrap {
  max-width: 526px;
  margin: 0 auto;
  display: block;
  height: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.6s;
}
.about-image-wrap::after {
  content: "";
  background-color: #000000;
  opacity: 0.3;
  position: absolute;
  border-radius: 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.about-image-wrap__picture {
  width: 100%;
  height: 176px;
}
.services {
  border-bottom: 1px solid #d9fff5;
  padding-bottom: 16px;
  position: relative;
}

.subtitle-services--mg {
  margin-bottom: 16px;
}

.brand-slider {
  height: 100px;
  position: relative;
  overflow: hidden;
  padding-left: 16px;
}

.brand-slider--mg {
  margin-bottom: 16px;
}

.brand-slider .swiper-pagination {
  bottom: 0 !important;
}

.brand-slider .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #b5b6bc;
}

.brand-slider__slide {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 16px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-slider__slide--mg {
  margin-right: 16px;
}

.brand-card-desktop-container {
  display: none;
}
.repair {
  border-bottom: 1px solid #d9fff5;
  padding-bottom: 16px;
  position: relative;
}

.repair-slider .swiper-pagination {
  bottom: 0 !important;
}

.repair-slider .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #b5b6bc;
}

.repair-slider {
  height: 188px;
  position: relative;
  overflow: hidden;
  padding-left: 16px;
}
.repair-slider__slide {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 16px;
  height: 160px;
  margin-right: 16px;
}

.repair-card-desktop-container {
  display: none;
}

.repair-card {
  position: relative;
  height: 100%;
}
.repair-card__title {
  font-weight: 600;
  -webkit-user-select: none;
          user-select: none;
}

.repair-card-btn--position {
  position: absolute;
  bottom: 0;
  right: 0;
}

.subtitle-repair--mg {
  margin-bottom: 16px;
}

.repair-card-desktop-container {
  align-items: flex-start;
  flex-direction: column;
}

.repair-card-desktop-wrap {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 160px;
  overflow: hidden;
  transition: all 0.1s;
}

.repair-card-desktop-wrap--mg {
  margin: 0 -6px 12px -6px;
}

.repairCardWrap--active {
  height: 100%;
  overflow: visible;
}

.repair-card-desktop {
  height: 160px;
}

.repair-card-desktop--mg {
  margin: 0 12px 12px 12px;
}

.repair-card-hidden768,
.repair-card-hidden1440 {
  opacity: 0;
  visibility: hidden;
}

.repair-card-hidden1440 {
  display: none;
}
.price {
  display: flex;
  flex-direction: column;
  position: relative;
}

.price--mg {
  margin-bottom: 6px;
}

.price-slider .swiper-pagination {
  bottom: 0 !important;
}

.price-slider .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #b5b6bc;
}

.price-slider {
  position: relative;
  overflow: hidden;
  padding-left: 16px;
  height: 229px;
}
.price-slider__slide {
  height: 200px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 16px;
}
.price-slider__slide--mg {
  margin-right: 16px;
}
.price-slider__wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
.price-slider__title {
  font-weight: 600;
  line-height: 16px;
}
.price-slider__title--mg {
  margin-bottom: 4px;
}
.price-slider__text {
  font-size: 14px;
  line-height: 18px;
  color: #1b1c21;
}
.price-slider__text--mg {
  margin-bottom: 16px;
}

.price-desktop-wrap {
  display: none;
}

.subtitle-price--mg {
  margin-bottom: 16px;
}
.conditions {
  border-bottom: 1px solid #d9fff5;
  padding-bottom: 40px;
}
.conditions__text {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  -webkit-user-select: none;
          user-select: none;
}
.conditions__text--mg {
  margin-bottom: 16px;
}
@media (min-width: 768px){
  .content-container {
    display: flex;
    justify-content: center;
  }
  .container {
    padding: 0 24px;
  }
  .aside {
    min-width: 320px;
  }
  main {
    width: 768px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 25px;
  }
  .footer__privacy-policy {
    width: 214px;
  }
  .footer__privacy-policy-text {
    width: 213px;
    padding-bottom: 0;
    text-align: right;
  }
  .footer__company-text--mg, .footer__privacy-policy--mg {
    margin-bottom: 0;
  }
  .footer-company-info {
    width: 218px;
  }
  .footer-company-info__year {
    align-items: flex-start;
  }
  .nav-menu {
    justify-content: space-between;
  }
  .line-decor--mg {
    left: auto;
    right: 0;
  }
  .nav-menu-list--hidden {
    display: flex;
    margin-right: 20px;
  }
  .btn-burger-menu--mg {
    margin-right: 0px;
  }
  .btn-conditions {
    font-size: 16px;
    max-width: 316px;
  }
  .btn-conditions__arrow-image {
    left: 289px;
    bottom: -2px;
  }
  .title__text {
    font-size: 28px;
  }
  .line--mg {
    margin-right: 20px;
  }
  .subtitle {
    max-width: 100%;
    padding-left: 24px;
  }
  .modal-call {
    min-width: 320px;
    max-width: 420px;
  }
  .modal-call__btn-close--mg {
    margin-top: 16px;
    margin-bottom: 0px;
    margin-left: -90px;
  }
  .modal-title--mg {
    margin-top: -38px;
  }
  .modal-message {
    min-width: 320px;
    max-width: 420px;
  }
  .modal-message__btn-close--mg {
    margin-top: 16px;
    margin-bottom: 0px;
    margin-left: -90px;
  }
  .modal-title--mg {
    margin-top: -38px;
  }
  .slide-list--mg {
    margin-bottom: 32px;
  }
  .veil-gradient {
    display: none;
  }
  .about {
    display: flex;
    padding-bottom: 35px;
  }
  .about-text-wrap {
    padding: 0;
    width: 50%;
  }
  .about-text-wrap__visible--mg {
    margin-bottom: 25px;
  }
  .about-text-wrap--mg {
    margin-right: 48px;
    margin-bottom: 0;
  }
  .about-image-wrap__picture {
    height: 208px;
  }
  .about-image-wrap:hover {
    transform: scale(1.03);
  }
  .services {
    padding-bottom: 31px;
  }
  .subtitle-services--mg {
    margin-bottom: 24px;
  }
  .brand-slider {
    display: none;
  }
  .brand-card-desktop-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .brand-card-desktop {
    width: calc(33.074% - 30px);
  }
  .brand-card-desktop-wrap {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: 160px;
    overflow: hidden;
  }
  .brand-card-desktop-wrap--mg {
    margin: 0 -6px 12px -6px;
  }
  .brandCardWrap--active {
    height: 100%;
    overflow: visible;
  }
  .brand-card-desktop {
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    padding: 20px 16px;
    width: 224px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-card-desktop--mg {
    margin: 0 12px 16px 12px;
  }
  .brand-card-hidden768,
  .brand-card-hidden1440 {
    opacity: 0;
    visibility: hidden;
  }
  .brand-card-hidden1440 {
    display: none;
  }
  .brand-card-hidden1440 {
    opacity: 0;
    visibility: hidden;
  }
  .repair-slider {
    display: none;
  }
  .repair-slider__slide {
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    padding: 16px;
    width: 240px;
    height: 160px;
  }
  .repair-card {
    width: 224px;
    height: 160px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    padding: 16px;
  }
  .repair-card-btn--position {
    bottom: 16px;
    right: 16px;
  }
  .repair {
    padding-bottom: 31px;
  }
  .subtitle-repair--mg {
    margin-bottom: 24px;
  }
  .repair-card-desktop-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .repair-card-desktop {
    width: calc(33.074% - 30px);
  }
  .price-slider {
    display: none;
  }
  .price-desktop-wrap {
    display: block;
  }
  .price-desktop-wrap--mg {
    margin-bottom: 24px;
  }
  .price-desktop-title {
    display: grid;
    grid-template-columns: 372px 96px 101px;
    padding: 0 16px;
  }
  .price-desktop-title__text {
    font-size: 14px;
    line-height: 16px;
    opacity: 0.7218000000000001;
    -webkit-user-select: none;
            user-select: none;
  }
  .price-desktop-title--mg {
    margin-bottom: 16px;
  }
  .price-desktop-list {
    display: grid;
    grid-template-columns: 372px 96px 101px 119px;
    grid-template-rows: 64px 64px 64px 64px 64px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 0 16px;
    box-shadow: 0px 0px 15px 7px rgba(34, 60, 80, 0.2);
  }
  .price-desktop-list__wrap {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
  }
  .price-desktop-list__wrap--no-border {
    border: none;
  }
  .price-desktop-list__item-text {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    -webkit-user-select: none;
            user-select: none;
  }
  .subtitle-price--mg {
    margin-bottom: 31px;
  }
  .conditions {
    padding-bottom: 47px;
  }
  .conditions__text {
    max-width: 421px;
  }
}
@media (min-width: 1440px){
  .page-container {
    max-width: 1440px;
  }
  .container {
    padding: 33.08px 34px 0 34px;
  }
  .header {
    display: none;
  }
  .aside {
    height: inherit;
    width: 306px;
    padding: 33.08px 29px 0 22px;
    position: static;
    visibility: visible;
    box-shadow: none;
    transform: inherit;
  }
  main {
    width: 1120px;
  }
  .footer .footer {
    padding-bottom: 21px;
  }
  .footer .footer__privacy-policy-text {
    width: 330px;
    padding-bottom: 21px;
  }
  .btn-control-visible {
    padding-left: 32px;
  }
  .line--mg {
    margin-right: 30px;
  }
  .title--mg {
    padding-top: 42px;
  }
  .title__text--mg {
    margin-right: 449px;
  }
  .title-link-wrap {
    display: flex;
  }
  .title-link__icons {
    display: flex;
    align-items: center;
  }
  .title-link__icons--mg {
    margin-right: 32px;
  }
  .title-link__icons-link {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    transition: all 0.4s;
    color: #1b1c21;
  }
  .title-link__icons-link:hover {
    color: #7e7e82;
  }
  .title-link__icons-icon {
    width: 40px;
    height: 40px;
    padding-left: 8px;
    transition: all 0.4s;
    filter: drop-shadow(1px 1px 3px #000000);
  }
  .title-link__icons-icon:hover {
    transform: scale(1.04);
  }
  .subtitle {
    padding-left: 32px;
  }
  .side-bar {
    margin-bottom: 37px;
  }
  .side-bar__btn-close {
    display: none;
  }
  .side-bar-link {
    row-gap: 28px;
  }
  .side-bar-link--mg {
    margin-bottom: 241px;
  }
  .side-bar--mg-icon-block {
    margin-bottom: 16.5px;
  }
  .side-bar-tel--mg {
    margin-bottom: 40.8px;
  }
  .side-bar-email--mg {
    margin-bottom: 12.5px;
  }
  .slide-list {
    flex-wrap: wrap;
  }
  .slide-list--mg {
    margin-bottom: 16.22px;
  }
  .about {
    padding-bottom: 51px;
  }
  .about-image-wrap__picture {
    max-width: 531px;
    height: 307px;
  }
  .about-text-wrap {
    max-width: 490px;
  }
  .about-text-wrap__hidden--mg {
    margin-bottom: 13.78px;
  }
  .about-text-wrap__hidden--mg {
    margin-bottom: 13.78px;
  }
  .about-text-wrap--mg {
    margin-right: 36px;
  }
  .about-image-wrap:hover {
    transform: scale(1.04);
  }
  .services {
    padding-bottom: 49px;
  }
  .brand-card-desktop-container {
    align-items: flex-start;
    flex-direction: column;
  }
  .brand-card-desktop {
    width: calc((86.79% - 12px) / 4);
  }
  .brand-card-hidden1440 {
    display: block;
  }
  .repair {
    padding-bottom: 49px;
  }
  .repair-card {
    width: 240px;
  }
  .repair-card--mg {
    margin-right: 32px;
  }
  .repair-card-desktop {
    width: calc((86.79% - 12px) / 4);
  }
  .repair-card-hidden1440 {
    display: block;
  }
  .price-desktop-title {
    grid-template-columns: 470px 227px 192px;
  }
  .price-desktop-list {
    grid-template-columns: 470px 227px 192px 119px;
    padding: 0 24px;
  }
  .conditions {
    padding-bottom: 50px;
  }
}`, "",{"version":3,"sources":["webpack://./../../../1.%20Frontend/7.%20%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/CPS-Service/src/index.scss","webpack://./src/scss/base/_fonts.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_aside.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/components/_nav-menu.scss","webpack://./src/scss/components/buttons/_btn-burger-menu.scss","webpack://./src/scss/components/buttons/_btn-close.scss","webpack://./src/scss/components/buttons/_btn-call.scss","webpack://./src/scss/components/buttons/_btn-go-to-product.scss","webpack://./src/scss/components/buttons/_btn-message.scss","webpack://./src/scss/components/buttons/_btn-submit-form.scss","webpack://./src/scss/components/buttons/_btn-order.scss","webpack://./src/scss/components/buttons/_btn-control-visible.scss","webpack://./src/scss/components/buttons/_btn-conditions.scss","webpack://./src/scss/components/_title.scss","webpack://./src/scss/components/_subtitle.scss","webpack://./src/scss/components/_side-bar.scss","webpack://./src/scss/components/modals/_modal-call.scss","webpack://./src/scss/components/modals/_modal-message.scss","webpack://./src/scss/components/_privacy-policy.scss","webpack://./src/scss/components/_slide-list.scss","webpack://./src/scss/components/_veil-gradient.scss","webpack://./src/scss/components/pages/home-page/_about.scss","webpack://./src/scss/components/pages/home-page/_services.scss","webpack://./src/scss/components/pages/home-page/_repair.scss","webpack://./src/scss/components/pages/home-page/_price.scss","webpack://./src/scss/components/pages/home-page/_conditions.scss","webpack://./<no source>","webpack://./src/scss/layout/_main.scss","webpack://./src/index.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@font-face {\n  font-family: TTLakes;\n  font-display: swap;\n  src: url(\"../../fonts/TTLakes/TTLakes-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton {\n  background-color: transparent;\n  outline: none;\n}\n\nul,\nol,\nli {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\n\nhtml {\n  scrollbar-gutter: stable;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  font-size: 16px;\n  font-family: \"TTLakes\";\n  background-color: #f8f8f8;\n  color: #1b1c21;\n}\n\n.page-container {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: 1440px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n.page-container__veil {\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #ffffff;\n  z-index: 10;\n  opacity: 0.7;\n  display: none;\n}\n.page-container__veil--active {\n  display: block;\n}\n\n.visually-hidden {\n  display: none;\n}\n\n.container {\n  padding: 0 16px;\n}\n\n@media (min-width: 768px) {\n  .content-container {\n    display: flex;\n    justify-content: center;\n  }\n  .container {\n    padding: 0 24px;\n  }\n}\n@media (min-width: 1440px) {\n  .page-container {\n    max-width: 1440px;\n  }\n  .container {\n    padding: 33.08px 34px 0 34px;\n  }\n}\n.header {\n  height: 88px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-bottom: 1px solid #b8ffec;\n}\n\n.header--mg {\n  margin-bottom: 24px;\n}\n\n@media (min-width: 1440px) {\n  .header {\n    display: none;\n  }\n}\n.aside {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 360px;\n  min-height: 676px;\n  background-color: #ffffff;\n  visibility: hidden;\n  transition: all 1s;\n  transform: translate(-500px);\n  padding: 16px 24px 32px 24px;\n  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2);\n}\n\n.aside--active {\n  visibility: visible;\n  transform: translate(0);\n}\n\n@media (min-width: 768px) {\n  .aside {\n    min-width: 320px;\n  }\n}\n@media (min-width: 1440px) {\n  .aside {\n    height: inherit;\n    width: 306px;\n    padding: 33.08px 29px 0 22px;\n    position: static;\n    visibility: visible;\n    box-shadow: none;\n    transform: inherit;\n  }\n}\n@media (min-width: 768px) {\n  main {\n    width: 768px;\n  }\n}\n@media (min-width: 1440px) {\n  main {\n    width: 1120px;\n  }\n}\n.footer {\n  padding-top: 16px;\n}\n.footer__privacy-policy {\n  display: flex;\n  transition: all 0.4s;\n}\n.footer__privacy-policy:hover {\n  color: #000000;\n}\n.footer__privacy-policy-text {\n  padding-bottom: 19px;\n  text-align: center;\n  user-select: none;\n}\n.footer__privacy-policy, .footer__privacy-policy-text {\n  font-size: 14px;\n  line-height: 16px;\n  color: #7e7e82;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.footer__company-text--mg, .footer__privacy-policy--mg {\n  margin-bottom: 16px;\n}\n\n.footer-company-info {\n  display: flex;\n  flex-direction: column;\n  user-select: none;\n}\n.footer-company-info__year, .footer-company-info__text {\n  font-size: 14px;\n  line-height: 16px;\n  color: #7e7e82;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 32px;\n    padding-bottom: 25px;\n  }\n  .footer__privacy-policy {\n    width: 214px;\n  }\n  .footer__privacy-policy-text {\n    width: 213px;\n    padding-bottom: 0;\n    text-align: end;\n  }\n  .footer__company-text--mg, .footer__privacy-policy--mg {\n    margin-bottom: 0;\n  }\n  .footer-company-info {\n    width: 218px;\n  }\n  .footer-company-info__year {\n    align-items: flex-start;\n  }\n}\n@media (min-width: 1440px) {\n  .footer .footer {\n    padding-bottom: 21px;\n  }\n  .footer .footer__privacy-policy-text {\n    width: 330px;\n    padding-bottom: 21px;\n  }\n}\n.nav-menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n}\n.nav-menu__wrap {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.header-logo-wrap {\n  position: relative;\n}\n\n.line-decor {\n  border: 2px solid #eaeaea;\n  height: 32px;\n  border-radius: 5px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.line-decor--mg {\n  position: absolute;\n  left: 0;\n}\n\n.nav-menu-logo {\n  display: flex;\n  align-items: center;\n}\n.nav-menu-logo__img {\n  width: 96.55px;\n  height: 50.81px;\n  padding-left: 20px;\n  padding-right: 20px;\n  transition: all 0.4s;\n}\n.nav-menu-logo__img:hover {\n  transform: scale(1.04);\n}\n\n.nav-menu-list {\n  display: flex;\n}\n.nav-menu-list__icon {\n  width: 40px;\n  height: 40px;\n  transition: all 0.4s;\n}\n.nav-menu-list__icon:hover {\n  transform: scale(1.04);\n}\n.nav-menu-list__icon--mg {\n  margin-right: 20px;\n}\n\n.nav-menu-list--hidden {\n  display: none;\n}\n\n.btn-modal-profile,\n.btn-modal-repair,\n.btn-modal-search {\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n\n@media (min-width: 768px) {\n  .nav-menu {\n    justify-content: space-between;\n  }\n  .line-decor--mg {\n    left: auto;\n    right: 0;\n  }\n  .nav-menu-list--hidden {\n    display: flex;\n    margin-right: 20px;\n  }\n}\n.btn-burger-menu {\n  width: 40px;\n  height: 40px;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-burger-menu:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-burger-menu--mg {\n  margin-right: 20px;\n}\n\n@media (min-width: 768px) {\n  .btn-burger-menu--mg {\n    margin-right: 0px;\n  }\n}\n.btn-close {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-close:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-call {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-call:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-go-to-product {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-image: url(\"../../../icons/pages/home-page/services/go.svg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  filter: drop-shadow(1px 1px 3px #7e7e82);\n  transition: all 0.4s;\n}\n.btn-go-to-product:hover {\n  transform: scale(1.04);\n}\n\n.btn-message {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-message:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-submit-form-wrap {\n  background: transparent;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-submit-form-wrap:hover {\n  cursor: pointer;\n}\n\n.btn-submit-form {\n  width: 119px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #ffffff;\n  background-color: #ff3e79;\n  letter-spacing: -0.15px;\n  border-radius: 16px;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-submit-form:hover {\n  transform: scale(0.98);\n}\n\n.btn-order {\n  width: 119px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #ffffff;\n  background-color: #ff3e79;\n  letter-spacing: -0.15px;\n  border-radius: 16px;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-order:hover {\n  transform: scale(0.98);\n}\n\n.btn-order--position {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.btn-control-visible-wrap {\n  width: 100%;\n}\n\n.btn-control-visible {\n  display: flex;\n  height: 24px;\n  padding-left: 24px;\n  filter: drop-shadow(1px 1px 3px #eaeaea);\n}\n\n.btn-control-visible-icon-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.btn-control-visible-icon {\n  width: 7.41px;\n  height: 10.29px;\n  background-image: url(\"../../../icons/buttons/btn-control-visible/arrow.svg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.btn-control-visible-icon--mg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.btn-control-visible-name {\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  letter-spacing: -0.2px;\n  font-weight: 800;\n  transition: all 0.4s;\n}\n.btn-control-visible-name:hover {\n  cursor: pointer;\n  color: #7e7e82;\n}\n\n@media (min-width: 1440px) {\n  .btn-control-visible {\n    padding-left: 32px;\n  }\n}\n.btn-conditions {\n  display: block;\n  position: relative;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  transition: all 0.4s;\n  max-width: 192px;\n  filter: drop-shadow(1px 1px 3px #b5b6bc);\n}\n.btn-conditions:hover {\n  color: #7e7e82;\n}\n.btn-conditions__arrow-image {\n  display: block;\n  width: 24px;\n  height: 27.49px;\n  background-image: url(\"../../../icons/buttons/btn-conditions/line-arrow.svg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: absolute;\n  left: 100px;\n  bottom: -3px;\n}\n\n@media (min-width: 768px) {\n  .btn-conditions {\n    font-size: 16px;\n    max-width: 316px;\n  }\n  .btn-conditions__arrow-image {\n    left: 289px;\n    bottom: -2px;\n  }\n}\n.title {\n  display: flex;\n  justify-content: flex-start;\n  user-select: none;\n}\n.title__text {\n  font-size: 24px;\n  line-height: 40px;\n  letter-spacing: -0.6px;\n  font-weight: 800;\n}\n\n.title--mg {\n  margin-bottom: 24px;\n}\n\n.line {\n  border-radius: 0 13px 13px 0;\n  width: 4px;\n  height: 40px;\n  background-color: #41f6d7;\n}\n\n.line--mg {\n  margin-right: 12px;\n}\n\n.title-link-wrap {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .title__text {\n    font-size: 28px;\n  }\n  .line--mg {\n    margin-right: 20px;\n  }\n}\n@media (min-width: 1440px) {\n  .line--mg {\n    margin-right: 30px;\n  }\n  .title--mg {\n    padding-top: 42px;\n  }\n  .title__text--mg {\n    margin-right: 449px;\n  }\n  .title-link-wrap {\n    display: flex;\n  }\n  .title-link__icons {\n    display: flex;\n    align-items: center;\n  }\n  .title-link__icons--mg {\n    margin-right: 32px;\n  }\n  .title-link__icons-link {\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: -0.2px;\n    transition: all 0.4s;\n    color: #1b1c21;\n  }\n  .title-link__icons-link:hover {\n    color: #7e7e82;\n  }\n  .title-link__icons-icon {\n    width: 40px;\n    height: 40px;\n    padding-left: 8px;\n    transition: all 0.4s;\n    filter: drop-shadow(1px 1px 3px #000000);\n  }\n  .title-link__icons-icon:hover {\n    transform: scale(1.04);\n  }\n}\n.subtitle {\n  width: 100%;\n  text-transform: uppercase;\n  padding: 16px;\n  letter-spacing: -0.2px;\n  background-color: #ffffff;\n  color: #7e7e82;\n  font-size: 18px;\n  line-height: 24px;\n  user-select: none;\n  background: linear-gradient(90deg, #f8f8f8 1.39%, #ffffff 100%);\n}\n\n@media (min-width: 768px) {\n  .subtitle {\n    max-width: 100%;\n    padding-left: 24px;\n  }\n}\n@media (min-width: 1440px) {\n  .subtitle {\n    padding-left: 32px;\n  }\n}\n.side-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.side-bar__link {\n  transition: all 0.4s;\n}\n.side-bar__link:hover {\n  transform: scale(1.04);\n}\n.side-bar__btn-close {\n  margin-right: 7.22px;\n}\n.side-bar__link-image {\n  width: 40px;\n  height: 40px;\n}\n.side-bar__btn-search, .side-bar__btn-profile {\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.side-bar__link-image-logo {\n  transition: all 0.4s;\n  width: 103.44px;\n  height: 54.44px;\n}\n.side-bar__link-image-logo:hover {\n  transform: scale(0.98);\n}\n\n.side-bar--mg {\n  margin-bottom: 20.78px;\n}\n\n.side-bar-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.side-bar-link {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n}\n.side-bar-link__item {\n  position: relative;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  user-select: none;\n  transition: all 0.4s;\n}\n.side-bar-link__item:hover {\n  transform: translateY(2px);\n}\n.side-bar-link__item--active {\n  color: #7e7e82;\n}\n.side-bar-link__item--active::before {\n  content: url(\"../../icons/side-bar/highlight.svg\");\n  position: absolute;\n  left: -22px;\n  top: -5px;\n}\n\n.side-bar-link--mg {\n  margin-bottom: 32px;\n}\n\n.side-bar--mg-icon-block {\n  margin-bottom: 16px;\n  justify-content: inherit;\n}\n\n.side-bar-btn--mg {\n  margin-right: 16px;\n}\n\n.side-bar-email {\n  transition: all 0.4s;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n}\n.side-bar-email:hover {\n  color: #7e7e82;\n}\n\n.side-bar-email--mg {\n  margin-bottom: 16px;\n}\n\n.side-bar-tel {\n  transition: all 0.4s;\n}\n\n.side-bar-tel {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 32px;\n  letter-spacing: -0.6px;\n  text-align: left;\n}\n.side-bar-tel:hover {\n  color: #7e7e82;\n}\n\n.side-bar-tel--mg {\n  margin-bottom: 8px;\n}\n\n.side-bar-lang__link {\n  color: #1b1c21;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n}\n.side-bar-lang__link--active {\n  font-weight: 600;\n  color: #7e7e82;\n}\n.side-bar-lang__link {\n  user-select: none;\n}\n\n@media (min-width: 1440px) {\n  .side-bar {\n    margin-bottom: 37px;\n  }\n  .side-bar__btn-close {\n    display: none;\n  }\n  .side-bar-link {\n    row-gap: 28px;\n  }\n  .side-bar-link--mg {\n    margin-bottom: 241px;\n  }\n  .side-bar--mg-icon-block {\n    margin-bottom: 16.5px;\n  }\n  .side-bar-tel--mg {\n    margin-bottom: 40.8px;\n  }\n  .side-bar-email--mg {\n    margin-bottom: 12.5px;\n  }\n}\n.modal-call {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 360px;\n  min-height: 676px;\n  background-color: #ffffff;\n  visibility: hidden;\n  transition: all 1s;\n  border-left: 1px solid #d9fff5;\n  box-shadow: -8px 7px 8px 0px rgba(14, 24, 80, 0.2);\n  right: 0;\n  transform: translate(500px);\n  padding: 24px 16px 75px 16px;\n}\n.modal-call__btn-close--mg {\n  margin-bottom: 40px;\n}\n\n.modal-call--active {\n  visibility: visible;\n  transform: translate(0);\n}\n\n.modal-title--mg {\n  margin-left: -17px;\n  margin-bottom: 24px;\n}\n\n.input-form {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #eaeaea;\n  border-radius: 8px;\n  outline: none;\n}\n.input-form::placeholder {\n  font-family: TT Lakes;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  margin-bottom: 16px;\n}\n.input-form:focus {\n  border: 2px solid #41f6d7;\n}\n\n.input-form--mg {\n  margin-bottom: 16px;\n}\n\n@media (min-width: 768px) {\n  .modal-call {\n    min-width: 320px;\n    max-width: 420px;\n  }\n  .modal-call__btn-close--mg {\n    margin-top: 16px;\n    margin-bottom: 0px;\n    margin-left: -90px;\n  }\n  .modal-title--mg {\n    margin-top: -38px;\n  }\n}\n.modal-message {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 360px;\n  min-height: 676px;\n  background-color: #ffffff;\n  visibility: hidden;\n  transition: all 1s;\n  border-left: 1px solid #d9fff5;\n  box-shadow: -8px 7px 8px 0px rgba(14, 24, 80, 0.2);\n  right: 0;\n  transform: translate(500px);\n  padding: 24px 16px 75px 16px;\n}\n.modal-message__btn-close--mg {\n  margin-bottom: 40px;\n}\n\n.modal-message--active {\n  visibility: visible;\n  transform: translate(0);\n}\n\n.modal-title--mg {\n  margin-left: -17px;\n  margin-bottom: 24px;\n}\n\n.input-form {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #eaeaea;\n  border-radius: 8px;\n  outline: none;\n}\n.input-form::placeholder {\n  font-family: TT Lakes;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  margin-bottom: 16px;\n}\n.input-form:focus {\n  border: 2px solid #41f6d7;\n}\n\n.input-form--mg {\n  margin-bottom: 16px;\n}\n\n.textarea-form {\n  width: 100%;\n  resize: none;\n  outline: none;\n  border: 2px solid #eaeaea;\n  border-radius: 8px;\n  height: 118px;\n  padding: 12px 16px;\n}\n.textarea-form::placeholder {\n  font-family: TT Lakes;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  margin-bottom: 16px;\n}\n.textarea-form:focus {\n  border: 2px solid #41f6d7;\n}\n\n.textarea-form--mg {\n  margin-bottom: 16px;\n}\n\n@media (min-width: 768px) {\n  .modal-message {\n    min-width: 320px;\n    max-width: 420px;\n  }\n  .modal-message__btn-close--mg {\n    margin-top: 16px;\n    margin-bottom: 0px;\n    margin-left: -90px;\n  }\n  .modal-title--mg {\n    margin-top: -38px;\n  }\n}\n.privacy-policy {\n  font-size: 14px;\n}\n\n.privacy-policy--mg {\n  margin-bottom: 19px;\n}\n\n.privacy-policy-link {\n  transition: all 0.4s;\n  color: #ff3e79;\n  font-size: 14px;\n  line-height: 16px;\n}\n.privacy-policy-link:hover {\n  color: #000000;\n}\n\n.slide-list-wrap {\n  position: relative;\n}\n\n.slide-list {\n  -ms-overflow-style: none; /* IE и Edge */\n  scrollbar-width: none; /* Firefox */\n  display: flex;\n  overflow-y: hidden;\n}\n.slide-list::-webkit-scrollbar {\n  display: none; /* Chrome, Safari, Opera */\n}\n.slide-list__link {\n  display: block;\n  color: #7e7e82;\n  letter-spacing: -0.2px;\n  white-space: nowrap;\n  padding: 8px 16.54px;\n  border: 2px solid transparent;\n  transition: all 0.4s;\n}\n.slide-list__link:hover {\n  color: #000000;\n}\n\n.slide-list-link--active {\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 2px solid #b8ffec;\n}\n\n.slide-list--mg {\n  margin-bottom: 24px;\n}\n\n@media (min-width: 768px) {\n  .slide-list--mg {\n    margin-bottom: 32px;\n  }\n}\n@media (min-width: 1440px) {\n  .slide-list {\n    flex-wrap: wrap;\n  }\n  .slide-list--mg {\n    margin-bottom: 16.22px;\n  }\n}\n.veil-gradient {\n  position: absolute;\n  z-index: 10;\n  right: 0;\n  width: 24px;\n  background: linear-gradient(270deg, #f8f8f8 16.84%, rgba(248, 248, 248, 0.0001) 100%);\n}\n.veil-gradient__slide-list--height {\n  top: 0;\n  right: 0;\n  height: 36px;\n}\n.veil-gradient__services--height {\n  top: 96px;\n  height: 71px;\n}\n.veil-gradient__repair--height {\n  top: 96px;\n  height: 159px;\n}\n.veil-gradient__price--height {\n  top: 72px;\n  height: 200px;\n}\n\n@media (min-width: 768px) {\n  .veil-gradient {\n    display: none;\n  }\n}\n.about {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 24px;\n}\n.about__btn-control-visible {\n  padding-left: 0px !important;\n}\n\n.about-text-wrap {\n  padding: 0 16px;\n}\n.about-text-wrap__visible {\n  font-size: 14px;\n  user-select: none;\n}\n.about-text-wrap__visible--mg {\n  margin-bottom: 16px;\n}\n.about-text-wrap__hidden {\n  font-size: 14px;\n  display: none;\n}\n.about-text-wrap__hidden--mg {\n  margin-bottom: 16px;\n}\n.about-text-wrap__hidden--active {\n  display: block;\n}\n\n.about-text-wrap--mg {\n  margin-bottom: 32px;\n}\n\n.about-image-wrap {\n  max-width: 526px;\n  margin: 0 auto;\n  display: block;\n  height: 100%;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.6s;\n}\n.about-image-wrap::after {\n  content: \"\";\n  background-color: #000000;\n  opacity: 0.3;\n  position: absolute;\n  border-radius: 10px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.about-image-wrap__picture {\n  width: 100%;\n  height: 176px;\n}\n\n@media (min-width: 768px) {\n  .about {\n    display: flex;\n    padding-bottom: 35px;\n  }\n  .about-text-wrap {\n    padding: 0;\n    width: 50%;\n  }\n  .about-text-wrap__visible--mg {\n    margin-bottom: 25px;\n  }\n  .about-text-wrap--mg {\n    margin-right: 48px;\n    margin-bottom: 0;\n  }\n  .about-image-wrap__picture {\n    height: 208px;\n  }\n  .about-image-wrap:hover {\n    transform: scale(1.03);\n  }\n}\n@media (min-width: 1440px) {\n  .about {\n    padding-bottom: 51px;\n  }\n  .about-image-wrap__picture {\n    max-width: 531px;\n    height: 307px;\n  }\n  .about-text-wrap {\n    max-width: 490px;\n  }\n  .about-text-wrap__hidden--mg {\n    margin-bottom: 13.78px;\n  }\n  .about-text-wrap__hidden--mg {\n    margin-bottom: 13.78px;\n  }\n  .about-text-wrap--mg {\n    margin-right: 36px;\n  }\n  .about-image-wrap:hover {\n    transform: scale(1.04);\n  }\n}\n.services {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 16px;\n  position: relative;\n}\n\n.subtitle-services--mg {\n  margin-bottom: 16px;\n}\n\n.brand-slider {\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n  padding-left: 16px;\n}\n\n.brand-slider--mg {\n  margin-bottom: 16px;\n}\n\n.brand-slider .swiper-pagination {\n  bottom: 0 !important;\n}\n\n.brand-slider .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background-color: #b5b6bc;\n}\n\n.brand-slider__slide {\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n  height: 72px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.brand-slider__slide--mg {\n  margin-right: 16px;\n}\n\n.brand-card-desktop-container {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .services {\n    padding-bottom: 31px;\n  }\n  .subtitle-services--mg {\n    margin-bottom: 24px;\n  }\n  .brand-slider {\n    display: none;\n  }\n  .brand-card-desktop-container {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .brand-card-desktop {\n    width: calc(33.074% - 30px);\n  }\n  .brand-card-desktop-wrap {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    height: 160px;\n    overflow: hidden;\n  }\n  .brand-card-desktop-wrap--mg {\n    margin: 0 -6px 12px -6px;\n  }\n  .brandCardWrap--active {\n    height: 100%;\n    overflow: visible;\n  }\n  .brand-card-desktop {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    border-radius: 6px;\n    padding: 20px 16px;\n    width: 224px;\n    height: 72px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .brand-card-desktop--mg {\n    margin: 0 12px 16px 12px;\n  }\n  .brand-card-hidden768,\n  .brand-card-hidden1440 {\n    opacity: 0;\n    visibility: hidden;\n  }\n  .brand-card-hidden1440 {\n    display: none;\n  }\n  .brand-card-hidden1440 {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n@media (min-width: 1440px) {\n  .services {\n    padding-bottom: 49px;\n  }\n  .brand-card-desktop-container {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .brand-card-desktop {\n    width: calc((86.79% - 12px) / 4);\n  }\n  .brand-card-hidden1440 {\n    display: block;\n  }\n}\n.repair {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 16px;\n  position: relative;\n}\n\n.repair-slider .swiper-pagination {\n  bottom: 0 !important;\n}\n\n.repair-slider .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background-color: #b5b6bc;\n}\n\n.repair-slider {\n  height: 188px;\n  position: relative;\n  overflow: hidden;\n  padding-left: 16px;\n}\n.repair-slider__slide {\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n  height: 160px;\n  margin-right: 16px;\n}\n\n.repair-card-desktop-container {\n  display: none;\n}\n\n.repair-card {\n  position: relative;\n  height: 100%;\n}\n.repair-card__title {\n  font-weight: 600;\n  user-select: none;\n}\n\n.repair-card-btn--position {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.subtitle-repair--mg {\n  margin-bottom: 16px;\n}\n\n.repair-card-desktop-container {\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.repair-card-desktop-wrap {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: 160px;\n  overflow: hidden;\n  transition: all 0.1s;\n}\n\n.repair-card-desktop-wrap--mg {\n  margin: 0 -6px 12px -6px;\n}\n\n.repairCardWrap--active {\n  height: 100%;\n  overflow: visible;\n}\n\n.repair-card-desktop {\n  height: 160px;\n}\n\n.repair-card-desktop--mg {\n  margin: 0 12px 12px 12px;\n}\n\n.repair-card-hidden768,\n.repair-card-hidden1440 {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.repair-card-hidden1440 {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .repair-slider {\n    display: none;\n  }\n  .repair-slider__slide {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    border-radius: 6px;\n    padding: 16px;\n    width: 240px;\n    height: 160px;\n  }\n  .repair-card {\n    width: 224px;\n    height: 160px;\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    border-radius: 6px;\n    padding: 16px;\n  }\n  .repair-card-btn--position {\n    bottom: 16px;\n    right: 16px;\n  }\n  .repair {\n    padding-bottom: 31px;\n  }\n  .subtitle-repair--mg {\n    margin-bottom: 24px;\n  }\n  .repair-card-desktop-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .repair-card-desktop {\n    width: calc(33.074% - 30px);\n  }\n}\n@media (min-width: 1440px) {\n  .repair {\n    padding-bottom: 49px;\n  }\n  .repair-card {\n    width: 240px;\n  }\n  .repair-card--mg {\n    margin-right: 32px;\n  }\n  .repair-card-desktop {\n    width: calc((86.79% - 12px) / 4);\n  }\n  .repair-card-hidden1440 {\n    display: block;\n  }\n}\n.price {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.price--mg {\n  margin-bottom: 6px;\n}\n\n.price-slider .swiper-pagination {\n  bottom: 0 !important;\n}\n\n.price-slider .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background-color: #b5b6bc;\n}\n\n.price-slider {\n  position: relative;\n  overflow: hidden;\n  padding-left: 16px;\n  height: 229px;\n}\n.price-slider__slide {\n  height: 200px;\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n}\n.price-slider__slide--mg {\n  margin-right: 16px;\n}\n.price-slider__wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n}\n.price-slider__title {\n  font-weight: 600;\n  line-height: 16px;\n}\n.price-slider__title--mg {\n  margin-bottom: 4px;\n}\n.price-slider__text {\n  font-size: 14px;\n  line-height: 18px;\n  color: #1b1c21;\n}\n.price-slider__text--mg {\n  margin-bottom: 16px;\n}\n\n.price-desktop-wrap {\n  display: none;\n}\n\n.subtitle-price--mg {\n  margin-bottom: 16px;\n}\n\n@media (min-width: 768px) {\n  .price-slider {\n    display: none;\n  }\n  .price-desktop-wrap {\n    display: block;\n  }\n  .price-desktop-wrap--mg {\n    margin-bottom: 24px;\n  }\n  .price-desktop-title {\n    display: grid;\n    grid-template-columns: 372px 96px 101px;\n    padding: 0 16px;\n  }\n  .price-desktop-title__text {\n    font-size: 14px;\n    line-height: 16px;\n    opacity: 72.18%;\n    user-select: none;\n  }\n  .price-desktop-title--mg {\n    margin-bottom: 16px;\n  }\n  .price-desktop-list {\n    display: grid;\n    grid-template-columns: 372px 96px 101px 119px;\n    grid-template-rows: 64px 64px 64px 64px 64px;\n    background-color: #ffffff;\n    border-radius: 6px;\n    padding: 0 16px;\n    box-shadow: 0px 0px 15px 7px rgba(34, 60, 80, 0.2);\n  }\n  .price-desktop-list__wrap {\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #eaeaea;\n  }\n  .price-desktop-list__wrap--no-border {\n    border: none;\n  }\n  .price-desktop-list__item-text {\n    font-size: 14px;\n    line-height: 18px;\n    letter-spacing: 0.2px;\n    user-select: none;\n  }\n  .subtitle-price--mg {\n    margin-bottom: 31px;\n  }\n}\n@media (min-width: 1440px) {\n  .price-desktop-title {\n    grid-template-columns: 470px 227px 192px;\n  }\n  .price-desktop-list {\n    grid-template-columns: 470px 227px 192px 119px;\n    padding: 0 24px;\n  }\n}\n.conditions {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 40px;\n}\n.conditions__text {\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  user-select: none;\n}\n.conditions__text--mg {\n  margin-bottom: 16px;\n}\n\n@media (min-width: 768px) {\n  .conditions {\n    padding-bottom: 47px;\n  }\n  .conditions__text {\n    max-width: 421px;\n  }\n}\n@media (min-width: 1440px) {\n  .conditions {\n    padding-bottom: 50px;\n  }\n}",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"@charset \"UTF-8\";\n@font-face {\n  font-family: TTLakes;\n  font-display: swap;\n  src: url(\"./fonts/TTLakes/TTLakes-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton {\n  background-color: transparent;\n  outline: none;\n}\n\nul,\nol,\nli {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\n\nhtml {\n  scrollbar-gutter: stable;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  font-size: 16px;\n  font-family: \"TTLakes\";\n  background-color: #f8f8f8;\n  color: #1b1c21;\n}\n\n.page-container {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: 1440px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n.page-container__veil {\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #ffffff;\n  z-index: 10;\n  opacity: 0.7;\n  display: none;\n}\n.page-container__veil--active {\n  display: block;\n}\n\n.visually-hidden {\n  display: none;\n}\n\n.container {\n  padding: 0 16px;\n}\n.header {\n  height: 88px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-bottom: 1px solid #b8ffec;\n}\n\n.header--mg {\n  margin-bottom: 24px;\n}\n.aside {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 360px;\n  min-height: 676px;\n  background-color: #ffffff;\n  visibility: hidden;\n  transition: all 1s;\n  transform: translate(-500px);\n  padding: 16px 24px 32px 24px;\n  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2);\n}\n\n.aside--active {\n  visibility: visible;\n  transform: translate(0);\n}\n.footer {\n  padding-top: 16px;\n}\n.footer__privacy-policy {\n  display: flex;\n  transition: all 0.4s;\n}\n.footer__privacy-policy:hover {\n  color: #000000;\n}\n.footer__privacy-policy-text {\n  padding-bottom: 19px;\n  text-align: center;\n  user-select: none;\n}\n.footer__privacy-policy, .footer__privacy-policy-text {\n  font-size: 14px;\n  line-height: 16px;\n  color: #7e7e82;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.footer__company-text--mg, .footer__privacy-policy--mg {\n  margin-bottom: 16px;\n}\n\n.footer-company-info {\n  display: flex;\n  flex-direction: column;\n  user-select: none;\n}\n.footer-company-info__year, .footer-company-info__text {\n  font-size: 14px;\n  line-height: 16px;\n  color: #7e7e82;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.nav-menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n}\n.nav-menu__wrap {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.header-logo-wrap {\n  position: relative;\n}\n\n.line-decor {\n  border: 2px solid #eaeaea;\n  height: 32px;\n  border-radius: 5px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.line-decor--mg {\n  position: absolute;\n  left: 0;\n}\n\n.nav-menu-logo {\n  display: flex;\n  align-items: center;\n}\n.nav-menu-logo__img {\n  width: 96.55px;\n  height: 50.81px;\n  padding-left: 20px;\n  padding-right: 20px;\n  transition: all 0.4s;\n}\n.nav-menu-logo__img:hover {\n  transform: scale(1.04);\n}\n\n.nav-menu-list {\n  display: flex;\n}\n.nav-menu-list__icon {\n  width: 40px;\n  height: 40px;\n  transition: all 0.4s;\n}\n.nav-menu-list__icon:hover {\n  transform: scale(1.04);\n}\n.nav-menu-list__icon--mg {\n  margin-right: 20px;\n}\n\n.nav-menu-list--hidden {\n  display: none;\n}\n\n.btn-modal-profile,\n.btn-modal-repair,\n.btn-modal-search {\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-burger-menu {\n  width: 40px;\n  height: 40px;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-burger-menu:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-burger-menu--mg {\n  margin-right: 20px;\n}\n.btn-close {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-close:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-call {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-call:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-go-to-product {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-image: url(\"./icons/pages/home-page/services/go.svg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  filter: drop-shadow(1px 1px 3px #7e7e82);\n  transition: all 0.4s;\n}\n.btn-go-to-product:hover {\n  transform: scale(1.04);\n}\n\n.btn-message {\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-message:hover {\n  cursor: pointer;\n  transform: scale(1.04);\n}\n\n.btn-submit-form-wrap {\n  background: transparent;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-submit-form-wrap:hover {\n  cursor: pointer;\n}\n\n.btn-submit-form {\n  width: 119px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #ffffff;\n  background-color: #ff3e79;\n  letter-spacing: -0.15px;\n  border-radius: 16px;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-submit-form:hover {\n  transform: scale(0.98);\n}\n\n.btn-order {\n  width: 119px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #ffffff;\n  background-color: #ff3e79;\n  letter-spacing: -0.15px;\n  border-radius: 16px;\n  transition: all 0.4s;\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.btn-order:hover {\n  transform: scale(0.98);\n}\n\n.btn-order--position {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.btn-control-visible-wrap {\n  width: 100%;\n}\n\n.btn-control-visible {\n  display: flex;\n  height: 24px;\n  padding-left: 24px;\n  filter: drop-shadow(1px 1px 3px #eaeaea);\n}\n\n.btn-control-visible-icon-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.btn-control-visible-icon {\n  width: 7.41px;\n  height: 10.29px;\n  background-image: url(\"./icons/buttons/btn-control-visible/arrow.svg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.btn-control-visible-icon--mg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.btn-control-visible-name {\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  letter-spacing: -0.2px;\n  font-weight: 800;\n  transition: all 0.4s;\n}\n.btn-control-visible-name:hover {\n  cursor: pointer;\n  color: #7e7e82;\n}\n.btn-conditions {\n  display: block;\n  position: relative;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  transition: all 0.4s;\n  max-width: 192px;\n  filter: drop-shadow(1px 1px 3px #b5b6bc);\n}\n.btn-conditions:hover {\n  color: #7e7e82;\n}\n.btn-conditions__arrow-image {\n  display: block;\n  width: 24px;\n  height: 27.49px;\n  background-image: url(\"./icons/buttons/btn-conditions/line-arrow.svg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: absolute;\n  left: 100px;\n  bottom: -3px;\n}\n.title {\n  display: flex;\n  justify-content: flex-start;\n  user-select: none;\n}\n.title__text {\n  font-size: 24px;\n  line-height: 40px;\n  letter-spacing: -0.6px;\n  font-weight: 800;\n}\n\n.title--mg {\n  margin-bottom: 24px;\n}\n\n.line {\n  border-radius: 0 13px 13px 0;\n  width: 4px;\n  height: 40px;\n  background-color: #41f6d7;\n}\n\n.line--mg {\n  margin-right: 12px;\n}\n\n.title-link-wrap {\n  display: none;\n}\n.subtitle {\n  width: 100%;\n  text-transform: uppercase;\n  padding: 16px;\n  letter-spacing: -0.2px;\n  background-color: #ffffff;\n  color: #7e7e82;\n  font-size: 18px;\n  line-height: 24px;\n  user-select: none;\n  background: linear-gradient(90deg, #f8f8f8 1.39%, #ffffff 100%);\n}\n.side-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.side-bar__link {\n  transition: all 0.4s;\n}\n.side-bar__link:hover {\n  transform: scale(1.04);\n}\n.side-bar__btn-close {\n  margin-right: 7.22px;\n}\n.side-bar__link-image {\n  width: 40px;\n  height: 40px;\n}\n.side-bar__btn-search, .side-bar__btn-profile {\n  filter: drop-shadow(1px 1px 3px #000000);\n}\n.side-bar__link-image-logo {\n  transition: all 0.4s;\n  width: 103.44px;\n  height: 54.44px;\n}\n.side-bar__link-image-logo:hover {\n  transform: scale(0.98);\n}\n\n.side-bar--mg {\n  margin-bottom: 20.78px;\n}\n\n.side-bar-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.side-bar-link {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n}\n.side-bar-link__item {\n  position: relative;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  user-select: none;\n  transition: all 0.4s;\n}\n.side-bar-link__item:hover {\n  transform: translateY(2px);\n}\n.side-bar-link__item--active {\n  color: #7e7e82;\n}\n.side-bar-link__item--active::before {\n  content: url(\"./icons/side-bar/highlight.svg\");\n  position: absolute;\n  left: -22px;\n  top: -5px;\n}\n\n.side-bar-link--mg {\n  margin-bottom: 32px;\n}\n\n.side-bar--mg-icon-block {\n  margin-bottom: 16px;\n  justify-content: inherit;\n}\n\n.side-bar-btn--mg {\n  margin-right: 16px;\n}\n\n.side-bar-email {\n  transition: all 0.4s;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n}\n.side-bar-email:hover {\n  color: #7e7e82;\n}\n\n.side-bar-email--mg {\n  margin-bottom: 16px;\n}\n\n.side-bar-tel {\n  transition: all 0.4s;\n}\n\n.side-bar-tel {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 32px;\n  letter-spacing: -0.6px;\n  text-align: left;\n}\n.side-bar-tel:hover {\n  color: #7e7e82;\n}\n\n.side-bar-tel--mg {\n  margin-bottom: 8px;\n}\n\n.side-bar-lang__link {\n  color: #1b1c21;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n}\n.side-bar-lang__link--active {\n  font-weight: 600;\n  color: #7e7e82;\n}\n.side-bar-lang__link {\n  user-select: none;\n}\n.modal-call {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 360px;\n  min-height: 676px;\n  background-color: #ffffff;\n  visibility: hidden;\n  transition: all 1s;\n  border-left: 1px solid #d9fff5;\n  box-shadow: -8px 7px 8px 0px rgba(14, 24, 80, 0.2);\n  right: 0;\n  transform: translate(500px);\n  padding: 24px 16px 75px 16px;\n}\n.modal-call__btn-close--mg {\n  margin-bottom: 40px;\n}\n\n.modal-call--active {\n  visibility: visible;\n  transform: translate(0);\n}\n\n.modal-title--mg {\n  margin-left: -17px;\n  margin-bottom: 24px;\n}\n\n.input-form {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #eaeaea;\n  border-radius: 8px;\n  outline: none;\n}\n.input-form::placeholder {\n  font-family: TT Lakes;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  margin-bottom: 16px;\n}\n.input-form:focus {\n  border: 2px solid #41f6d7;\n}\n\n.input-form--mg {\n  margin-bottom: 16px;\n}\n.modal-message {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 360px;\n  min-height: 676px;\n  background-color: #ffffff;\n  visibility: hidden;\n  transition: all 1s;\n  border-left: 1px solid #d9fff5;\n  box-shadow: -8px 7px 8px 0px rgba(14, 24, 80, 0.2);\n  right: 0;\n  transform: translate(500px);\n  padding: 24px 16px 75px 16px;\n}\n.modal-message__btn-close--mg {\n  margin-bottom: 40px;\n}\n\n.modal-message--active {\n  visibility: visible;\n  transform: translate(0);\n}\n\n.modal-title--mg {\n  margin-left: -17px;\n  margin-bottom: 24px;\n}\n\n.input-form {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #eaeaea;\n  border-radius: 8px;\n  outline: none;\n}\n.input-form::placeholder {\n  font-family: TT Lakes;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  margin-bottom: 16px;\n}\n.input-form:focus {\n  border: 2px solid #41f6d7;\n}\n\n.input-form--mg {\n  margin-bottom: 16px;\n}\n\n.textarea-form {\n  width: 100%;\n  resize: none;\n  outline: none;\n  border: 2px solid #eaeaea;\n  border-radius: 8px;\n  height: 118px;\n  padding: 12px 16px;\n}\n.textarea-form::placeholder {\n  font-family: TT Lakes;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.2px;\n  text-align: left;\n  margin-bottom: 16px;\n}\n.textarea-form:focus {\n  border: 2px solid #41f6d7;\n}\n\n.textarea-form--mg {\n  margin-bottom: 16px;\n}\n.privacy-policy {\n  font-size: 14px;\n}\n\n.privacy-policy--mg {\n  margin-bottom: 19px;\n}\n\n.privacy-policy-link {\n  transition: all 0.4s;\n  color: #ff3e79;\n  font-size: 14px;\n  line-height: 16px;\n}\n.privacy-policy-link:hover {\n  color: #000000;\n}\n\n.slide-list-wrap {\n  position: relative;\n}\n\n.slide-list {\n  -ms-overflow-style: none; /* IE и Edge */\n  scrollbar-width: none; /* Firefox */\n  display: flex;\n  overflow-y: hidden;\n}\n.slide-list::-webkit-scrollbar {\n  display: none; /* Chrome, Safari, Opera */\n}\n.slide-list__link {\n  display: block;\n  color: #7e7e82;\n  letter-spacing: -0.2px;\n  white-space: nowrap;\n  padding: 8px 16.54px;\n  border: 2px solid transparent;\n  transition: all 0.4s;\n}\n.slide-list__link:hover {\n  color: #000000;\n}\n\n.slide-list-link--active {\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 2px solid #b8ffec;\n}\n\n.slide-list--mg {\n  margin-bottom: 24px;\n}\n.veil-gradient {\n  position: absolute;\n  z-index: 10;\n  right: 0;\n  width: 24px;\n  background: linear-gradient(270deg, #f8f8f8 16.84%, rgba(248, 248, 248, 0.0001) 100%);\n}\n.veil-gradient__slide-list--height {\n  top: 0;\n  right: 0;\n  height: 36px;\n}\n.veil-gradient__services--height {\n  top: 96px;\n  height: 71px;\n}\n.veil-gradient__repair--height {\n  top: 96px;\n  height: 159px;\n}\n.veil-gradient__price--height {\n  top: 72px;\n  height: 200px;\n}\n.about {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 24px;\n}\n.about__btn-control-visible {\n  padding-left: 0px !important;\n}\n\n.about-text-wrap {\n  padding: 0 16px;\n}\n.about-text-wrap__visible {\n  font-size: 14px;\n  user-select: none;\n}\n.about-text-wrap__visible--mg {\n  margin-bottom: 16px;\n}\n.about-text-wrap__hidden {\n  font-size: 14px;\n  display: none;\n}\n.about-text-wrap__hidden--mg {\n  margin-bottom: 16px;\n}\n.about-text-wrap__hidden--active {\n  display: block;\n}\n\n.about-text-wrap--mg {\n  margin-bottom: 32px;\n}\n\n.about-image-wrap {\n  max-width: 526px;\n  margin: 0 auto;\n  display: block;\n  height: 100%;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.6s;\n}\n.about-image-wrap::after {\n  content: \"\";\n  background-color: #000000;\n  opacity: 0.3;\n  position: absolute;\n  border-radius: 10px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.about-image-wrap__picture {\n  width: 100%;\n  height: 176px;\n}\n.services {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 16px;\n  position: relative;\n}\n\n.subtitle-services--mg {\n  margin-bottom: 16px;\n}\n\n.brand-slider {\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n  padding-left: 16px;\n}\n\n.brand-slider--mg {\n  margin-bottom: 16px;\n}\n\n.brand-slider .swiper-pagination {\n  bottom: 0 !important;\n}\n\n.brand-slider .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background-color: #b5b6bc;\n}\n\n.brand-slider__slide {\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n  height: 72px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.brand-slider__slide--mg {\n  margin-right: 16px;\n}\n\n.brand-card-desktop-container {\n  display: none;\n}\n.repair {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 16px;\n  position: relative;\n}\n\n.repair-slider .swiper-pagination {\n  bottom: 0 !important;\n}\n\n.repair-slider .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background-color: #b5b6bc;\n}\n\n.repair-slider {\n  height: 188px;\n  position: relative;\n  overflow: hidden;\n  padding-left: 16px;\n}\n.repair-slider__slide {\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n  height: 160px;\n  margin-right: 16px;\n}\n\n.repair-card-desktop-container {\n  display: none;\n}\n\n.repair-card {\n  position: relative;\n  height: 100%;\n}\n.repair-card__title {\n  font-weight: 600;\n  user-select: none;\n}\n\n.repair-card-btn--position {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.subtitle-repair--mg {\n  margin-bottom: 16px;\n}\n\n.repair-card-desktop-container {\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.repair-card-desktop-wrap {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: 160px;\n  overflow: hidden;\n  transition: all 0.1s;\n}\n\n.repair-card-desktop-wrap--mg {\n  margin: 0 -6px 12px -6px;\n}\n\n.repairCardWrap--active {\n  height: 100%;\n  overflow: visible;\n}\n\n.repair-card-desktop {\n  height: 160px;\n}\n\n.repair-card-desktop--mg {\n  margin: 0 12px 12px 12px;\n}\n\n.repair-card-hidden768,\n.repair-card-hidden1440 {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.repair-card-hidden1440 {\n  display: none;\n}\n.price {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.price--mg {\n  margin-bottom: 6px;\n}\n\n.price-slider .swiper-pagination {\n  bottom: 0 !important;\n}\n\n.price-slider .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background-color: #b5b6bc;\n}\n\n.price-slider {\n  position: relative;\n  overflow: hidden;\n  padding-left: 16px;\n  height: 229px;\n}\n.price-slider__slide {\n  height: 200px;\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n}\n.price-slider__slide--mg {\n  margin-right: 16px;\n}\n.price-slider__wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n}\n.price-slider__title {\n  font-weight: 600;\n  line-height: 16px;\n}\n.price-slider__title--mg {\n  margin-bottom: 4px;\n}\n.price-slider__text {\n  font-size: 14px;\n  line-height: 18px;\n  color: #1b1c21;\n}\n.price-slider__text--mg {\n  margin-bottom: 16px;\n}\n\n.price-desktop-wrap {\n  display: none;\n}\n\n.subtitle-price--mg {\n  margin-bottom: 16px;\n}\n.conditions {\n  border-bottom: 1px solid #d9fff5;\n  padding-bottom: 40px;\n}\n.conditions__text {\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  user-select: none;\n}\n.conditions__text--mg {\n  margin-bottom: 16px;\n}\n@media (min-width: 768px){\n  .content-container {\n    display: flex;\n    justify-content: center;\n  }\n  .container {\n    padding: 0 24px;\n  }\n  .aside {\n    min-width: 320px;\n  }\n  main {\n    width: 768px;\n  }\n  .footer {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 32px;\n    padding-bottom: 25px;\n  }\n  .footer__privacy-policy {\n    width: 214px;\n  }\n  .footer__privacy-policy-text {\n    width: 213px;\n    padding-bottom: 0;\n    text-align: end;\n  }\n  .footer__company-text--mg, .footer__privacy-policy--mg {\n    margin-bottom: 0;\n  }\n  .footer-company-info {\n    width: 218px;\n  }\n  .footer-company-info__year {\n    align-items: flex-start;\n  }\n  .nav-menu {\n    justify-content: space-between;\n  }\n  .line-decor--mg {\n    left: auto;\n    right: 0;\n  }\n  .nav-menu-list--hidden {\n    display: flex;\n    margin-right: 20px;\n  }\n  .btn-burger-menu--mg {\n    margin-right: 0px;\n  }\n  .btn-conditions {\n    font-size: 16px;\n    max-width: 316px;\n  }\n  .btn-conditions__arrow-image {\n    left: 289px;\n    bottom: -2px;\n  }\n  .title__text {\n    font-size: 28px;\n  }\n  .line--mg {\n    margin-right: 20px;\n  }\n  .subtitle {\n    max-width: 100%;\n    padding-left: 24px;\n  }\n  .modal-call {\n    min-width: 320px;\n    max-width: 420px;\n  }\n  .modal-call__btn-close--mg {\n    margin-top: 16px;\n    margin-bottom: 0px;\n    margin-left: -90px;\n  }\n  .modal-title--mg {\n    margin-top: -38px;\n  }\n  .modal-message {\n    min-width: 320px;\n    max-width: 420px;\n  }\n  .modal-message__btn-close--mg {\n    margin-top: 16px;\n    margin-bottom: 0px;\n    margin-left: -90px;\n  }\n  .modal-title--mg {\n    margin-top: -38px;\n  }\n  .slide-list--mg {\n    margin-bottom: 32px;\n  }\n  .veil-gradient {\n    display: none;\n  }\n  .about {\n    display: flex;\n    padding-bottom: 35px;\n  }\n  .about-text-wrap {\n    padding: 0;\n    width: 50%;\n  }\n  .about-text-wrap__visible--mg {\n    margin-bottom: 25px;\n  }\n  .about-text-wrap--mg {\n    margin-right: 48px;\n    margin-bottom: 0;\n  }\n  .about-image-wrap__picture {\n    height: 208px;\n  }\n  .about-image-wrap:hover {\n    transform: scale(1.03);\n  }\n  .services {\n    padding-bottom: 31px;\n  }\n  .subtitle-services--mg {\n    margin-bottom: 24px;\n  }\n  .brand-slider {\n    display: none;\n  }\n  .brand-card-desktop-container {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .brand-card-desktop {\n    width: calc(33.074% - 30px);\n  }\n  .brand-card-desktop-wrap {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    height: 160px;\n    overflow: hidden;\n  }\n  .brand-card-desktop-wrap--mg {\n    margin: 0 -6px 12px -6px;\n  }\n  .brandCardWrap--active {\n    height: 100%;\n    overflow: visible;\n  }\n  .brand-card-desktop {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    border-radius: 6px;\n    padding: 20px 16px;\n    width: 224px;\n    height: 72px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .brand-card-desktop--mg {\n    margin: 0 12px 16px 12px;\n  }\n  .brand-card-hidden768,\n  .brand-card-hidden1440 {\n    opacity: 0;\n    visibility: hidden;\n  }\n  .brand-card-hidden1440 {\n    display: none;\n  }\n  .brand-card-hidden1440 {\n    opacity: 0;\n    visibility: hidden;\n  }\n  .repair-slider {\n    display: none;\n  }\n  .repair-slider__slide {\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    border-radius: 6px;\n    padding: 16px;\n    width: 240px;\n    height: 160px;\n  }\n  .repair-card {\n    width: 224px;\n    height: 160px;\n    background-color: #ffffff;\n    border: 1px solid #eaeaea;\n    border-radius: 6px;\n    padding: 16px;\n  }\n  .repair-card-btn--position {\n    bottom: 16px;\n    right: 16px;\n  }\n  .repair {\n    padding-bottom: 31px;\n  }\n  .subtitle-repair--mg {\n    margin-bottom: 24px;\n  }\n  .repair-card-desktop-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n  .repair-card-desktop {\n    width: calc(33.074% - 30px);\n  }\n  .price-slider {\n    display: none;\n  }\n  .price-desktop-wrap {\n    display: block;\n  }\n  .price-desktop-wrap--mg {\n    margin-bottom: 24px;\n  }\n  .price-desktop-title {\n    display: grid;\n    grid-template-columns: 372px 96px 101px;\n    padding: 0 16px;\n  }\n  .price-desktop-title__text {\n    font-size: 14px;\n    line-height: 16px;\n    opacity: 72.18%;\n    user-select: none;\n  }\n  .price-desktop-title--mg {\n    margin-bottom: 16px;\n  }\n  .price-desktop-list {\n    display: grid;\n    grid-template-columns: 372px 96px 101px 119px;\n    grid-template-rows: 64px 64px 64px 64px 64px;\n    background-color: #ffffff;\n    border-radius: 6px;\n    padding: 0 16px;\n    box-shadow: 0px 0px 15px 7px rgba(34, 60, 80, 0.2);\n  }\n  .price-desktop-list__wrap {\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #eaeaea;\n  }\n  .price-desktop-list__wrap--no-border {\n    border: none;\n  }\n  .price-desktop-list__item-text {\n    font-size: 14px;\n    line-height: 18px;\n    letter-spacing: 0.2px;\n    user-select: none;\n  }\n  .subtitle-price--mg {\n    margin-bottom: 31px;\n  }\n  .conditions {\n    padding-bottom: 47px;\n  }\n  .conditions__text {\n    max-width: 421px;\n  }\n}\n@media (min-width: 1440px){\n  .page-container {\n    max-width: 1440px;\n  }\n  .container {\n    padding: 33.08px 34px 0 34px;\n  }\n  .header {\n    display: none;\n  }\n  .aside {\n    height: inherit;\n    width: 306px;\n    padding: 33.08px 29px 0 22px;\n    position: static;\n    visibility: visible;\n    box-shadow: none;\n    transform: inherit;\n  }\n  main {\n    width: 1120px;\n  }\n  .footer .footer {\n    padding-bottom: 21px;\n  }\n  .footer .footer__privacy-policy-text {\n    width: 330px;\n    padding-bottom: 21px;\n  }\n  .btn-control-visible {\n    padding-left: 32px;\n  }\n  .line--mg {\n    margin-right: 30px;\n  }\n  .title--mg {\n    padding-top: 42px;\n  }\n  .title__text--mg {\n    margin-right: 449px;\n  }\n  .title-link-wrap {\n    display: flex;\n  }\n  .title-link__icons {\n    display: flex;\n    align-items: center;\n  }\n  .title-link__icons--mg {\n    margin-right: 32px;\n  }\n  .title-link__icons-link {\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: -0.2px;\n    transition: all 0.4s;\n    color: #1b1c21;\n  }\n  .title-link__icons-link:hover {\n    color: #7e7e82;\n  }\n  .title-link__icons-icon {\n    width: 40px;\n    height: 40px;\n    padding-left: 8px;\n    transition: all 0.4s;\n    filter: drop-shadow(1px 1px 3px #000000);\n  }\n  .title-link__icons-icon:hover {\n    transform: scale(1.04);\n  }\n  .subtitle {\n    padding-left: 32px;\n  }\n  .side-bar {\n    margin-bottom: 37px;\n  }\n  .side-bar__btn-close {\n    display: none;\n  }\n  .side-bar-link {\n    row-gap: 28px;\n  }\n  .side-bar-link--mg {\n    margin-bottom: 241px;\n  }\n  .side-bar--mg-icon-block {\n    margin-bottom: 16.5px;\n  }\n  .side-bar-tel--mg {\n    margin-bottom: 40.8px;\n  }\n  .side-bar-email--mg {\n    margin-bottom: 12.5px;\n  }\n  .slide-list {\n    flex-wrap: wrap;\n  }\n  .slide-list--mg {\n    margin-bottom: 16.22px;\n  }\n  .about {\n    padding-bottom: 51px;\n  }\n  .about-image-wrap__picture {\n    max-width: 531px;\n    height: 307px;\n  }\n  .about-text-wrap {\n    max-width: 490px;\n  }\n  .about-text-wrap__hidden--mg {\n    margin-bottom: 13.78px;\n  }\n  .about-text-wrap__hidden--mg {\n    margin-bottom: 13.78px;\n  }\n  .about-text-wrap--mg {\n    margin-right: 36px;\n  }\n  .about-image-wrap:hover {\n    transform: scale(1.04);\n  }\n  .services {\n    padding-bottom: 49px;\n  }\n  .brand-card-desktop-container {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .brand-card-desktop {\n    width: calc((86.79% - 12px) / 4);\n  }\n  .brand-card-hidden1440 {\n    display: block;\n  }\n  .repair {\n    padding-bottom: 49px;\n  }\n  .repair-card {\n    width: 240px;\n  }\n  .repair-card--mg {\n    margin-right: 32px;\n  }\n  .repair-card-desktop {\n    width: calc((86.79% - 12px) / 4);\n  }\n  .repair-card-hidden1440 {\n    display: block;\n  }\n  .price-desktop-title {\n    grid-template-columns: 470px 227px 192px;\n  }\n  .price-desktop-list {\n    grid-template-columns: 470px 227px 192px 119px;\n    padding: 0 24px;\n  }\n  .conditions {\n    padding-bottom: 50px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js ***!
  \****************************************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/getUrl.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/html-loader@4.2.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/favicon/favicon.ico */ "./static/favicon/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/buttons/btn-burger-menu/burger.svg */ "./src/icons/buttons/btn-burger-menu/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/nav-menu/logo.svg */ "./src/icons/nav-menu/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/buttons/btn-call/call.svg */ "./src/icons/buttons/btn-call/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/buttons/btn-message/chat.svg */ "./src/icons/buttons/btn-message/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/nav-menu/profile.svg */ "./src/icons/nav-menu/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/nav-menu/repair.svg */ "./src/icons/nav-menu/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/nav-menu/checkstatus.svg */ "./src/icons/nav-menu/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/buttons/btn-close/close.svg */ "./src/icons/buttons/btn-close/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about/MG_320.png */ "./src/img/about/MG_320.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about/MG_768.png */ "./src/img/about/MG_768.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about/MG_1120.png */ "./src/img/about/MG_1120.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/lenovo.png */ "./src/img/services/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/samsung.png */ "./src/img/services/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/apple.png */ "./src/img/services/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/viewsonic.png */ "./src/img/services/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/bosch.png */ "./src/img/services/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/hp.png */ "./src/img/services/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/acer.png */ "./src/img/services/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services/sony.png */ "./src/img/services/sony.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/services//bosch.png */ "./src/img/services/bosch.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<meta name=\"description\" content=\"Услуги и сервисы\">\r\n\t<link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n\t<title>CPS Service</title>\r\n</head>\r\n\r\n<body>\r\n\t<div class='page-container'>\r\n\t\t<div class=\"page-container__veil\"></div>\r\n\t\t<header class='header header--mg'>\r\n\t\t\t<nav class='nav-menu'>\r\n\t\t\t\t<div class='nav-menu__wrap'>\r\n\t\t\t\t\t<button type='button' class='btn-burger-menu btn-burger-menu--mg'>\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Бургер меню\">\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div class=\"header-logo-wrap\">\r\n\t\t\t\t\t\t<span class='line-decor line-decor--mg'></span>\r\n\t\t\t\t\t\t<a href='#home' class='nav-menu-logo'>\r\n\t\t\t\t\t\t\t<img class=\"nav-menu-logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='nav-menu__wrap'>\r\n\t\t\t\t\t<ul class='nav-menu-list nav-menu-list--hidden'>\r\n\t\t\t\t\t\t<li class='nav-menu-list__icon nav-menu-list__icon--mg'>\r\n\t\t\t\t\t\t\t<button type='button' class='btn-call btn-modal-call'>\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Позвонить\" class='side-bar__link-image'>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class='nav-menu-list__icon nav-menu-list__icon--mg'>\r\n\t\t\t\t\t\t\t<button type='button' class='btn-message btn-modal-message'>\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Написать\" class='side-bar__link-image'>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class='nav-menu-list__icon nav-menu-list__icon--mg'>\r\n\t\t\t\t\t\t\t<a href='#profile' class='btn-modal-profile'>\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Профиль\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class='line-decor'></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<ul class='nav-menu-list'>\r\n\t\t\t\t\t\t<li class='nav-menu-list__icon nav-menu-list__icon--mg'>\r\n\t\t\t\t\t\t\t<a href='#repair' class='btn-modal-repair'>\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Ремонт\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class='nav-menu-list__icon'>\r\n\t\t\t\t\t\t\t<a href='#search' class='btn-modal-search'>\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Найти\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\t\t</header>\r\n\t\t<div class='content-container'>\r\n\t\t\t<aside class='aside'>\r\n\t\t\t\t<div class='side-bar side-bar--mg'>\r\n\t\t\t\t\t<div class='side-bar-wrap'>\r\n\t\t\t\t\t\t<button type='button' class='btn-close side-bar__btn-close'>\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Закрыть\" class='side-bar__link-image'>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<a class='side-bar__logo' href=\"/\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип\" class='side-bar__link-image-logo'>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a class='side-bar__link' href=\"#search\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Найти\" class='side-bar__link-image side-bar__btn-search'>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<nav>\r\n\t\t\t\t\t<ul class='side-bar-link side-bar-link--mg'>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#repair\">Ремонт техники</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#services\">Услуги и сервисы</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#clients\">Корпоративным клиентам</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#sellers\">Продавцам техники</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#partners\">Партнерам</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#manufacturers\">Производителям</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#service-centers\">Наши сервисные центры</a></li>\r\n\t\t\t\t\t\t<li class='side-bar-link__item'><a href=\"#contacts\">Контакты</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t\t<div class='side-bar side-bar--mg-icon-block'>\r\n\t\t\t\t\t<button type='button' class='btn-call btn-modal-call side-bar-btn--mg'>\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Позвонить\" class='side-bar__link-image'>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button type='button' class='btn-message btn-modal-message side-bar-btn--mg'>\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Написать\" class='side-bar__link-image'>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<a class='side-bar__link' href=\"#profile\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Профиль\" class='side-bar__link-image side-bar__btn-profile'>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<a class='side-bar-email side-bar-email--mg' href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n\t\t\t\t<a class='side-bar-tel side-bar-tel--mg' href=\"tel:88008908900\">8 800 890 8900</a>\r\n\t\t\t\t<div class='side-bar-lang'>\r\n\t\t\t\t\t<a href=\"#0\" class='side-bar-lang__link'>RU</a>\r\n\t\t\t\t\t<a href=\"#0\" class='side-bar-lang__link'>EN</a>\r\n\t\t\t\t\t<a href=\"#0\" class='side-bar-lang__link'>CH</a>\r\n\t\t\t\t</div>\r\n\t\t\t</aside>\r\n\t\t\t<div class=\"modal-call\">\r\n\t\t\t\t<button type=\"button\" class='btn-close modal-call__btn-close--mg  modal-call__btn--close'>\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Закрыть\">\r\n\t\t\t\t</button>\r\n\t\t\t\t<div class='title modal-title--mg'>\r\n\t\t\t\t\t<span class='line line--mg'></span>\r\n\t\t\t\t\t<h2 class='title__text'>Заказать звонок</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<form action=\"/\">\r\n\t\t\t\t\t<label for=\"input-phone\">\r\n\t\t\t\t\t\t<span class=\"visually-hidden\">Поле ввода номера телефона</span>\r\n\t\t\t\t\t\t<input type=\"tel\" id='input-phone' placeholder='Телефон' autocomplete=\"on\" class='input-form input-form--mg'\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<p class=\"privacy-policy privacy-policy--mg\">\r\n\t\t\t\t\t\tНажимая “отправить”, вы даете согласие на <a class='privacy-policy-link' href='#privacy-policy-1'>обработку\r\n\t\t\t\t\t\t\tперсональных данных</a> и соглашаетесь с\r\n\t\t\t\t\t\tнашей <a class='privacy-policy-link' href='#privacy-policy-2'>политикой\r\n\t\t\t\t\t\t\tконфиденциальности</a>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<button class=\"btn-submit-form-wrap\">\r\n\t\t\t\t\t\t<span class='btn-submit-form'>Отправить ></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-message\">\r\n\t\t\t\t<button type=\"button\" class='btn-close modal-message__btn-close--mg modal-message__btn--close'>\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Закрыть\">\r\n\t\t\t\t</button>\r\n\t\t\t\t<div class='title modal-title--mg'>\r\n\t\t\t\t\t<span class='line line--mg'></span>\r\n\t\t\t\t\t<h2 class='title__text'>Обратная связь</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<form action=\"/\">\r\n\t\t\t\t\t<label for=\"field-name\">\r\n\t\t\t\t\t\t<span class=\"visually-hidden\">Поле имени</span>\r\n\t\t\t\t\t\t<input type='text' id='field-name' placeholder='Имя' autocomplete=\"on\" class='input-form input-form--mg'\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<label for=\"field-phone\">\r\n\t\t\t\t\t\t<span class=\"visually-hidden\">Поле ввода номера телефона</span>\r\n\t\t\t\t\t\t<input type='tel' id='field-phone' placeholder='Телефон' autocomplete=\"on\" class='input-form input-form--mg'\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<label for=\"field-email\">\r\n\t\t\t\t\t\t<span class=\"visually-hidden\">Поле ввода адреса электронной почты</span>\r\n\t\t\t\t\t\t<input type='email' id='field-email' placeholder='Электронная почта' autocomplete=\"on\"\r\n\t\t\t\t\t\t\tclass='input-form input-form--mg' required>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<textarea class='textarea-form textarea-form--mg' placeholder='Сообщение'></textarea>\r\n\t\t\t\t\t<p class=\"privacy-policy privacy-policy--mg\">\r\n\t\t\t\t\t\tНажимая “отправить”, вы даете согласие на <a class='privacy-policy-link' href='#privacy-policy-1'>обработку\r\n\t\t\t\t\t\t\tперсональных данных</a> и соглашаетесь с\r\n\t\t\t\t\t\tнашей <a class='privacy-policy-link' href='#privacy-policy-2'>политикой\r\n\t\t\t\t\t\t\tконфиденциальности</a>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<button class=\"btn-submit-form-wrap\">\r\n\t\t\t\t\t\t<span class='btn-submit-form'>Отправить ></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<main>\r\n\t\t\t\t<div class='title title--mg'>\r\n\t\t\t\t\t<span class='line line--mg'></span>\r\n\t\t\t\t\t<h1 class='title__text title__text--mg'>Услуги и сервисы</h1>\r\n\t\t\t\t\t<div class=\"title-link title-link-wrap\">\r\n\t\t\t\t\t\t<span class='title-link__icons title-link__icons--mg'>\r\n\t\t\t\t\t\t\t<a href=\"#leave-request\" class='title-link__icons-link'>\r\n\t\t\t\t\t\t\t\tОставить заявку\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Оставить заявку\" class='title-link__icons-icon'>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class='title-link__icons'>\r\n\t\t\t\t\t\t\t<a href=\"#status-repair\" class='title-link__icons-link'>\r\n\t\t\t\t\t\t\t\tСтатус ремонта\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Статус ремонта\" class='title-link__icons-icon'>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<nav class='slide-list-wrap'>\r\n\t\t\t\t\t<span class='veil-gradient veil-gradient__slide-list--height'></span>\r\n\t\t\t\t\t<ul class='slide-list slide-list--mg container'>\r\n\t\t\t\t\t\t<li><a class='slide-list__link' href='#repair-brands'>Ремонтируемые бренды</a></li>\r\n\t\t\t\t\t\t<li><a class='slide-list__link' href='#optional-services'>Дополнительные услуги</a></li>\r\n\t\t\t\t\t\t<li><a class='slide-list__link' href='#price-services'>Цены на услуги</a></li>\r\n\t\t\t\t\t\t<li><a class='slide-list__link' href='#adress-services'>Адреса сервисных центров</a></li>\r\n\t\t\t\t\t\t<li><a class='slide-list__link' href='#special-price'>Специальные цены</a></li>\r\n\t\t\t\t\t\t<li><a class='slide-list__link' href='#reviews-work'>Отзывы</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t\t<div class='about container'>\r\n\t\t\t\t\t<div class='about-text-wrap about-text-wrap--mg'>\r\n\t\t\t\t\t\t<p class='about-text-wrap__visible about-text-wrap__visible--mg'>\r\n\t\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете\r\n\t\t\t\t\t\t\tотремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class='about-text-wrap__hidden about-text-wrap__hidden--mg'>\r\n\t\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое\r\n\t\t\t\t\t\t\tколичество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь,\r\n\t\t\t\t\t\t\tсоветуют нас родным и близким.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button type=\"button\" class='btn-control-visible about__btn-control-visible'>\r\n\t\t\t\t\t\t\t<div class=\"btn-control-visible-icon-wrap\">\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass='btn-control-visible-icon btn-control-visible-icon--mg about__btn-control-visible-icon'></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class='btn-control-visible-name about__btn-control-visible-name'>Читать далее</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<picture class=\"about-image-wrap\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Фото офиса CPS-Service\" class='about-image-wrap__picture' />\r\n\t\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" media=\"(min-width: 768px)\" />\r\n\t\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" media=\"(min-width: 1440px)\" />\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='services'>\r\n\t\t\t\t\t<h2 class='subtitle subtitle-services--mg'>Ремонт техники различных брендов</h2>\r\n\t\t\t\t\t<span class='veil-gradient veil-gradient__services--height'></span>\r\n\t\t\t\t\t<div class=\"brand-slider brand-slider--mg swiper-container\">\r\n\t\t\t\t\t\t<div class=\" swiper-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Lenovo\">\r\n\t\t\t\t\t\t\t\t\t<a href='#lenovo' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Samsung\">\r\n\t\t\t\t\t\t\t\t\t<a href='#samsung' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Apple\">\r\n\t\t\t\t\t\t\t\t\t<a href='#apple' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"ViewSonic\">\r\n\t\t\t\t\t\t\t\t\t<a href='#viewsonic' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Bosch\">\r\n\t\t\t\t\t\t\t\t\t<a href='#bosch' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Hp\">\r\n\t\t\t\t\t\t\t\t\t<a href='#hp' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Acer\">\r\n\t\t\t\t\t\t\t\t\t<a href='#acer' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand-slider__slide brand-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Sony\">\r\n\t\t\t\t\t\t\t\t\t<a href='#sony' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"brand-card-desktop-container\">\r\n\t\t\t\t\t\t<div class=\"brand-card-desktop-wrap brand-card-desktop-wrap--mg\">\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Lenovo\">\r\n\t\t\t\t\t\t\t\t<a href='#lenovo' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Samsung\">\r\n\t\t\t\t\t\t\t\t<a href='#samsung' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Apple\">\r\n\t\t\t\t\t\t\t\t<a href='#apple' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"ViewSonic\">\r\n\t\t\t\t\t\t\t\t<a href='#viewsonic' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Bosch\">\r\n\t\t\t\t\t\t\t\t<a href='#bosch' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Hp\">\r\n\t\t\t\t\t\t\t\t<a href='#hp' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Acer\">\r\n\t\t\t\t\t\t\t\t<a href='#acer' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Sony\">\r\n\t\t\t\t\t\t\t\t<a href='#sony' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Acer\">\r\n\t\t\t\t\t\t\t\t<a href='#acer' class='btn-go-to-product'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card brand-card-hidden1440\"></div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card brand-card-hidden1440\"></div>\r\n\t\t\t\t\t\t\t<div class=\"brand-card-desktop brand-card-desktop--mg brand-card brand-card-hidden1440\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"btn-control-visible-wrap\">\r\n\t\t\t\t\t\t\t<div class='btn-control-visible brand__btn-control-visible'>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-control-visible-icon-wrap\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass='btn-control-visible-icon btn-control-visible-icon--mg brand__btn-control-visible-icon'></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class='btn-control-visible-name brand__btn-control-visible-name'>Показать все</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='repair repair--mg'>\r\n\t\t\t\t\t<h2 class='subtitle subtitle-repair--mg'>Ремонт различных видов техники</h2>\r\n\t\t\t\t\t<span class='veil-gradient veil-gradient__repair--height'></span>\r\n\t\t\t\t\t<div class=\"repair-slider swiper-container\">\r\n\t\t\t\t\t\t<div class=\" swiper-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"repair-slider__slide repair-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"repair-card\">\r\n\t\t\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт ноутбуков</h2>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#repair-notebooks' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"repair-slider__slide repair-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"repair-card\">\r\n\t\t\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт планшетов</h2>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#repair-tablets' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"repair-slider__slide repair-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"repair-card\">\r\n\t\t\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт ПК</h2>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#repair-pc' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"repair-slider__slide repair-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"repair-card\">\r\n\t\t\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт мониторов</h2>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#repair-monitors' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"repair-slider__slide repair-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"repair-card\">\r\n\t\t\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт принтеров</h2>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#repair-prints' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"repair-card-desktop-container\">\r\n\t\t\t\t\t\t<div class=\"repair-card-desktop-wrap repair-card-desktop-wrap--mg\">\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card\">\r\n\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт ноутбуков</h2>\r\n\t\t\t\t\t\t\t\t<a href='#repair-notebooks' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card\">\r\n\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт планшетов</h2>\r\n\t\t\t\t\t\t\t\t<a href='#repair-tablets' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card\">\r\n\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт ПК</h2>\r\n\t\t\t\t\t\t\t\t<a href='#repair-pc' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card\">\r\n\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт мониторов</h2>\r\n\t\t\t\t\t\t\t\t<a href='#repair-monitors' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card\">\r\n\t\t\t\t\t\t\t\t<h2 class='repair-card__title'>Ремонт принтеров</h2>\r\n\t\t\t\t\t\t\t\t<a href='#repair-prints' class='btn-go-to-product repair-card-btn--position'></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card repair-card-hidden768\"></div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card repair-card-hidden1440\"></div>\r\n\t\t\t\t\t\t\t<div class=\"repair-card-desktop repair-card-desktop--mg repair-card repair-card-hidden1440\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"btn-control-visible-wrap\">\r\n\t\t\t\t\t\t\t<div class='btn-control-visible repair__btn-control-visible'>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-control-visible-icon-wrap\">\r\n\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\tclass='btn-control-visible-icon btn-control-visible-icon--mg repair__btn-control-visible-icon'></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class='btn-control-visible-name repair__btn-control-visible-name'>Показать все</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='price price--mg'>\r\n\t\t\t\t\t<h2 class='subtitle subtitle-price--mg '>Цены на услуги</h2>\r\n\t\t\t\t\t<span class='veil-gradient veil-gradient__price--height'></span>\r\n\t\t\t\t\t<div class=\"price-slider swiper-container\">\r\n\t\t\t\t\t\t<div class=\" swiper-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-slider__slide price-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"price-slider__wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Тестирование с выдачей технического заключения\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#order' class='btn-order btn-order--position'>Заказать ></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-slider__slide price-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"price-slider__wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text\">30 мин</p>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#order' class='btn-order btn-order--position'>Заказать ></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-slider__slide price-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"price-slider__wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Замена дисплея</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">1000 ₽</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#order' class='btn-order btn-order--position'>Заказать ></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-slider__slide price-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"price-slider__wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Замена полифонического динамика</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">1000 ₽</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#order' class='btn-order btn-order--position'>Заказать ></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-slider__slide price-slider__slide--mg\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"price-slider__wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">Замена программного обеспечения</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text price-slider__text--mg\">1000 ₽</p>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"price-slider__title price-slider__title--mg\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"price-slider__text\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t\t\t<a href='#order' class='btn-order btn-order--position'>Заказать ></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"price-desktop-wrap price-desktop-wrap--mg container\">\r\n\t\t\t\t\t\t<ul class='price-desktop-title price-desktop-title--mg'>\r\n\t\t\t\t\t\t\t<li class='price-desktop-title__text'>Ремонтные услуги</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-title__text'>Цена</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-title__text'>Срок</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul class=\"price-desktop-list\">\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>Диагностика</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>Бесплатно</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>30 мин</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<a href='#order' class='btn-order'>Заказать ></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>Замена дисплея</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>1 000 ₽</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>30-120 мин</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<a href='#order' class='btn-order'>Заказать ></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>Замена полифонического динамика</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>1 000 ₽</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>30-120 мин</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<a href='#order' class='btn-order'>Заказать ></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>Тестирование с выдачей технического заключения</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>1 000 ₽</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>30-120 мин</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap'>\r\n\t\t\t\t\t\t\t\t<a href='#order' class='btn-order'>Заказать ></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap price-desktop-list__wrap--no-border'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>Замена программного обеспечения</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap price-desktop-list__wrap--no-border'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>1 000 ₽</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap price-desktop-list__wrap--no-border'>\r\n\t\t\t\t\t\t\t\t<p class='price-desktop-list__item-text'>30-120 мин</p>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class='price-desktop-list__wrap price-desktop-list__wrap--no-border'>\r\n\t\t\t\t\t\t\t\t<a href='#order' class='btn-order'>Заказать ></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='conditions container'>\r\n\t\t\t\t\t<p class='conditions__text conditions__text--mg'>\r\n\t\t\t\t\t\tВсе цены указаны с учетом НДС. Стоимость ремонта указана на\r\n\t\t\t\t\t\tединичную услугу. Для\r\n\t\t\t\t\t\tполучения коммерческого\r\n\t\t\t\t\t\tпредложения на постоянное обслуживание, оставьте заявку.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<a href='#conditions' class='btn-conditions'>\r\n\t\t\t\t\t\tПолучить коммерческое предложение\r\n\t\t\t\t\t\t<span class='btn-conditions__arrow-image'></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<footer class='footer container'>\r\n\t\t\t\t\t<div class='footer-company-info'>\r\n\t\t\t\t\t\t<p class='footer-company-info__year'>© 2019 CPS</p>\r\n\t\t\t\t\t\t<p class='footer-company-info__text footer-company-info__text--mg'>\r\n\t\t\t\t\t\t\tРазработано командой Apesong\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a href='#0' class='footer__privacy-policy footer__privacy-policy--mg'>Политика конфиденциальности</a>\r\n\t\t\t\t\t<p class='footer__privacy-policy-text footer__privacy-policy-text--mg'>\r\n\t\t\t\t\t\tИнформация, размещенная на данной странице, не является публичной офертой\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t</main>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/html-loader@4.2.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/html-loader/dist/runtime/getUrl.js ***!
  \********************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!../../../../postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!../../../../resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../../../sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./pagination.css */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!../../../postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!../../../resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../../sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./swiper.css */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_loader-utils@2.0.4_postcss@8.4.48_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@16.0.3_sass@1.80.6_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_96_1_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_loader_utils_2_0_4_postcss_8_4_48_webpack_5_96_1_webpack_cli_5_1_4_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_16_0_3_sass_1_80_6_webpack_5_96_1_webpack_cli_5_1_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/fonts/TTLakes/TTLakes-Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/TTLakes/TTLakes-Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.woff";

/***/ }),

/***/ "./src/icons/buttons/btn-burger-menu/burger.svg":
/*!******************************************************!*\
  !*** ./src/icons/buttons/btn-burger-menu/burger.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/burger.svg";

/***/ }),

/***/ "./src/icons/buttons/btn-call/call.svg":
/*!*********************************************!*\
  !*** ./src/icons/buttons/btn-call/call.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/call.svg";

/***/ }),

/***/ "./src/icons/buttons/btn-close/close.svg":
/*!***********************************************!*\
  !*** ./src/icons/buttons/btn-close/close.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/close.svg";

/***/ }),

/***/ "./src/icons/buttons/btn-conditions/line-arrow.svg":
/*!*********************************************************!*\
  !*** ./src/icons/buttons/btn-conditions/line-arrow.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/line-arrow.svg";

/***/ }),

/***/ "./src/icons/buttons/btn-control-visible/arrow.svg":
/*!*********************************************************!*\
  !*** ./src/icons/buttons/btn-control-visible/arrow.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow.svg";

/***/ }),

/***/ "./src/icons/buttons/btn-message/chat.svg":
/*!************************************************!*\
  !*** ./src/icons/buttons/btn-message/chat.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/chat.svg";

/***/ }),

/***/ "./src/icons/nav-menu/checkstatus.svg":
/*!********************************************!*\
  !*** ./src/icons/nav-menu/checkstatus.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/checkstatus.svg";

/***/ }),

/***/ "./src/icons/nav-menu/logo.svg":
/*!*************************************!*\
  !*** ./src/icons/nav-menu/logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ "./src/icons/nav-menu/profile.svg":
/*!****************************************!*\
  !*** ./src/icons/nav-menu/profile.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile.svg";

/***/ }),

/***/ "./src/icons/nav-menu/repair.svg":
/*!***************************************!*\
  !*** ./src/icons/nav-menu/repair.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/repair.svg";

/***/ }),

/***/ "./src/icons/pages/home-page/services/go.svg":
/*!***************************************************!*\
  !*** ./src/icons/pages/home-page/services/go.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/go.svg";

/***/ }),

/***/ "./src/icons/side-bar/highlight.svg":
/*!******************************************!*\
  !*** ./src/icons/side-bar/highlight.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/highlight.svg";

/***/ }),

/***/ "./src/img/about/MG_1120.png":
/*!***********************************!*\
  !*** ./src/img/about/MG_1120.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/MG_1120.png";

/***/ }),

/***/ "./src/img/about/MG_320.png":
/*!**********************************!*\
  !*** ./src/img/about/MG_320.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/MG_320.png";

/***/ }),

/***/ "./src/img/about/MG_768.png":
/*!**********************************!*\
  !*** ./src/img/about/MG_768.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/MG_768.png";

/***/ }),

/***/ "./src/img/services/acer.png":
/*!***********************************!*\
  !*** ./src/img/services/acer.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/acer.png";

/***/ }),

/***/ "./src/img/services/apple.png":
/*!************************************!*\
  !*** ./src/img/services/apple.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apple.png";

/***/ }),

/***/ "./src/img/services/bosch.png":
/*!************************************!*\
  !*** ./src/img/services/bosch.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bosch.png";

/***/ }),

/***/ "./src/img/services/hp.png":
/*!*********************************!*\
  !*** ./src/img/services/hp.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hp.png";

/***/ }),

/***/ "./src/img/services/lenovo.png":
/*!*************************************!*\
  !*** ./src/img/services/lenovo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/lenovo.png";

/***/ }),

/***/ "./src/img/services/samsung.png":
/*!**************************************!*\
  !*** ./src/img/services/samsung.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/samsung.png";

/***/ }),

/***/ "./src/img/services/sony.png":
/*!***********************************!*\
  !*** ./src/img/services/sony.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sony.png";

/***/ }),

/***/ "./src/img/services/viewsonic.png":
/*!****************************************!*\
  !*** ./src/img/services/viewsonic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/viewsonic.png";

/***/ }),

/***/ "./static/favicon/favicon.ico":
/*!************************************!*\
  !*** ./static/favicon/favicon.ico ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.ico";

/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/a11y.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/a11y.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");




function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.prevEl);
      const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(parseInt(slideEl.getAttribute('data-swiper-slide-index')), 0);
      } else {
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/autoplay.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/autoplay.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/controller.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/controller.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach(controlElement => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = e => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cards.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cards.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-coverflow.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-coverflow.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.o)(swiper);
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-creative.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-creative.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.o)(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cube.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cube.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-fade.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-fade.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-flip.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-flip.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.o)(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/free-mode.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/free-mode.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/grid.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/grid.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/hash-navigation.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/hash-navigation.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/history.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/history.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/index.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/index.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/keyboard.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/keyboard.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/manipulation.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/manipulation.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/mousewheel.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/mousewheel.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/navigation.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/navigation.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return 'next';
    } else if (nextIndex === prevIndex - 1) {
      return 'previous';
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === 'next') {
        swiper.slideNext();
      } else if (moveDirection === 'previous') {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/parallax.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/parallax.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/scrollbar.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/scrollbar.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/classes-to-selector.mjs");





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/thumbs.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/thumbs.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/virtual.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/virtual.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force, beforeInit) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update(false, true);
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/zoom.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/zoom.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
      image.touchesStart.x = undefined;
      image.touchesStart.y = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    image.touchesStart.x = undefined;
    image.touchesStart.y = undefined;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/classes-to-selector.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/classes-to-selector.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/swiper-core.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/swiper-core.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ getSlideTransformEl),
/* harmony export */   h: () => (/* binding */ elementIndex),
/* harmony export */   i: () => (/* binding */ classesToTokens),
/* harmony export */   j: () => (/* binding */ getTranslate),
/* harmony export */   k: () => (/* binding */ elementTransitionEnd),
/* harmony export */   l: () => (/* binding */ isObject),
/* harmony export */   m: () => (/* binding */ makeElementsArray),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ getRotateFix),
/* harmony export */   p: () => (/* binding */ elementStyle),
/* harmony export */   q: () => (/* binding */ elementNextAll),
/* harmony export */   r: () => (/* binding */ elementPrevAll),
/* harmony export */   s: () => (/* binding */ setCSSProperty),
/* harmony export */   t: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   u: () => (/* binding */ showWarning),
/* harmony export */   v: () => (/* binding */ elementIsChildOf),
/* harmony export */   w: () => (/* binding */ extend),
/* harmony export */   x: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  const children = [...element.children];
  if (element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOf(el, parent) {
  const isChild = parent.contains(el);
  if (!isChild && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    return children.includes(el);
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}




/***/ }),

/***/ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.1.14
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 12, 2024
 */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script */ "./src/js/script.js");



})();

/******/ })()
;
//# sourceMappingURL=main.c4c758501bd2e8e55ddd.js.map