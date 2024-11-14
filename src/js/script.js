import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
	const veil = document.querySelector('.page-container__veil');
	const sideBar = document.querySelector('.aside');
	const btnBurgerMenu = document.querySelector('.btn-burger-menu');
	const btnSideBarClose = document.querySelector('.side-bar__btn-close');
	const btnModalCallClose = document.querySelector(
		'.modal-call__btn--close'
	);
	const btnModalMessageClose = document.querySelector(
		'.modal-message__btn--close'
	);
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

	const btnMoreInfoAbout = document.querySelector(
		'.about__btn-control-visible'
	);
	const moreInfoTextAbout = document.querySelector(
		'.about__btn-control-visible-name'
	);
	const arrowAbout = document.querySelector(
		'.about__btn-control-visible-icon'
	);
	const hiddenTextAbout = document.querySelector(
		'.about-text-wrap__hidden'
	);
	const btnMoreInfoRepair = document.querySelector(
		'.repair__btn-control-visible'
	);
	const moreInfoTextRepair = document.querySelector(
		'.repair__btn-control-visible-name'
	);
	const arrowRepair = document.querySelector(
		'.repair__btn-control-visible-icon'
	);
	const repairCardWrap = document.querySelector(
		'.repair-card-desktop-wrap'
	);

	const btnMoreInfoBrand = document.querySelector(
		'.brand__btn-control-visible'
	);
	const moreInfoTextBrand = document.querySelector(
		'.brand__btn-control-visible-name'
	);
	const arrowBrand = document.querySelector(
		'.brand__btn-control-visible-icon'
	);
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
		const modalMessageActive = document.querySelector(
			'.modal-message--active'
		);

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

	const slideListLinkActive = (event) => {
		const active = document.querySelector('.slide-list-link--active');

		if (event.target.classList.contains('slide-list-link--active')) {
			return;
		} else {
			active.classList.remove('slide-list-link--active');
			event.target.classList.add('slide-list-link--active');
		}
	};

	const changeStateTextAbout = () => {
		if (
			!hiddenTextAbout.classList.contains(
				'about-text-wrap__hidden--active'
			)
		) {
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

	const asideMenuLinkActive = (event) => {
		const active = document.querySelector('.side-bar-link__item--active');

		if (event.target.closest('.side-bar-link__item--active')) {
			return;
		} else {
			active.classList.remove('side-bar-link__item--active');
			const parentCurrentItem = event.target.closest(
				'.side-bar-link__item'
			);
			parentCurrentItem.classList.add('side-bar-link__item--active');
		}
	};

	const langListLinkActive = (event) => {
		const active = document.querySelector('.side-bar-lang__link--active');

		if (event.target.classList.contains('slide-list-link--active')) {
			return;
		} else {
			active.classList.remove('side-bar-lang__link--active');
			event.target.classList.add('side-bar-lang__link--active');
		}
	};

	const changeStateCallModal = () => {
		const modalMessageActive = document.querySelector(
			'.modal-message--active'
		);
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
	slideLink.forEach((el) =>
		el.addEventListener('click', slideListLinkActive)
	);
	btnMoreInfoAbout.addEventListener('click', changeStateTextAbout);
	btnMoreInfoRepair.addEventListener('click', changeStateGroupRepair);
	btnMoreInfoBrand.addEventListener('click', changeStateGroupBrand);
	asideMenuLink.forEach((el) =>
		el.addEventListener('click', asideMenuLinkActive)
	);
	langLink.forEach((el) =>
		el.addEventListener('click', langListLinkActive)
	);
	btnCall.forEach((el) =>
		el.addEventListener('click', changeStateCallModal)
	);
	btnMessage.forEach((el) =>
		el.addEventListener('click', changeStateMessageModal)
	);
	btnModalCallClose.addEventListener('click', changeStateCallModal);
	btnModalMessageClose.addEventListener('click', changeStateMessageModal);

	//Swiper
	if (window.innerWidth < 768) {
		new Swiper('.brand-slider', {
			modules: [Autoplay, Navigation, Pagination],
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

		new Swiper('.repair-slider', {
			modules: [Autoplay, Navigation, Pagination],
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

		new Swiper('.price-slider', {
			modules: [Autoplay, Navigation, Pagination],
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
