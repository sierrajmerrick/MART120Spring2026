var x = 50;
var y = 50;
var diameter = 25;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(24, 200, 29);
  circle(x, y, diameter);

  if (x >= 300) {
    x = 50;
  }
  // change this so that it goes left and right.
  if (keyIsDown(83)) {
    y += 10;
  } else if (keyIsDown(87)) {
    y -= 10;
  }

  if (y >= 300) {
    y = 50;
  }

  if (diameter < 200) {
    diameter += 2;
  } else if (diameter >= 200) {
    diameter = 25;
  }
}

function keyPressed() {
  // change it so that the size increases slower or faster based on key presses
  if (key == "d") {
    x += 10;
  } else if (key == "a") {
    x -= 10;
  }
}