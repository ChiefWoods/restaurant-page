import Utility from "./Utility.js";
import close from "../icons/close.svg";

export default (() => {
  let nav;
  /**
   * Creates a navigation element.
   *
   * @param {string[]} ids - The ids to create the navigation element.
   * @returns {HTMLElement} The navigation element.
   */
  const createNav = (ids) => {
    nav = document.createElement("nav");

    nav.addEventListener("focusout", (e) => {
      if (!nav.contains(e.relatedTarget)) {
        hideNav();
      }
    });

    const closeBtn = Utility.createText("button", ["close-btn", "action-btn"]);
    closeBtn.append(Utility.createImg(close, ["icon"], "Close"));
    closeBtn.addEventListener("click", hideNav);

    const ul = document.createElement("ul");

    ul.append(
      ...ids.map((id) => {
        const li = document.createElement("li");

        const link = Utility.createText(
          "a",
          ["nav-link", `${id === "home" ? "selected" : ""}`],
          `${id.toUpperCase()}`,
        );
        link.dataset.navId = id;
        link.href = "#";

        li.append(link);

        return li;
      }),
    );

    nav.append(closeBtn, ul);

    return nav;
  };

  /**
   * Adds navigation handlers to the navigation links.
   *
   * @param {object[]} options - The options to add navigation handlers.
   */
  const addNavHandlers = (options) => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".selected").classList.remove("selected");
        hideNav();

        for (const { id, main } of options) {
          if (id.includes(e.target.dataset.navId)) {
            const navId = id[0];
            document.querySelector("main").replaceWith(main);
            document
              .querySelector(`li>a[data-nav-id=${navId}]`)
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

  /**
   * Hides the navigation element.
   */
  const hideNav = () => {
    nav.classList.remove("active");
  };

  return {
    createNav,
    addNavHandlers,
    hideNav,
  };
})();
