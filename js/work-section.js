const htmls = document.getElementsByTagName('html')[0];
const cardContainer = document.querySelector('.card-container');
const popupContainer = document.querySelector('main article');

// Array of data that is implemented in the pop-up window
const projects = [
  {
    id: 'project_1',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile1@2x.png',
      img: './images/1.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Multi-Post Stories Gain+Glory',
    languages: [
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'Netlify',
      'GitHub',
      'Dom Manupulation',
      'Terminal',
      'Dev Tools',
    ],

    // button: 'See Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: '#',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '#',
      },
    ],
  },
  {
    id: 'project_2',
    images: {
      img: './images/2.png',
      // img: './images/Snapshoot-Portfolio-mobile6@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 3 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Leaderboard',
    languages: [
      'SCSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Postman',
      'GitHub',
      'ECMAScript 6',
      'Rest Apis',
      'Terminal',
      'Netlify',
    ],
    // button: 'See Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: '#',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '#',
      },
    ],
  },
  {
    id: 'project_3',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile4@2x.png',
      // img: './images/Snapshoot-Portfolio-mobile@3x.png',
      img: './images/3.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 4 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Multi-Post Stories Gain+Glory',
    languages: [
      'React',
      'React-router',
      'Scss',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Netlify',
      'Terminal',
      'Jest Testing',
    ],
    // button: 'See Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: '#',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '#',
      },
    ],
  },
  {
    id: 'project_4',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile2@2x.png',
      img: './images/4.png',

      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 2 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Multi-Post Stories Gain+Glory',
    languages: [
      'SCSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Dom Manupulation',
      'Terminal',
      'Git',
    ],
    // button: 'See Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: '#',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '#',

      },
    ],
  },
  {
    id: 'project_5',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile5@2x.png',
      // img: './images/Snapshoot-Portfolio-mobile2@2x.png',
      img: './images/5.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 5 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Multi-Post Stories Gain+Glory',
    languages: [
      'React',
      'Redux',
      'SCSS',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Terminal',
      'Api',
      'Jest Testing',
      'Heroku',
    ],
    // button: 'See Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: '#',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '#',
      },
    ],
  },
  {
    id: 'project_6',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile6@2x.png',
      img: './images/6.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 6 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Multi-Post Stories Gain+Glory',
    languages: [
      'Ruby on Rails',
      'Ruby',
      'PostgreSQL',
    ],
    technologies: [
      'Heroku',
      'GitHub',
      'RSpec',
      'Capybara',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: '#',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '#',
      },
    ],
  },
];

// Implementing the Flex card dynamically

function createCard(cardObject) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="img-card">
  <img src="${cardObject.images.img}" alt="${cardObject.images.altText}">
  </div>
  <h3>${cardObject.name}</h3>
  <ul class="program-lang d-flex">
  ${cardObject.languages.map((lang) => `<li>
   ${lang}</li>`).join('')}
 </ul>
  <button type="button" class="btn-card ${cardObject.id}" id="${cardObject.id}">See Project</button>`;
  return li;
}

projects.forEach((project) => {
  const card = createCard(project);
  cardContainer.appendChild(card);
});

// Implementing the Popup Window dynamically

function createPopup(object) {
  const popupCard = document.createElement('div');
  popupCard.classList.add('card-popup');
  popupCard.id = object.id;
  popupCard.innerHTML = `
  <div class="fixed">
  <div class="project-img">
  <img class="card-img" src="${object.images.img}" alt="${object.images.altText}">
    <img class="hide-icon" src="./images/icons/Disabled.svg" alt="close icon">
  </div>
  <div class="article">
    <h3>${object.heading}</h3>
    <ul class="program-lang d-flex">
    ${object.languages.map((lang) => `<li class="btn tag_btn mobile-invisible"> 
                                        ${lang}
                                        </li>`).join('')}

    ${object.technologies.map((tech) => `<li class="btn tag_btn desktop-invisible"> 
                                        ${tech}
                                        </li>`).join('')}
    </ul>
    <p>${object.description}</p>
    <div class="btns-popup d-flex">
    <a href="${object.list[0].liveDemo}"><button type="button" class="btn-card d-flex flex-center"><span>${object.list[0].text}</span><img src="./images/icons/Icon-Export@2x.svg" alt=""></button></a>
    <a href="${object.list[1].codeSource}"><button type="button" class="btn-card d-flex flex-center"><span>${object.list[1].text2}</span><img src="./images/icons/Icon-GitHub-1.svg" alt=""></button></a>
    </div>
  </div>
  </div>`;
  return popupCard;
}

// Toggle PopUp window

const buttons = document.querySelectorAll('li.card .btn-card');
const four = document.querySelectorAll('.card-popup .program-lang li:nth-child(4)');

four.forEach((li) => {
  li.style.display = 'none';
});

projects.forEach((project) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (project.id === button.id) {
        const popupCard = createPopup(project);
        popupContainer.appendChild(popupCard);

        // Show the popup window

        document.querySelector('.card-popup').classList.add('active');
        popupContainer.style.visibility = 'visible';
        htmls.style.overflow = 'hidden';

        const popAnimation = popupContainer.querySelector('.card-popup');
        popAnimation.classList.add('inActive');
        setTimeout(() => {
          popAnimation.classList.remove('inActive');
        }, 1000);

        const closeBtn = document.querySelector('.card-popup .hide-icon');

        // Hide the popup window

        closeBtn.addEventListener('click', () => {
          const popAnimation = popupContainer.querySelector('.card-popup');
          popAnimation.classList.add('outActive');

          setTimeout(() => {
            document.querySelector('.card-popup.active').classList.remove('active');
            popAnimation.classList.remove('outActive');
            popupContainer.style.visibility = 'hidden';
            htmls.style.overflow = 'auto';
          }, 1000);
          setTimeout(() => {
            popupContainer.innerHTML = '';
          }, 1000);
        });
      }
    });
  });
});