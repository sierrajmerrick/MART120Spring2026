var x = 100;
var y = 100;

function setup() {
  createCanvas(600,600);
}

function draw() {

  background(220);
  textSize(20);
  text("X: " + mouseX,100,200 );
  text("Y: " + mouseY,100,220 );
  console.log("hi")

  strokeWeight(1);

//HAIR BACK
  ellipse(190, 185, 250, 230); // x, y, width, height
  ellipse(180, 185, 200, 230); // x, y, width, height
  ellipse(200, 185, 200, 230); // x, y, width, height

  ellipse(270, 190, 30, 170); // x, y, width, height
  ellipse(270, 170, 25, 130); // x, y, width, height
  ellipse(270, 155, 20, 100); // x, y, width, height

  ellipse(110, 190, 30, 170); // x, y, width, height
  ellipse(110, 170, 25, 130); // x, y, width, height
  ellipse(110, 155, 20, 100); // x, y, width, height

  ellipse(280, 200, 30, 170); // x, y, width, height
  ellipse(280, 180, 25, 130); // x, y, width, height
  ellipse(280, 165, 20, 100); // x, y, width, height

  ellipse(100, 200, 30, 170); // x, y, width, height
  ellipse(100, 180, 25, 130); // x, y, width, height
  ellipse(100, 165, 20, 100); // x, y, width, height

  ellipse(290, 205, 30, 170); // x, y, width, height
  ellipse(290, 185, 25, 130); // x, y, width, height
  ellipse(290, 170, 20, 100); // x, y, width, height

  ellipse(90, 205, 30, 170); // x, y, width, height
  ellipse(90, 185, 25, 130); // x, y, width, height
  ellipse(90, 170, 20, 100); // x, y, width, height

  

  //BRAIDS
  triangle(99, 410, 120, 370, 139, 410);
  triangle(240, 410, 260, 370, 280, 410);
  
  rect (250, 270, 20, 120);
  rect (110, 270, 20, 120);

  //HEAD
  ellipse(190, 200, 200, 250); // x, y, width, height

   //NOSE
  circle(187, 213, 10)
  line (190, 151, 175, 210);
  line (195, 207, 175, 210);
  

  //GLASSES
  circle(220, 165, 50);
  circle(160, 165, 50);
  line(200, 160, 180, 160)

  //EYES
  ellipse(160, 160, 30, 20);
  ellipse(220, 160, 30, 20);
  circle(160, 160, 20);
  circle(220, 160, 20);

 

  //MOUTH
  ellipse(190, 260, 60, 10);
  ellipse(190, 264, 60, 10);
  ellipse(190, 262, 60, 3);



  //EYEBROWS
   arc(160, 137, 60, 20, 60, 50);
   arc(220, 137, 60, 20, 60, 50);



  //HAIR FRONT

  line(114, 120, 266, 120);
  line(266, 120, 266, 270);
  line(114, 120, 114, 270);

  ellipse(119, 200, 30, 170); // x, y, width, height
  ellipse(119, 180, 25, 130); // x, y, width, height
  ellipse(119, 165, 20, 100); // x, y, width, height

  ellipse(261, 200, 30, 170); // x, y, width, height
  ellipse(261, 180, 25, 130); // x, y, width, height
  ellipse(261, 165, 20, 100); // x, y, width, height

  //TEXT
  textSize(32);
  text('Portrait of Self', 90, 30); // x, y
  text('-Sierra Merrick', 280, 490); // x, y

  //MOUSE COORDS
  // textSize(20);
  // text("X: " + mouseX,10,200 );
  // text("Y: " + mouseY,10,220 );

  //PIERCINGS
  strokeWeight(3);
  point (232,125);
  point (150,125);
  point (232,131);
  point (150,131);
  point (190, 263)
  point(190,270)

}
