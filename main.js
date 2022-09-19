import speakers from './obj.js';

const slide = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const scrollToTop = document.querySelector('.scroll-to-top');

hamburger.addEventListener('click', () => {
  slide.classList.toggle('slide');
  hamburger.classList.toggle('slide');
  document.body.classList.toggle('no-scroll');
});

const linkAction = document.querySelectorAll('.nav-link');
linkAction.forEach((link) => {
  link.addEventListener('click', () => {
    linkAction.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
    slide.classList.remove('slide');
    hamburger.classList.remove('slide');
    document.body.classList.remove('no-scroll');
  });
});

const speakerContainer = document.querySelector('.feat-speaker');
function createSpeakers() {
  speakers.forEach((n) => {
    speakerContainer.innerHTML += `
    <div class="feat-card flex">
    <img src="${n.image}" alt="${n.name}">
    <div class="speaker-details">
      <div class="intro">
        <h2>${n.name}</h2>
      <p class="career">${n.carrier}</p>
      </div>
      <p>${n.bio}</p>
    </div>
  </div>`;
  });
}

createSpeakers();

const showMore = document.querySelector('#show-more');
showMore.addEventListener('click', (e) => {
  e.preventDefault();
  speakerContainer.classList.toggle('hide');

  if (!showMore.textContent.includes('Show More')) {
    showMore.innerHTML = 'Show More <i class="bx bx-chevron-down"></i>';
  } else {
    showMore.innerHTML = 'Show Less <i class="bx bx-chevron-up"></i>';
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTop.classList.add('fade');
  } else {
    scrollToTop.classList.remove('fade');
  }
});

const layer = document.querySelector('#layer');
const btnClose = document.querySelector('.bx-x');
const regDetails = document.querySelector('.register');
const btnJoin = document.querySelector('#join');

btnJoin.addEventListener('click', () => {
  layer.classList.add('layer');
  regDetails.classList.add('off');
});

btnClose.addEventListener('click', () => {
  layer.classList.remove('layer');
  regDetails.classList.remove('off');
});

const form = document.querySelector('#form');
const submit = document.querySelector('.btn-submit');

const feedbackHandler = () => {
  const placeholder = document.querySelector('#on-success');
  submit.addEventListener('click', () => {
    placeholder.innerHTML = `
      <i class="bx bx-check"></i>
      <h2 class="success">
        Cheers! we reserved a spot for you in the BlockChain 2022 Summit
      </h2>
      `;
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  feedbackHandler();

  setTimeout(() => window.location.reload(), 4000);
});