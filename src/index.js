import "./styles.css";
import Utility from "./components/Utility.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Contact from "./components/Contact.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

const menu = await Menu.then((menu) => menu);

const navOptions = [
  {
    id: ["home", "logo"],
    main: Home.createHome(),
  },
  {
    id: ["menu"],
    main: menu.createMenu(),
  },
  {
    id: ["contact"],
    main: Contact.createContact(),
  },
];

const ids = navOptions.map((option) => option.id[0]);

document
  .querySelector("#content")
  .append(
    Header.createHeader(Nav.createNav(ids)),
    Home.createHome(),
    Footer.createFooter(),
    Utility.createText("div", ["overlay"]),
  );

Nav.addNavHandlers(navOptions);

Utility.changeDocumentTitle("Home");
