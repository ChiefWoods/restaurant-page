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

      let navId = null;
      let main = null;

      switch (e.target.id) {
        case 'logo':
        case 'home':
          navId = 'home';
          main = Home.createHome();
          document.querySelector('main').replaceWith(main);
          break;
        case 'menu':
          navId = 'menu';
          Menu.then(menu => {
            main = menu.createMenu();
            document.querySelector('main').replaceWith(main);
          });
          break;
        case 'contact':
          navId = 'contact';
          main = Contact.createContact();
          document.querySelector('main').replaceWith(main);
      }

      document.querySelector(`#${navId}`).classList.add('selected');
      Utility.changeDocumentTitle(navId.charAt(0).toUpperCase() + navId.slice(1));
    })
  }

  return {
    createNav,
    addNavHandler
  }
})();
