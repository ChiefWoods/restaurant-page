import { default as createSpan, createImg } from './index.js';

const menu = {
  appetizers: ['BBQ Buffalo Bites', 'Carolina Hush Puppies'],
  meats: ['Texas Barbecued Brisket', 'Memphis Ribs', "Kansas City Sweet n' Smoky Ribs", 'Honey Marinated Rib Eye Steak', 'Carolina Pulled Pork'],
  sides: ['Ultimate Potato Salad', 'Farmhouse Coleslaw', 'Cowboy Beans'],
  desserts: ['Apple Pie', 'Chocolate Chip Cookies', 'Strawberry Cheese Cake'],
  drinks: ['Peach Iced Tea', 'Lemonade'],
}

export function createMenu() {
  const main = document.createElement('main');
  main.classList.add('menu');

  const section = document.createElement('section');
  section.classList.add('container-menu');

  section.appendChild(createMenuGroup('APPETIZERS', [
    createMenuItem('BBQ Buffalo Bites', 'Baked wings tossed in buffalo sauce, served alongside celery sticks and blue cheese dip.'),
    createMenuItem('Carolina Hush Puppies', 'Deep fried cornbread, served with a miniature farmhouse coleslaw.')
  ]));

  section.appendChild(createMenuGroup('MEATS', [
    createMenuItem('Texas Barbecued Brisket', `What you are really here for. Smoked for 12 hours. 50% fatty, 50% lean, 100% satisfaction guaranteed.`),
    createMenuItem('Memphis Ribs', 'Pork ribs smoked over charcoal in a vinegar rub, finished with a herbal and earthy seasoning.'),
    createMenuItem("Kansas City Sweet n' Smoky Ribs", 'Baby backs rubbed in a supreme blend of spices, smoked and basted in barbecue sauce.'),
    createMenuItem('Honey Marinated Rib Eye Steak', 'Grain-fed and grilled over the flame. Served with gravied mash potatoes and farmhouse coleslaw.'),
    createMenuItem('Carolina Pulled Pork', 'Slow-cooked pork shoulder, shredded cabbage, layered between two sesame buns with a healthy smothering of aioli.')
  ]))

  section.appendChild(createMenuGroup('SIDES', [
    createMenuItem('Ultimate Potato Salad', 'Boiled potatoes and eggs, mixed with a crunchy blend of onions and celery in our house dressing.'),
    createMenuItem('Farmhouse Coleslaw', 'Julienned cabbage, carrots and apples tossed in our special dressing.'),
    createMenuItem('Cowboy Beans', 'A healthy mix of beans, bacons and ground beef slow cooked in a sweet and tangy sauce.')
  ]))

  section.appendChild(createMenuGroup('DESSERTS', [
    createMenuItem('Apple Pie', 'Granny smiths encased in a golden brown crust. Served with vanilla ice cream.'),
    createMenuItem('Chocolate Chip Cookies', "We'll let the cookies themselves do the talking."),
    createMenuItem('Strawberry Cheese Cake', 'Lucious cream cheese filling baked on a graham cracker crust, topped off with strawberry puree. Served with a dollop of whipped cream.')
  ]))

  section.appendChild(createMenuGroup('DRINKS', [
    createMenuItem('Peach Iced Tea', 'Black tea infused with peaches, served refreshingly.'),
    createMenuItem('Lemonade', 'Life gave us lemons, but we want to serve you sweetness instead.')
  ]))

  main.appendChild(section);

  return main;
}

function createMenuGroup(title, arr) {
  const div = document.createElement('div');
  div.classList.add('menu-group');

  const h1 = document.createElement('h1');
  h1.textContent = title;

  const ul = document.createElement('ul');
  ul.classList.add('menu-list');

  ul.append(...arr);

  div.append(h1, ul);

  return div;
}

function createMenuItem(name, desc) {
  const li = document.createElement('li');

  const img = createImg(`images/${findGroup(name)}/${toURL(name)}.png`, name);

  const div = document.createElement('div');
  div.classList.add('item-text');

  const h2 = document.createElement('h2');
  h2.textContent = name;

  const p = document.createElement('p');
  p.textContent = desc;

  div.append(h2, p);

  li.append(img, div);

  return li;
}

function toURL(name) {
  return name.replace(/ /g, '_').toLowerCase();
}

function findGroup(name) {
  for (let group in menu) {
    if (menu[group].includes(name)) {
      return `${group}`;
    }
  }
}