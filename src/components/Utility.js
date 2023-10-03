import { Header } from './Header.js';
import { Home } from './Home.js';
import { Footer } from './Footer.js';

export const Utility = (() => {
  const initialize = () => {
    addCSSTemplate();

    document.querySelector('#content').append(
      Header.createHeader(),
      Home.createHome(),
      Footer.createFooter()
    );

    changeDocumentTitle('Home');
  }

  const createText = (element, className, content = '') => {
    const text = document.createElement(element);
    text.classList.add(...className);
    text.textContent = content;

    return text;
  }

  const createImg = (src, className, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;

    return img;
  }

  const addCSSTemplate = () => {
    const link = document.createElement('link');
    link.href = 'https://chiefwoods.github.io/footer-template/template.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
  }

  const changeDocumentTitle = title => {
    document.title = `${title} - Restaurant Page`;
  }

  return {
    initialize,
    createText,
    createImg,
    changeDocumentTitle
  }
})();
