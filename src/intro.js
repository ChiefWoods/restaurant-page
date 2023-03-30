import { default as createSpan } from './index.js';

export function createIntro() {
  const main = document.createElement('main');
  main.classList.add('intro');

  const section = document.createElement('section');
  section.classList.add('container-intro');

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = "QUACK QUACK QUACK QUACK QUACK QUACK QUACK";

  const figcaption = document.createElement('figcaption');
  figcaption.textContent = "- Wolfgang Duck";

  const span = createSpan("Neighbourhood friendly BBQ place, smoking since 2012. We put so much love into our food, that we only open three days a week. Our meats are so popular, we literally don't even have a closing time. They sell out before you're even done reading this.");

  section.append(blockquote, figcaption, span);
  main.appendChild(section);

  return main;
}