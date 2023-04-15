import * as flsFunctions from "./modules/functions.js";
import * as phoneInput from "./modules/phoneinput.js";
import * as burger from "./modules/burger.js";
import { initModal, formModal } from "./modules/modal.js";
import { formValidate } from "./modules/form.js";
// import { onEntry } from "./modules/fadeBlocks.js";
import { MySwiper } from "./modules/swiper.js";
import { showContent } from "./modules/accordion.js";
import runSplineAnimation from "./modules/scene.js";

flsFunctions.isWebp();
burger.burgerMenuCustom();
runSplineAnimation();
showContent();
phoneInput.isPhone();
formModal();
initModal({
  modal: ".modal",
  modalImg: ".modal .portfolio-card__big",
  modalTitle: ".modal .modal-text__title",
  modalDescription: ".modal .modal-text__description",
});
// onEntry();
MySwiper();
const form1 = document.forms.form1;
formValidate(form1);





