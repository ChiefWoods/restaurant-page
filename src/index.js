import './styles.css';
import { createIntro } from './intro.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';
import logo from './images/logo.png';
import github from './icons/github.svg';

export function createSpan(text) {
  const span = document.createElement('span');
  span.innerHTML = text;

  return span;
}

export function createImg(src, alt) {
  const img = new Image();
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
  const headerLogo = createImg(logo, 'Gourmet BBQ Grill');
  headerLogo.className = 'header-link';
  headerLogo.id = 'logo';
  header.append(headerLogo, createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (const i of ['HOME', 'MENU', 'CONTACT']) {
    const li = document.createElement('li');
    li.className = 'header-link';
    li.id = `${i.toLowerCase()}`;
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
  span.textContent = `Copyright @ ${new Date().getFullYear()} ChiefWoods`;

  const a = document.createElement('a');
  a.classList.add('github-link');
  a.href = 'https://github.com/ChiefWoods/restaurant-page';
  a.target = '_blank';

  const img = createImg(github, 'GitHub');
  img.classList.add('github-icon');

  a.appendChild(img);

  footer.append(span, a);

  return footer;
}

const content = document.querySelector('#content');
content.append(createHeader(), createIntro(), createFooter());

const home = document.querySelector('#home');
home.classList.add('selected');

const headerLinks = document.querySelectorAll('.header-link');

headerLinks.forEach(link => link.addEventListener('click', () => {
  headerLinks.forEach(link => {
    link.classList.remove('selected');
  })
  switch (link.id) {
    case 'logo':
    case 'home':
      loadMain(createIntro());
      home.classList.add('selected');
      break;
    case 'menu':
      loadMain(createMenu());
      link.classList.add('selected');
      break;
    case 'contact':
      loadMain(createContact());
      link.classList.add('selected');
  }
}))
