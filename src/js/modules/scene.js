import { Application } from "@splinetool/runtime";

function runSplineAnimation() {
  const canvas = document.getElementById("canvas3d");
  const app = new Application(canvas);
  app.load("./files/main.splinecode");
}

export default runSplineAnimation;
