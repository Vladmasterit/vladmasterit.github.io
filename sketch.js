function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("p5canvas");
  cnv.style("z-index", "5");
  cnv.style("pointer-events", "none");
  clear();
}

function draw() {
  clear();
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, 40, 40);
}
