const slide = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const linkAction = document.querySelectorAll('.nav-link');
const speakerContainer = document.querySelector('.feat-speaker');
const showMore = document.querySelector('#show-more');
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

const speakers = [
  {
    name: 'Vitalik Buterin',
    carrier: 'Berkman Professor of Enterpreneurial legal Studies',
    bio: 'Benkler studies commons-based peer production, and published his seminar book. The wealth of Networks',
    image: 'asset/vitalik.jpg',
  },
  {
    name: 'Anthony Pompliano',
    carrier: 'Director of Art Centre Nabi and a board member CC Korea',
    bio: 'As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration.',
    image: 'asset/anthony.jpg',
  },
  {
    name: 'Charlie Lee ',
    carrier: 'Executive Diretor of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the executive Director of Wikipedia Foundation, the nonprofit organization that operates Wikipedia.',
    image: 'asset/lee.jpg',
  },
  {
    name: 'Tim Draper',
    carrier: 'Executive Diretor of the Wikimedia Foundation',
    bio: 'Kilnam Chon helped bring the internet to asia and is an outspoken advocate for the open web and digital commons.',
    image: 'asset/tim.jpg',
  },
  {
    name: 'Roger Ver',
    carrier: 'President of Young Pirates of Europe',
    bio: 'European ingetration, political democracy and participation of youth through online as her major condern.',
    image: 'asset/roger.jpg',
  },
  {
    name: 'Andreas M. Antonopoulos',
    carrier: 'CEO of Creative, Commons, ex COO of the Mozilla Foundation',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement',
    image: 'asset/andreas.jpg',
  },
];

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

showMore.addEventListener('click', (e) => {
  e.preventDefault();
  speakerContainer.classList.toggle('hide');

  if (!showMore.textContent.includes('Show More')) {
    showMore.innerText = 'Show More';
  } else {
    showMore.innerText = 'Show Less';
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTop.classList.add('fade');
  } else {
    scrollToTop.classList.remove('fade');
  }
});
