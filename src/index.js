import './styles.css';
import { createIntro } from './intro.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

export default function createSpan(text) {
  const span = document.createElement('span');
  span.textContent = text;

  return span;
}

export function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;

  return img;
}

function removeMain() {
  const main = document.querySelector('main');
  main.remove();
}

function loadMain(main) {
  removeMain();

  const content = document.querySelector('#content');
  const footer = document.querySelector('footer');
  content.insertBefore(main, footer);
}

function createHeader() {
  const header = document.createElement('header');
  header.append(createLogo(), createNav());

  return header;
}

function createLogo() {
  const logo = document.createElement('img');
  logo.src = "images/logo.png";
  logo.classList.add('logo');
  logo.alt = "Gourmet BBQ Grill";

  return logo;
}

function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (let i of ['HOME', 'MENU', 'CONTACT']) {
    const li = document.createElement('li');
    li.classList.add('nav-link');
    li.textContent = i;
    ul.appendChild(li);
  }

  nav.appendChild(ul);

  return nav;
}

function createFooter() {
  const footer = document.createElement('footer');

  const span = document.createElement('span');
  span.classList.add('made-by');
  span.textContent = 'Made by ChiefWoods';

  const a = document.createElement('a');
  a.classList.add('github-link');
  a.href = 'https://github.com/ChiefWoods/restaurant-page';
  a.target = '_blank';

  const img = createImg('icons/github.svg', 'GitHub');
  img.classList.add('github-icon');

  a.appendChild(img);

  footer.append(span, a);

  return footer;
}

function setSelected(ele) {
  const links = document.querySelectorAll('.nav-link')
  links.forEach(link => {
    if (link != ele) {
      link.classList.remove('selected');
    }
  })

  ele.classList.add('selected');
}

function initialize() {
  const content = document.querySelector('#content');
  content.append(createHeader(), createIntro(), createFooter());
  setSelected(document.querySelector('.nav-link'));
}

initialize();

const links = document.querySelectorAll('.nav-link')
links.forEach(link => link.addEventListener('click', () => {
  if (!link.classList.contains('selected')) {
    setSelected(link);
  }
  switch (link.textContent) {
    case 'HOME':
      loadMain(createIntro());
      break;
    case 'MENU':
      loadMain(createMenu());
      break;
    case 'CONTACT':
      loadMain(createContact());
  }
}))