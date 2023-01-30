//hamburger menu
const hamburger = document?.querySelector('[data-hamburger]');
const navigation = document?.querySelector('[data-headernavigation]');
const body = document.body;
const navigationItems = navigation?.querySelectorAll('a');
const sectionItems = document?.querySelectorAll('section');

hamburger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  hamburger?.classList.toggle('hamburger--active');
  navigation?.classList.toggle('header-navigation--visible');
});

navigationItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    hamburger?.classList.remove('hamburger--active');
    navigation?.classList.remove('header-navigation--visible');
  })
})

sectionItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    hamburger?.classList.remove('hamburger--active');
    navigation?.classList.remove('header-navigation--visible');
  })
})

