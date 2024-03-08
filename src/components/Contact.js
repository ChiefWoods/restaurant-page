import Utility from "./Utility.js";
import email from "../icons/email-outline.svg";
import phone from "../icons/phone.svg";
import map from "../icons/map-marker.svg";

export default (() => {
  /**
   * Creates the contact page.
   *
   * @returns {HTMLElement} The contact page.
   */
  const createContact = () => {
    const main = document.createElement("main");
    const section = Utility.createText("section", ["container-contact"]);

    const opening = Utility.createText("div", ["opening"]);
    const mon = document.createElement("div");
    const fri = document.createElement("div");

    mon.append(
      Utility.createText("span", [], "Mon - Thu"),
      Utility.createText("span", ["time"], "CLOSED"),
    );

    fri.append(
      Utility.createText("span", [], "Fri - Sun"),
      Utility.createText("span", ["time"], "10am - SOLD OUT"),
    );

    const containerOpening = Utility.createText("div", ["container-opening"]);
    containerOpening.append(mon, fri);

    opening.append(
      Utility.createText("h2", ["title"], "OPENING TIMES"),
      document.createElement("hr"),
      containerOpening,
    );

    const info = Utility.createText("div", ["info"]);
    const containerInfo = Utility.createText("div", ["container-info"]);

    const location = document.createElement("span");
    location.innerHTML = `900 E 11th St,<br>Austin, TX 78702,<br>United States`;

    containerInfo.append(
      Utility.createImg(email, [], "Email"),
      Utility.createText("span", [], "gourmetbbqgrill@gmail.com"),
      Utility.createImg(phone, [], "Phone"),
      Utility.createText("span", [], "+6911111420"),
      Utility.createImg(map, [], "Location"),
      location,
    );

    const iframe = Utility.createText("iframe", ["google-maps"]);
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.840562321891!2d-97.73352198528423!3d30.270123681800726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4ae3bcc33%3A0x31aba8abf8f64c84!2sFranklin%20Barbecue!5e0!3m2!1sen!2smy!4v1680164436880!5m2!1sen!2smy";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    info.append(containerInfo, iframe);

    section.append(opening, info);
    main.append(section);

    return main;
  };

  return { createContact };
})();
