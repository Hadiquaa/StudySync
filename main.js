const menuBtn = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav');
const navClose = document.querySelector('.nav-close');

menuBtn.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// scroll reveal
const sr = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 2500,
  delay: 300,
})

sr.reveal('.main-content');