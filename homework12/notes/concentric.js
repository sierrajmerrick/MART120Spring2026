function setup() {
  createCanvas(500, 500);
}
function draw() {
  // make the locations of the circles random
  var r = Math.random() * 500;
  var r2 = Math.random() * 500;
  ConcentricCircle(r, r2, 100, 50, 50, 120, 120, 120, 50, 120);
  // concentric circle where x = 110 and y = 120
  ConcentricCircle(110, 120, 100, 50, 50, 120, 120, 120, 50, 120);
  // concentric circle where x = 210 and y = 220
  ConcentricCircle(210, 220, 100, 50, 50, 120, 120, 120, 50, 120);
}

function ConcentricCircle(
  x,
  y,
  outer_diameter,
  inner_diameter,
  outer_red,
  outer_green,
  outer_blue,
  inner_red,
  inner_green,
  inner_blue
) {
  fill(outer_red, outer_green, outer_blue);
  circle(x, y, outer_diameter);
  fill(inner_red, inner_green, inner_blue);
  circle(x, y, inner_diameter);
}