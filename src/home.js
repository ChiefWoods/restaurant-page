import { createText } from './index.js';

export function createHome() {
  const main = document.createElement('main');
  main.classList.add('home');

  const section = document.createElement('section');
  section.classList.add('container-home');

  const blockquote = createText('blockquote', '', '"QUACK QUACK QUACK QUACK QUACK QUACK QUACK"');

  const figcaption = createText('figcaption', '', '- Wolfgang Duck');

  const span = createText('span', '', 'Neighbourhood friendly BBQ place, smoking since 2012. We take pride in serving one of the best barbecue meats in Austin, rated by our legion of fanatics. Be sure to queue up extra early to not miss out on our legendary offerings!');

  section.append(blockquote, figcaption, span);
  main.append(section);

  return main;
}
