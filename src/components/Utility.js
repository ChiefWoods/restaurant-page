export default (() => {
  /**
   * Create a text element with the specified element type, class names, and content.
   * @param {string} ele - The type of element to create.
   * @param {string[]} className - The class names to add to the element.
   * @param {string} [content=""] - The content to add to the element.
   * @returns {HTMLElement} The text element.
   */
  const createText = (ele, className, content = "") => {
    const text = document.createElement(ele);
    text.classList.add(...className.filter((name) => name !== ""));
    text.innerHTML = content;

    return text;
  };

  /**
   * Create an image element with the specified source, class names, and alt text.
   * @param {string} src - The source of the image.
   * @param {string[]} className - The class names to add to the image.
   * @param {string} [alt=""] - The alt text of the image.
   * @param {string} [id=""] - The id of the image.
   * @returns {HTMLImageElement} The image element.
   */
  const createImg = (src, className, alt = "", id = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;
    img.id = id;

    return img;
  };

  /**
   * Change the document title to the specified title.
   * @param {string} title - The title to change the document title to.
   */
  const changeDocumentTitle = (title) => {
    document.title = `${title} - Restaurant Page`;
  };

  return {
    createText,
    createImg,
    changeDocumentTitle,
  };
})();
