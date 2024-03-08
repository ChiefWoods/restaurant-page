import Utility from "./Utility.js";
import logo from "../images/logo.png";
import menu from "../icons/menu.svg";

export default (() => {
  const createHeader = (nav) => {
    const header = document.createElement("header");

    const headerLogo = Utility.createImg(
      logo,
      ["nav-link"],
      "Gourmet BBQ Grill",
      "logo",
    );
    headerLogo.dataset.navId = "home";

    const menuBtn = Utility.createText("button", ["menu-btn", "action-btn"]);
    const menuIcon = Utility.createImg(menu, ["icon"], "Dropdown");
    menuBtn.append(menuIcon);

    menuBtn.addEventListener("click", () => {
      document.querySelector("nav").classList.add("active");
    });

    header.append(headerLogo, nav, menuBtn);

    return header;
  };

  return {
    createHeader,
  };
})();
