import { Utility } from './Utility.js';
import { Nav } from './Nav.js';
import logo from '../images/logo.png';

export const Header = (() => {
  const createHeader = () => {
    const header = document.createElement('header');

    const headerLogo = Utility.createImg(logo, ['header-link'], 'Gourmet BBQ Grill');
    headerLogo.id = 'logo';
    Nav.addNavHandler(headerLogo);

    header.append(headerLogo, Nav.createNav());

    return header;
  }

  return { createHeader }
})();
