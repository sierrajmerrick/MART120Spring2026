// var redColor = 123;
// var greenColor = 39;
// var blueColor = 21;

// var x = 100;
// var y = 200;
// var diameter = 50;
// // this function is called only once
// function setup() {
//   createCanvas(800, 600);

//   movement = Math.floor(Math.random() * 10) + 1;
// }
// /* this function is called continuously
//     while the sketch is open in the browser
// */
// // function draw() {
// //   background(redColor, greenColor, blueColor);
// //   fill(255);
// //   circle(x, y, diameter);
// //   fill(redColor, greenColor, blueColor);
// //   circle(x, y, 25);
// //   // what if we make the 800 a veriable?
// //   // what if we make the 800 bigger?
// //   // what do we do to make the circle stop at the edge?
// //   if (x <= 800) {
// //     x += 13;
// //   }

// //   function draw() {
// //   background(redColor, greenColor, blueColor);
// //   fill(255);
// //   // what happens if we change the y to a number?
// //   circle(x, y, diameter);
// //   fill(redColor, greenColor, blueColor);
// //   // what happens if we change the x here to a number?
// //   circle(x, y, 25);
// //   // what can we do here to change the speed?
// //   x++;

// // function draw() {
// //   background(redColor, greenColor, blueColor);
// //   fill(255);
// //   circle(x, y, diameter);
// //   fill(redColor, greenColor, blueColor);
// //   circle(x, y, 25);
// //   if (x >= 800) {
// //     movement *= -1;
// //   }
// //   // print out what x is in the console so you can see what is happening to the number
// //   x += movement;

// function draw() {
//   background(redColor, greenColor, blueColor);
//   fill(255);
//   circle(x, y, diameter);
//   fill(redColor, greenColor, blueColor);
//   circle(x, y, 25);
//   // what happens if you change these values?
//   if (x >= 800 || x <= 0) {
//     movement *= -1;
//   }
//   // print out the x in the console so you see what is happening
//   x += movement;



// }


var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22)
    text("Good morning!", 10,80);

    // head
    fill(255, 204, 0);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes
    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    // nose
    point(245,90);
    
    // mouth
    ellipse(245, 135, 30, 45)

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    // body
    fill(10, 24, 120);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    // decoration
    fill(255);
    triangle(220,320,250,220,280,320)
    // right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);
    
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Michael Cassens",270,500 );


}