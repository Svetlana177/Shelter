const mainNavBurger = document.querySelector('.main-nav__burger');
const headerBurger = document.querySelector('.header-burger');
const shelterBlackout = document.querySelector('.shelter-blackout');
let isHeaderBurgerOpen = false;

const openHeaderBurger = () => {
  isHeaderBurgerOpen = true;
  document.body.style.overflowY = 'hidden';
  shelterBlackout.style.display = 'block';
  mainNavBurger.classList.add('button_open');
  headerBurger.classList.add('header-burger--active');
}

const closeHeaderBurger = () => {
  isHeaderBurgerOpen = false;
  shelterBlackout.style.display = 'none';
  document.body.style.overflowY = 'visible';
  mainNavBurger.classList.remove('button_open');
  headerBurger.classList.remove('header-burger--active');
}

mainNavBurger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isHeaderBurgerOpen) {
    closeHeaderBurger();
  } else {
    openHeaderBurger();
  }
});

shelterBlackout.addEventListener('click', closeHeaderBurger); // Закрываем меню при клике на shelterBlackout
window.addEventListener('resize', () => {
  if (isHeaderBurgerOpen) {
    closeHeaderBurger();
  }
});


