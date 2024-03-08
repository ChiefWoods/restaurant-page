import Utility from "./Utility.js";

export default (() => {
  const createHome = () => {
    const main = document.createElement("main");
    const section = Utility.createText("section", ["container-home"]);
    const blockquote = Utility.createText(
      "blockquote",
      ["title"],
      "'QUACK QUACK QUACK QUACK QUACK QUACK QUACK'",
    );
    const figcaption = Utility.createText("figcaption", [], "- Wolfgang Duck");
    const desc = Utility.createText(
      "p",
      ["description"],
      "Neighbourhood friendly BBQ place, smoking since 2012. We take pride in serving one of the best barbecue meats in Austin, rated by our legion of fanatics. Be sure to queue up extra early to not miss out on our legendary offerings!",
    );

    section.append(blockquote, figcaption, desc);
    main.append(section);

    return main;
  };

  return { createHome };
})();
