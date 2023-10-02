import { Utility } from './Utility.js';
import { Home } from './Home.js';
import { Menu } from './Menu.js';
import { Contact } from './Contact.js';

export const Nav = (() => {
  const createNav = () => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const liArr = [];

    for (const i of ['home', 'menu', 'contact']) {
      const li = Utility.createText('li', i === 'home' ? ['header-link', 'selected'] : ['header-link'], `${i.toUpperCase()}`);
      li.id = i;
      addNavHandler(li);

      liArr.push(li);
    }

    ul.append(...liArr);
    nav.append(ul);

    return nav;
  }

  const addNavHandler = ele => {
    ele.addEventListener('click', e => {
      document.querySelector('.selected').classList.remove('selected');

      switch (e.target.id) {
        case 'logo':
        case 'home':
          document.querySelector('#home').classList.add('selected');
          replaceMain(Home.createHome());
          break;
        case 'menu':
          document.querySelector('#menu').classList.add('selected');
          replaceMain(Menu.createMenu());
          break;
        case 'contact':
          document.querySelector('#contact').classList.add('selected');
          replaceMain(Contact.createContact());
      }
    })
  }

  const replaceMain = main => {
    document.querySelector('main').replaceWith(main);
  }

  return {
    createNav,
    addNavHandler
  }
})();
