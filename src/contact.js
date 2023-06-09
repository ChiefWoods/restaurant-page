import { createSpan, createImg } from './index.js';
import email from './icons/email-outline.svg';
import phone from './icons/phone.svg';
import map from './icons/map-marker.svg';

export function createContact() {
  const main = document.createElement('main');
  main.classList.add('contact');

  const section = document.createElement('section');
  section.classList.add('container-contact');

  section.append(createOpening(), createInfo());

  main.appendChild(section);

  return main;
}

function createOpening() {
  const opening = document.createElement('div');
  opening.classList.add('opening');

  const h1 = document.createElement('h1');
  h1.textContent = 'OPENING TIMES';

  const hr = document.createElement('hr');

  const div = document.createElement('div');
  div.classList.add('container-opening');

  const mon = document.createElement('div');
  mon.classList.add('container-opening-mon');

  const span1 = createSpan('Mon - Thu');

  const span2 = createSpan('CLOSED');
  span2.classList.add('time');

  mon.append(span1, span2);

  const fri = document.createElement('div');
  fri.classList.add('container-opening-fri');

  const span3 = createSpan('Fri - Sun');

  const span4 = createSpan('10am - SOLD OUT');
  span4.classList.add('time');

  fri.append(span3, span4);

  div.append(mon, fri);

  opening.append(h1, hr, div);

  return opening;
}

function createInfo() {
  const info = document.createElement('div');
  info.classList.add('info');

  const div = document.createElement('div');
  div.classList.add('container-info');

  const img1 = createImg(email, 'Email');

  const span1 = createSpan('gourmetbbqgrill@gmail.com');

  const img2 = createImg(phone, 'Phone');

  const span2 = createSpan('+6911111420');

  const img3 = createImg(map, 'Location');

  const span3 = createSpan(
    '900 E 11th St,<br>' +
    'Austin, TX 78702,<br>' +
    'United States'
  );

  div.append(img1, span1, img2, span2, img3, span3);

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.840562321891!2d-97.73352198528423!3d30.270123681800726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4ae3bcc33%3A0x31aba8abf8f64c84!2sFranklin%20Barbecue!5e0!3m2!1sen!2smy!4v1680164436880!5m2!1sen!2smy';
  iframe.allowFullscreen = '';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';

  info.append(div, iframe);

  return info;
}
