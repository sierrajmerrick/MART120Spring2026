function setup() {
  createCanvas(600, 800);
}
function draw() {
  background(33,45,30);
  // create sum and two numbers
  var sum;
  var number1;
  var number2;

  // change the values; create variables for x and y.
  // calculate the first sum
  number1 = 4;
  number2 = 5;
  calculateSum(number1, number2, 100, 200); // call calculateSum

  
  // calculate the second sum
  // change the values and change the x and y values with your variables
  number1 = 3; // overwrite the number1 variable with a new value
  number2 = 2; // overwrite the number2 variable with a new value
  calculateSum(number1, number2, 200, 200); // call calculateSum
}

// define the calculateSum function
function calculateSum(number1, number2, x, y) {
  number1 = number1 + number2;
  number2 = number1 + number2;
  sum = number1 + number2;
  text("Sum: " + sum, x, y);
}