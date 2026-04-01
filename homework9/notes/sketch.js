function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  console.log("hi")

  //SHAPES
  circle(30,40,50); // x,y,diameter
  circle(0,0,3); // xy origin is upper left corner, + to move down & right
  square(60,15,50); // x, y, width&height
  ellipse(140,40,50,60); // x, y, width, height
  rect(170,10,50,60); // x, y, width, height
  triangle(230, 70, 260, 10, 290, 70); // bottom left point: x, y, top point: x, y, bottom right point x, y
  point(300, 15); // x, y
  line(310, 15, 320, 75); // x, y, x, y

  //TEXT
  textSize(32);
  text('Hello there!', 10, 110); // x, y
}

var x = 100;
var y = 100;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
}