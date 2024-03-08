import Utility from "./Utility.js";
import github from "../icons/github.svg";

export default (() => {
  const createFooter = () => {
    const footer = document.createElement("footer");
    const madeBy = Utility.createText(
      "p",
      ["made-by"],
      `Copyright @ ${new Date().getFullYear()} ChiefWoods`,
    );

    const githubLink = Utility.createText("a", ["github-link"]);
    githubLink.href = "https://github.com/ChiefWoods/restaurant-page";
    githubLink.target = "_blank";

    const img = Utility.createImg(github, ["github-icon"], "GitHub");

    githubLink.append(img);
    footer.append(madeBy, githubLink);

    return footer;
  };

  return { createFooter };
})();
