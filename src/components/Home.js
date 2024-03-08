import Utility from "./Utility.js";

export default (() => {
  /**
   * Creates the home page.
   *
   * @returns {HTMLElement} The home page.
   */
  const createHome = () => {
    const main = document.createElement("main");
    const section = Utility.createText("section", ["container-home"]);

    section.append(
      Utility.createText(
        "blockquote",
        ["title"],
        "'QUACK QUACK QUACK QUACK QUACK QUACK QUACK'",
      ),
      Utility.createText("figcaption", [], "- Wolfgang Duck"),
      Utility.createText(
        "p",
        ["description"],
        "Neighbourhood friendly BBQ place, smoking since 2012. We take pride in serving one of the best barbecue meats in Austin, rated by our legion of fanatics. Be sure to queue up extra early to not miss out on our legendary offerings!",
      ),
    );

    main.append(section);

    return main;
  };

  return { createHome };
})();
