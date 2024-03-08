import Utility from "./Utility.js";
import close from "../icons/close.svg";

export default (() => {
  const createNav = (ids) => {
    const nav = document.createElement("nav");

    const closeBtn = Utility.createText("button", ["close-btn", "action-btn"]);
    const closeIcon = Utility.createImg(close, ["icon"], "Close");
    closeBtn.append(closeIcon);

    closeBtn.addEventListener("click", () => {
      document.querySelector("nav").classList.remove("active");
    });

    const ul = document.createElement("ul");

    const navLinks = ids.map((id) => {
      const li = Utility.createText(
        "li",
        id === "home" ? ["nav-link", "selected"] : ["nav-link"],
        `${id.toUpperCase()}`,
      );
      li.dataset.navId = id;

      return li;
    });

    ul.append(...navLinks);
    nav.append(closeBtn, ul);

    return nav;
  };

  const addNavHandlers = (options) => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".selected").classList.remove("selected");

        for (const { id, main } of options) {
          if (id.includes(e.target.dataset.navId)) {
            const navId = id[0];
            document.querySelector("main").replaceWith(main);
            document
              .querySelector(`li[data-nav-id=${navId}]`)
              .classList.add("selected");
            Utility.changeDocumentTitle(
              navId.charAt(0).toUpperCase() + navId.slice(1),
            );
            break;
          }
        }
      });
    });
  };

  return {
    createNav,
    addNavHandlers,
  };
})();
