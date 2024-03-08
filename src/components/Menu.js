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

  /**
   * Creates the menu page.
   *
   * @returns {HTMLElement} The menu page.
   */
  const createMenu = () => {
    const main = document.createElement("main");
    const section = Utility.createText("section", ["container-menu"]);

    section.append(...Object.keys(menuItems).map(createMenuGroup));

    main.append(section);

    return main;
  };

  /**
   * Creates the menu group.
   *
   * @param {string} group - The group to create.
   * @returns {HTMLElement} The menu group.
   */
  const createMenuGroup = (group) => {
    const div = Utility.createText("div", ["menu-group"]);
    const ul = Utility.createText("ul", ["menu-list"]);

    const itemArr = Object.keys(menuItems[group]).map((item) =>
      createMenuItem(
        menuItems[group][item].src,
        menuItems[group][item].name,
        menuItems[group][item].desc,
      ),
    );

    ul.append(...itemArr);

    div.append(Utility.createText("h2", ["title"], group.toUpperCase()), ul);

    return div;
  };

  /**
   * Creates a menu item.
   *
   * @param {string} src - The source of the menu item image.
   * @param {string} name - The name of the menu item.
   * @param {string} desc - The description of the menu item.
   * @returns {HTMLElement} The menu item.
   */
  const createMenuItem = (src, name, desc) => {
    const li = document.createElement("li");
    const hgroup = document.createElement("hgroup");

    hgroup.append(
      Utility.createText("h3", ["item-name"], name),
      Utility.createText("p", ["item-desc"], desc),
    );

    li.append(Utility.createImg(src, [], name), hgroup);

    return li;
  };

  /**
   * Imports all images from the specified directory.
   *
   * @param {Function} r - The webpack context function.
   * @returns {Object} The imported images.
   */
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

  /**
   * Imports all data from the specified directory.
   *
   * @param {Function} r - The webpack context function.
   * @returns {Object} The imported data.
   */
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

  /**
   * Imports all menu items from the specified images and data.
   *
   * @param {Object} images - The imported images.
   * @param {Object} data - The imported data.
   * @returns {Object} The imported menu items.
   */
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

  /**
   * Reads the CSV file.
   *
   * @param {Blob} file - The CSV file to read.
   * @returns {Promise} The CSV file text.
   */
  function readCSVFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e.error);
      reader.readAsText(file);
    });
  }

  /**
   * Extracts the name from the item.
   *
   * @param {string} item - The item to extract the name from.
   * @returns {string} The extracted name.
   */
  function extractName(item) {
    return item.match(/\/([^/]+)\.[^.]+$/)[1];
  }

  /**
   * Formats the name of the item by replacing spaces with underscores and converting to lowercase.
   *
   * @param {string} item - The item to format the name.
   * @returns {string} The formatted name.
   */
  function formatName(item) {
    return item.replace(/ /g, "_").toLowerCase();
  }

  return { createMenu };
})();
