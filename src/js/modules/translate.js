import fullTextContent from "./content.js";

export default function initLanguageToggle() {
  const langToggle = document.querySelector("#lang__toggle");
  const defaultLanguage = "ru";
  langToggle.checked = defaultLanguage === "ru"; // установка значения checked на основе defaultLanguage
  translatePage(defaultLanguage);

  langToggle.addEventListener("change", (event) => {
    const language = event.target.checked ? "ru" : "kz";
    translatePage(language);
  });

  function translatePage(language) {
    const elements = document.querySelectorAll("[data-textContent]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-textContent");
      element.textContent = fullTextContent[language][key];
    });
  }
}
