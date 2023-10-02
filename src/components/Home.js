import { Utility } from './Utility.js';

export const Home = (() => {
  const createHome = () => {
    const main = Utility.createText('main', ['container-home']);
    const blockquote = Utility.createText('blockquote', [], '"QUACK QUACK QUACK QUACK QUACK QUACK QUACK"');
    const figcaption = Utility.createText('figcaption', [], '- Wolfgang Duck');
    const span = Utility.createText('span', [], 'Neighbourhood friendly BBQ place, smoking since 2012. We take pride in serving one of the best barbecue meats in Austin, rated by our legion of fanatics. Be sure to queue up extra early to not miss out on our legendary offerings!');

    main.append(blockquote, figcaption, span);

    return main;
  }

  return { createHome }
})();
