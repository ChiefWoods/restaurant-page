export default (() => {
  const createText = (ele, className, content = "") => {
    const text = document.createElement(ele);
    text.classList.add(...className);
    text.textContent = content;

    return text;
  };

  const createImg = (src, className, alt, id = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;
    img.id = id;

    return img;
  };

  const changeDocumentTitle = (title) => {
    document.title = `${title} - Restaurant Page`;
  };

  return {
    createText,
    createImg,
    changeDocumentTitle,
  };
})();
