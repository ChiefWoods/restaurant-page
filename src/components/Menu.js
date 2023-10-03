import { Utility } from './Utility.js';
import Papa from 'papaparse';

export const Menu = (async () => {
  const images = importImages(require.context('../images', true, /\.png$/));
  const data = await importData(require.context('../data', true, /\.csv$/));
  const menuItems = importMenuItems(images, data);

  const createMenu = () => {
    const main = Utility.createText('main', ['container-menu']);
    
    const menuGroupArr = Object.keys(menuItems)
      .map(group => createMenuGroup(group));

    main.append(...menuGroupArr);

    return main;
  }

  const createMenuGroup = group => {
    const div = Utility.createText('div', ['menu-group']);
    const h1 = Utility.createText('h1', [], group.toUpperCase());
    const ul = Utility.createText('ul', ['menu-list']);

    const itemArr = Object.keys(menuItems[group])
      .map(item => createMenuItem(
        menuItems[group][item].src,
        menuItems[group][item].name,
        menuItems[group][item].desc)
      );

    ul.append(...itemArr);
    div.append(h1, ul);

    return div;
  }

  const createMenuItem = (src, name, desc) => {
    const li = document.createElement('li');
    const img = Utility.createImg(src, [], name);
    const div = Utility.createText('div', ['item-text']);

    div.append(
      Utility.createText('h2', [], name),
      Utility.createText('p', [], desc)
    );

    li.append(img, div);

    return li;
  }

  function readCSVFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const csvText = event.target.result;
        resolve(csvText);
      };

      reader.onerror = (event) => {
        reject(event.error);
      };

      reader.readAsText(file);
    });
  }

  function extractName(item) {
    return item.match(/\/([^/]+)\.[^.]+$/)[1];
  }

  function formatName(item) {
    return item.replace(/ /g, '_').toLowerCase();
  }

  function importImages(r) {
    const images = {};

    r.keys().forEach(item => {
      const parent = item.split('/')[1];
      images[parent] = {};
    });

    r.keys().forEach(item => {
      const parent = item.split('/')[1];
      images[parent][extractName(item)] = r(item);
    });

    return images;
  }

  async function importData(r) {
    const data = {};

    await Promise.all(r.keys().map(async (group) => {
      const parent = group.split('/')[1].split('.')[0];
      const csvResponse = await fetch(`data/${parent}.csv`);
      const csvBlob = await csvResponse.blob();
      const csvText = await readCSVFile(csvBlob);
      const csvData = Papa.parse(csvText, { header: true }).data;

      data[parent] = [];

      csvData.forEach(row => {
        data[parent].push({
          name: row.Name,
          desc: row.Description
        });
      });
    }));

    return data;
  }

  function importMenuItems(images, data) {
    const menuItems = {};

    Object.keys(data).forEach(group => {
      menuItems[group] = [];

      data[group].forEach(row => {
        menuItems[group].push({
          src: images[group][formatName(row.name)],
          name: row.name,
          desc: row.desc
        });
      });
    });

    return menuItems;
  }

  return { createMenu }
})();
