import { createImg } from './index.js';

const appetizersImages = importAll(require.context('./images/appetizers', false, /\.(png|jpe?g|svg)$/));
const meatsImages = importAll(require.context('./images/meats', false, /\.(png|jpe?g|svg)$/));
const sidesImages = importAll(require.context('./images/sides', false, /\.(png|jpe?g|svg)$/));
const dessertsImages = importAll(require.context('./images/desserts', false, /\.(png|jpe?g|svg)$/));
const drinksImages = importAll(require.context('./images/drinks', false, /\.(png|jpe?g|svg)$/));

const menu = {
  appetizers: {
    'BBQ Buffalo Bites': 'Baked wings tossed in buffalo sauce, served alongside celery sticks and blue cheese dip.',
    'Carolina Hush Puppies': 'Deep fried cornbread, served with a miniature coleslaw.'
  },
  meats: {
    'Texas Barbecued Brisket': 'Our signature brisket, smoked for 12 hours. Served alongside our famous barbecue sauce.',
    'Memphis Ribs': 'Pork ribs smoked over charcoal in a vinegar rub, finished with a herbal and earthy seasoning.',
    'Kansas City Sweet n\' Smoky Ribs': 'Baby backs rubbed in a supreme blend of spices, smoked and basted in barbecue sauce.',
    'Honey Marinated Rib Eye Steak': 'Grain-fed and grilled over the flame. Served with gravied mash and coleslaw.',
    'Carolina Pulled Pork': 'Slow-cooked pork shoulder, shredded cabbage, layered between two sesame buns.'
  },
  sides: {
    'Ultimate Potato Salad': 'Boiled potatoes and eggs, mixed with a crunchy blend of onions and cucumbers in our house dressing.',
    'Farmhouse Coleslaw': 'Julienned cabbage, carrots and apples tossed in our special dressing.',
    'Cowboy Beans': 'A healthy mix of beans, bacons and ground beef slow cooked in a sweet and tangy sauce.'
  },
  desserts: {
    'Apple Pie': 'Granny smiths encased in a golden brown baked crust. Served with vanilla ice cream.',
    'Chocolate Chip Cookies': 'We\'ll let the cookies themselves do the talking.',
    'Strawberry Cheese Cake': 'Lucious cream cheese filling baked on a graham cracker crust, topped off with strawberry puree. Served with a dollop of whipped cream.'
  },
  drinks: {
    'Peach Iced Tea': 'Black tea infused with peaches, served refreshingly.',
    'Lemonade': 'Juice of lemons, sweetened to your liking.'
  }
}

export function createMenu() {
  const main = document.createElement('main');
  main.classList.add('menu');

  const section = document.createElement('section');
  section.classList.add('container-menu');

  section.append(
    createMenuGroup('APPETIZERS'),
    createMenuGroup('MEATS'),
    createMenuGroup('SIDES'),
    createMenuGroup('DESSERTS'),
    createMenuGroup('DRINKS')
  )

  main.appendChild(section);

  return main;
}

function createMenuGroup(title) {
  const itemArr = [];
  const group = title.toLowerCase();

  switch (group) {
    case 'appetizers':
      var imageGroup = appetizersImages;
      break;
    case 'meats':
      var imageGroup = meatsImages;
      break;
    case 'sides':
      var imageGroup = sidesImages;
      break;
    case 'desserts':
      var imageGroup = dessertsImages;
      break;
    case 'drinks':
      var imageGroup = drinksImages;
  }

  for (const item in menu[group]) {
    itemArr.push(createMenuItem(imageGroup[`${item.replace(/ /g, '_').toLowerCase()}.png`], item, menu[group][item]))
  }

  const div = document.createElement('div');
  div.classList.add('menu-group');

  const h1 = document.createElement('h1');
  h1.textContent = title;

  const ul = document.createElement('ul');
  ul.classList.add('menu-list');

  ul.append(...itemArr);

  div.append(h1, ul);

  return div;
}

function createMenuItem(src, name, desc) {
  const li = document.createElement('li');

  const img = createImg(src, name);

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

function importAll(r) {
  const images = {};
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}