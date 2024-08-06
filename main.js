const menuBtn = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav');
const navClose = document.querySelector('.nav-close');

menuBtn.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});