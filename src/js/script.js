window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const veil = document.querySelector('.page-container__veil');
	const asideBarMenu = document.querySelector('.aside-bar');
	const btnBurgerMenu = document.querySelector('.btn-burger-menu');
	const btnMenuClose = document.querySelector('.aside-menu__link--close');
	const btnModalCallClose = document.querySelector(
		'.modal-call__btn-close'
	);
	const btnModalMessageClose = document.querySelector(
		'.modal-message__btn-close'
	);
	const modalCall = document.querySelector('.modal-call');
	const btnCall = document.querySelectorAll('.btn-modal-call');

	const modalMessage = document.querySelector('.modal-message');
	const btnMessage = document.querySelectorAll('.btn-modal-message');

	const slideLink = document.querySelectorAll('.slide-list__link');
	slideLink[0].classList.add('slide-list__link--active');

	const langLink = document.querySelectorAll('.aside-menu-lang__link');
	langLink[0].classList.add('aside-menu-lang__link--active');

	const asideMenuLink = document.querySelectorAll(
		'.aside-menu-link__item '
	);
	asideMenuLink[0].classList.add('aside-menu-link__item--active');

	const btnMoreInfoAbout = document.querySelector('.about__control');
	const moreInfoTextAbout = document.querySelector('.about__control-name');
	const arrowAbout = document.querySelector('.about__control-icon');
	const hiddenTextAbout = document.querySelector('.about-text__hidden');

	const btnMoreInfoRepair = document.querySelector('.repair__control');
	const moreInfoTextRepair = document.querySelector(
		'.repair__control-name'
	);
	const arrowRepair = document.querySelector('.repair__control-icon');
	const repairCardWrap = document.querySelector(
		'.repair-card-desktop-wrap'
	);

	const btnMoreInfoBrand = document.querySelector('.brand__control');
	const moreInfoTextBrand = document.querySelector('.brand__control-name');
	const arrowBrand = document.querySelector('.brand__control-icon');
	const brandCardWrap = document.querySelector('.brand-card-desktop-wrap');

	const changeStateVeil = () => {
		!veil.classList.contains('page-container__veil--active')
			? veil.classList.add('page-container__veil--active')
			: veil.classList.remove('page-container__veil--active');

		!body.classList.contains('body--scroll-ban')
			? body.classList.add('body--scroll-ban')
			: body.classList.remove('body--scroll-ban');
	};

	const clickVeilArea = () => {
		const menuModalActive = document.querySelector('.aside-bar--active');
		const modalCallActive = document.querySelector('.modal-call--active');
		const modalMessageActive = document.querySelector(
			'.modal-message--active'
		);

		if (menuModalActive) {
			menuModalActive.classList.remove('aside-bar--active');
			body.classList.remove('body--scroll-ban');
			veil.classList.remove('page-container__veil--active');
		}

		if (modalCallActive) {
			modalCallActive.classList.remove('modal-call--active');
			body.classList.remove('body--scroll-ban');
			veil.classList.remove('page-container__veil--active');
		}

		if (modalMessageActive) {
			modalMessageActive.classList.remove('modal-message--active');
			body.classList.remove('body--scroll-ban');
			veil.classList.remove('page-container__veil--active');
		}
	};

	const changeStateMenuModal = () => {
		if (!asideBarMenu.classList.contains('aside-bar--active')) {
			changeStateVeil();
			asideBarMenu.classList.add('aside-bar--active');
		} else {
			changeStateVeil();
			asideBarMenu.classList.remove('aside-bar--active');
		}
	};

	const slideListLinkActive = (event) => {
		const active = document.querySelector('.slide-list__link--active');
		active
			? active.classList.remove('slide-list__link--active')
			: event.target.classList.add('slide-list__link--active');
	};

	const handleEnter = (event) => {
		if (event.key === 'Enter') {
		}
	};

	const changeStateTextAbout = () => {
		if (
			!hiddenTextAbout.classList.contains('about-text__hidden--active')
		) {
			hiddenTextAbout.classList.add('about-text__hidden--active');
			arrowAbout.style.transform = 'rotate(180deg)';
			moreInfoTextAbout.innerText = 'Скрыть';
		} else {
			arrowAbout.style.transform = 'rotate(0deg)';
			moreInfoTextAbout.innerText = 'Читать далее';
			hiddenTextAbout.classList.remove('about-text__hidden--active');
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
		const active = document.querySelector(
			'.aside-menu-link__item--active'
		);

		console.log(event.target.closest('.aside-menu-link__item--active'));

		if (event.target.closest('.aside-menu-link__item--active')) {
			return;
		} else {
			active.classList.remove('aside-menu-link__item--active');
			const parentCurrentItem = event.target.closest(
				'.aside-menu-link__item'
			);
			parentCurrentItem.classList.add('aside-menu-link__item--active');
		}
	};

	const langListLinkActive = (event) => {
		const active = document.querySelector(
			'.aside-menu-lang__link--active'
		);
		active
			? active.classList.remove('aside-menu-lang__link--active')
			: event.target.classList.add('aside-menu-lang__link--active');
	};

	const changeStateCallModal = () => {
		const modalMessage = document.querySelector('.modal-message');
		const asideMenu = document.querySelector('.aside-bar--active');

		if (asideMenu) {
			changeStateVeil();
			asideMenu.classList.remove('aside-bar--active');
		}

		if (modalMessage) {
			modalMessage.classList.remove('modal-message--active');
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
		const modalCall = document.querySelector('.modal-call');
		const asideMenu = document.querySelector('.aside-bar--active');

		if (asideMenu) {
			changeStateVeil();
			asideMenu.classList.remove('aside-bar--active');
		}

		if (modalCall) {
			modalCall.classList.remove('modal-call--active');
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
	btnMenuClose.addEventListener('click', changeStateMenuModal);
	veil.addEventListener('click', clickVeilArea);
	slideLink.forEach((el) =>
		el.addEventListener('click', slideListLinkActive)
	);
	slideLink.forEach((el) => el.addEventListener('keydown', handleEnter));
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
