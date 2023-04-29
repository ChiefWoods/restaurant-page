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
  headerLogo.classList.add('logo');
  header.append(headerLogo, createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (const i of ['HOME', 'MENU', 'CONTACT']) {
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

function setSelected(ele) {
  const links = document.querySelectorAll('.nav-link')
  links.forEach(link => {
    if (link !== ele) {
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
