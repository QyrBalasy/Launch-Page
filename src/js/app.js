import * as flsFunctions from "./modules/functions.js";
import * as phoneInput from "./modules/phoneinput.js";
// import * as mymodal from "./modules/modal.js";
import * as burger from "./modules/burger.js";
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
// mymodal.modal();
// onEntry();
MySwiper();
formValidate();
