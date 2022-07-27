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
