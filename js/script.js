const shelterHeaderLogo = document.querySelector('.shelter-header__logo');
const mainNavBurger = document.querySelector('.main-nav__burger');

const headerBurger = document.querySelector('.header-burger');
const headerBurgerNav = document.querySelector('.header-burger__nav');
const headerBurgerLink = document.querySelectorAll('.header-burger__link');

const shelterBlackout = document.querySelector('.shelter-blackout');

let isAnimationStop = true;
let isHeaderBurgerOpen = false;

const openHeaderBurger = () => {
  if (isAnimationStop === true) {
    isAnimationStop = false;
    mainNavBurger.classList.remove('header__burger--close');
    mainNavBurger.classList.add('header__burger--open');
    headerBurger.classList.add('header-burger--active');
    headerBurger.classList.add('header-burger__animation-in');
    headerBurger.classList.remove('header-burger__animation-out');
    shelterHeaderLogo.classList.add('shelter-header__logo--hide');
    headerBurgerNav.classList.add('header-burger__nav--open');
    document.body.style.overflowY = 'hidden';
    shelterBlackout.style.display = 'block';
    headerBurgerNav.addEventListener('animationend', () => {
      isAnimationStop = true;
      isHeaderBurgerOpen = true;
    })
  }
};

const removeHeaderBurgerActiveClass = () => {
  headerBurger.classList.remove('header-burger--active');
};

const closeHeaderBurger = () => {
  shelterBlackout.style.display = 'none';
  mainNavBurger.classList.remove("header__burger--open");
  mainNavBurger.classList.add("header__burger--close");
  headerBurger.classList.remove('header-burger__animation-in');
  headerBurger.classList.add('header-burger__animation-out');
  headerBurgerNav.classList.remove('header-burger__nav--open');
  shelterHeaderLogo.classList.remove('shelter-header__logo--hide');
  document.body.style.overflowY = 'visible';
  setTimeout(removeHeaderBurgerActiveClass, 1000);
  isHeaderBurgerOpen = false;
};

mainNavBurger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isHeaderBurgerOpen) {
    closeHeaderBurger();
  } else {
    openHeaderBurger();
  }
});

document.querySelector('.shelter-blackout').addEventListener('click', closeHeaderBurger);

headerBurgerLink.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault;
    if (isHeaderBurgerOpen) {
      closeHeaderBurger();
      removeHeaderBurgerActiveClass();
      headerBurger.classList.remove('header-burger__animation-out');
    }
  })
});

window.addEventListener('resize', () => {
  if (isHeaderBurgerOpen) {
    closeHeaderBurger();
  }
});

