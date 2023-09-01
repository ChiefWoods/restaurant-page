import './styles.css';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';
import logo from './images/logo.png';
import github from './icons/github.svg';

export function createText(element, className, content) {
  const text = document.createElement(element);
  text.classList.add(...className);
  text.textContent = content;

  return text;
}

export function createImg(src, className, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add(...className);
  img.alt = alt;

  return img;
}

function loadMain(main) {
  document.querySelector('main').replaceWith(main);
}

function createHeader() {
  const header = document.createElement('header');

  const headerLogo = createImg(logo, ['header-link'], 'Gourmet BBQ Grill');
  headerLogo.id = 'logo';

  header.append(headerLogo, createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (const i of ['HOME', 'MENU', 'CONTACT']) {
    const li = createText('li', ['header-link'], i);
    li.id = `${i.toLowerCase()}`;

    ul.append(li);
  }

  nav.append(ul);

  return nav;
}

function createFooter() {
  const footer = document.createElement('footer');

  const span = createText('span', ['made-by'], `Copyright @ ${new Date().getFullYear()} ChiefWoods`);

  const a = document.createElement('a');
  a.classList.add('github-link');
  a.href = 'https://github.com/ChiefWoods/restaurant-page';
  a.target = '_blank';

  const img = createImg(github, ['github-icon'], 'GitHub');

  a.append(img);
  footer.append(span, a);

  return footer;
}

const content = document.querySelector('#content');
content.append(createHeader(), createHome(), createFooter());

const home = document.querySelector('#home');
home.classList.add('selected');

const headerLinks = document.querySelectorAll('.header-link');

headerLinks.forEach(link => link.addEventListener('click', () => {
  document.querySelector('.selected').classList.remove('selected');
  
  switch (link.id) {
    case 'logo':
    case 'home':
      loadMain(createHome());
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
