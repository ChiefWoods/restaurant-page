import { createSpan } from './index.js';

export function createIntro() {
  const main = document.createElement('main');
  main.classList.add('intro');

  const section = document.createElement('section');
  section.classList.add('container-intro');

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = '"QUACK QUACK QUACK QUACK QUACK QUACK QUACK"';

  const figcaption = document.createElement('figcaption');
  figcaption.textContent = '- Wolfgang Duck';

  const span = createSpan('Neighbourhood friendly BBQ place, smoking since 2012. We take pride in serving one of the best barbecue meats in Austin, rated by our legion of fanatics. Be sure to queue up extra early to not miss out on our legendary offerings!');

  section.append(blockquote, figcaption, span);
  main.appendChild(section);

  return main;
}
