const slide = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const linkAction = document.querySelectorAll('.nav-link');

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

ScrollReveal({
  distance: '60px',
  duration: 2800,
  delay: 400,
});

ScrollReveal().reveal('.headline-content', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.img', {
  delay: 200,
  origin: 'bottom',
});
ScrollReveal().reveal('.caption', { delay: 300, origin: 'left' });
