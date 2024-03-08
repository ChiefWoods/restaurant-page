import Utility from "./Utility.js";
import Papa from "papaparse";

export default (async () => {
  const images = importImages(
    import.meta.webpackContext("../images", {
      recursive: true,
      regExp: /\.png$/,
    }),
  );

  const data = await importData(
    import.meta.webpackContext("../data", {
      recursive: true,
      regExp: /\.csv$/,
    }),
  );

  const menuItems = importMenuItems(images, data);

  const createMenu = () => {
    const main = document.createElement("main");
    const section = Utility.createText("section", ["container-menu"]);

    const menuGroupArr = Object.keys(menuItems).map((group) =>
      createMenuGroup(group),
    );

    section.append(...menuGroupArr);
    main.append(section);

    return main;
  };

  const createMenuGroup = (group) => {
    const div = Utility.createText("div", ["menu-group"]);
    const h2 = Utility.createText("h2", ["title"], group.toUpperCase());
    const ul = Utility.createText("ul", ["menu-list"]);

    const itemArr = Object.keys(menuItems[group]).map((item) =>
      createMenuItem(
        menuItems[group][item].src,
        menuItems[group][item].name,
        menuItems[group][item].desc,
      ),
    );

    ul.append(...itemArr);
    div.append(h2, ul);

    return div;
  };

  const createMenuItem = (src, name, desc) => {
    const li = document.createElement("li");
    const img = Utility.createImg(src, [], name);
    const hgroup = document.createElement("hgroup");

    hgroup.append(
      Utility.createText("h3", ["item-name"], name),
      Utility.createText("p", ["item-desc"], desc),
    );

    li.append(img, hgroup);

    return li;
  };

  function readCSVFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e.error);
      reader.readAsText(file);
    });
  }

  function extractName(item) {
    return item.match(/\/([^/]+)\.[^.]+$/)[1];
  }

  function formatName(item) {
    return item.replace(/ /g, "_").toLowerCase();
  }

  function importImages(r) {
    const images = {};

    r.keys().forEach((item) => {
      const parent = item.split("/")[1];

      images[parent] = {
        ...images[parent],
        [extractName(item)]: r(item),
      };
    });

    return images;
  }

  async function importData(r) {
    const data = {};
    const sequence = ["appetizers", "sides", "meats", "desserts", "drinks"];

    await Promise.all(
      sequence
        .map((group) => {
          return r.keys().find((csv) => csv.match(group));
        })
        .map((path) => {
          const parent = path.split("/")[1].split(".")[0];

          return fetch(r(path).default)
            .then((response) => response.blob())
            .then((blob) => readCSVFile(blob))
            .then((csvText) => Papa.parse(csvText, { header: true }).data)
            .then((csvData) => {
              data[parent] = csvData.map(({ Name, Description }) => ({
                name: Name,
                desc: Description,
              }));
            });
        }),
    );

    return data;
  }

  function importMenuItems(images, data) {
    const menuItems = {};

    Object.keys(data).forEach((group) => {
      menuItems[group] = data[group].map(({ name, desc }) => ({
        src: images[group][formatName(name)],
        name,
        desc,
      }));
    });

    return menuItems;
  }

  return { createMenu };
})();
