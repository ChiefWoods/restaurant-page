import Utility from "./Utility.js";
import logo from "../images/logo.png";
import menu from "../icons/menu.svg";

export default (() => {
  /**
   * Create a header element
   * @param {HTMLElement} nav - The nav element
   * @returns {HTMLElement} - The header element
   */
  const createHeader = (nav) => {
    const header = document.createElement("header");

    const logoLink = Utility.createText("a", ["nav-link"]);
    logoLink.href = "#";
    logoLink.dataset.navId = "home";

    const headerLogo = Utility.createImg(logo, [], "Gourmet BBQ Grill", "logo");

    logoLink.append(headerLogo);

    const menuBtn = Utility.createText("button", ["menu-btn", "action-btn"]);
    menuBtn.append(Utility.createImg(menu, ["icon"], "Sidebar"));

    menuBtn.addEventListener("click", () => {
      nav.classList.add("active");
    });

    header.append(logoLink, menuBtn, nav);

    return header;
  };

  return {
    createHeader,
  };
})();
