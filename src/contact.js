import { createText, createImg } from './index.js';
import email from './icons/email-outline.svg';
import phone from './icons/phone.svg';
import map from './icons/map-marker.svg';

export function createContact() {
  const main = document.createElement('main');
  main.classList.add('contact');

  const section = document.createElement('section');
  section.classList.add('container-contact');

  section.append(createOpening(), createInfo());
  main.append(section);

  return main;
}

function createOpening() {
  const opening = document.createElement('div');
  opening.classList.add('opening');

  const h1 = createText('h1', '', 'OPENING TIMES');

  const hr = document.createElement('hr');

  const div = document.createElement('div');
  div.classList.add('container-opening');

  const mon = document.createElement('div');
  mon.classList.add('container-opening-mon');

  mon.append(
    createText('span', '', 'Mon - Thu'),
    createText('span', ['time'], 'CLOSED')
  );

  const fri = document.createElement('div');
  fri.classList.add('container-opening-fri');

  fri.append(
    createText('span', '', 'Fri - Sun'),
    createText('span', ['time'], '10am - SOLD OUT')
  );
  div.append(mon, fri);
  opening.append(h1, hr, div);

  return opening;
}

function createInfo() {
  const info = document.createElement('div');
  info.classList.add('info');

  const div = document.createElement('div');
  div.classList.add('container-info');

  const location = document.createElement('span');
  location.innerHTML = '900 E 11th St,<br>' + 'Austin, TX 78702,<br>' + 'United States';

  div.append(
    createImg(email, '', 'Email'),
    createText('span', '', 'gourmetbbqgrill@gmail.com'),
    createImg(phone, '', 'Phone'),
    createText('span', '', '+6911111420'),
    createImg(map, '', 'Location'),
    location
  );

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.840562321891!2d-97.73352198528423!3d30.270123681800726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4ae3bcc33%3A0x31aba8abf8f64c84!2sFranklin%20Barbecue!5e0!3m2!1sen!2smy!4v1680164436880!5m2!1sen!2smy';
  iframe.allowFullscreen = '';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';

  info.append(div, iframe);

  return info;
}
