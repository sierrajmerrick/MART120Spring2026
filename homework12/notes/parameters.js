function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(23, 30, 38);
  // call the function without parameters
  CircleSquare();
  // call the function with parameters
  CircleSquareP(30, 38, 50, 50, 100, 10);
}

// this is a function without parameters
function CircleSquare() {
  circle(100, 200, 25);
  square(250, 350, 50);
}

//this is a function with parameters, the parameters are the values that we can change when we call the function
function CircleSquareP(
  circleX,
  circleY,
  diameter,
  squareX,
  squareY,
  sideLength
) {
  circle(circleX, circleY, diameter);
  square(squareX, squareY, sideLength);
}
