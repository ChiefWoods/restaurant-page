import Utility from "./Utility.js";
import github from "../icons/github.svg";

export default (() => {
  /**
   * Creates the footer element.
   *
   * @returns {HTMLElement} The footer element.
   */
  const createFooter = () => {
    const footer = document.createElement("footer");

    const githubLink = Utility.createText("a", ["github-link"]);
    githubLink.href = "https://github.com/ChiefWoods/restaurant-page";
    githubLink.target = "_blank";

    githubLink.append(Utility.createImg(github, ["github-icon"], "GitHub"));

    footer.append(
      Utility.createText(
        "p",
        ["made-by"],
        `Copyright @ ${new Date().getFullYear()} ChiefWoods`,
      ),
      githubLink,
    );

    return footer;
  };

  return { createFooter };
})();
