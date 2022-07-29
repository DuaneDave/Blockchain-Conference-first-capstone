const slide = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const linkAction = document.querySelectorAll('.nav-link');
const scrollToTop = document.querySelector('.scroll-to-top');

hamburger.addEventListener('click', () => {
  slide.classList.toggle('slide');
  hamburger.classList.toggle('slide');
});

linkAction.forEach((n) => {
  n.addEventListener('click', () => {
    linkAction.forEach((n) => n.classList.remove('active'));
    n.classList.add('active');
    slide.classList.remove('slide');
    hamburger.classList.remove('slide');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTop.classList.add('fade');
  } else {
    scrollToTop.classList.remove('fade');
  }
});

// main.js
// <script src="https://unpkg.com/scrollreveal"></script>

// ScrollReveal({
//   distance: '60px',
//   duration: 2800,
//   delay: 400,
// });

// ScrollReveal().reveal('.headline-content', {
//   delay: 100,
//   origin: 'bottom',
// });
// ScrollReveal().reveal('.card, .feat-card', {
//   delay: 100,
//   origin: 'bottom',
//   interval: 200,
// });
// ScrollReveal().reveal('.caption', { delay: 300, origin: 'left' });

// ScrollReveal({
//   distance: '60px',
//   duration: 2800,
//   delay: 400,
// });

// ScrollReveal().reveal('.headline-content', { delay: 100, origin: 'bottom' });
// ScrollReveal().reveal('.img', {
//   delay: 200,
//   origin: 'bottom',
// });
// ScrollReveal().reveal('.caption', { delay: 300, origin: 'left' });
