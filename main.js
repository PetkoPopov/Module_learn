// import   as qwerty from "./my_module.js"
// import   as c from "./module2.js"
// import { coorArea } from "./test.js"
import p5 from "../node_modules/p5/lib/p5.js"

function setup() {
  p5.createCanvas(200, 200);
  p5.stroke(255, 0, 255);
  v1 = createVector(width / 2, height / 2);
}

function draw() {
  p5.background(255);
  p5.line(v1.x, v1.y, mouseX, mouseY);
  p5.describe('draws a line from center of canvas to mouse pointer position.');
}
setup()
draw()