// export function showContent() {
//   const accordion = document.getElementsByClassName(
//     "section-services__item-accordion"
//   );
//   for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       let panel = this.previousElementSibling;
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       }
//     });
//   }
// }
export function showContent() {
  const accordionTrigger = document.querySelectorAll(
    ".accordion__item--trigger"
  );
  const accordionParent = document.querySelectorAll(".accordion__item");
  accordionTrigger.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item--active")) {
        parent.classList.remove("accordion__item--active");
      } else {
        accordionParent.forEach((child) => {
          child.classList.remove("accordion__item--active");
        });
        parent.classList.toggle("accordion__item--active");
      }
    });
  });
}
