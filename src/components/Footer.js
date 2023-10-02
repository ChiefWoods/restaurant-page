import { Utility } from './Utility.js';
import github from '../icons/github.svg';

export const Footer = (() => {
  const createFooter = () => {
    const footer = document.createElement('footer');
    const span = Utility.createText('span', ['made-by'], `Copyright @ ${new Date().getFullYear()} ChiefWoods`);

    const a = Utility.createText('a', ['github-link']);
    a.href = 'https://github.com/ChiefWoods/restaurant-page';
    a.target = '_blank';

    const img = Utility.createImg(github, ['github-icon'], 'GitHub');

    a.append(img);
    footer.append(span, a);

    return footer;
  }

  return { createFooter }
})();
