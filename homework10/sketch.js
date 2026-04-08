var x = 100;
var y = 100;

let moveX1 = 0;
let moveX2 = 0;
let speedX1 = Math.random() * 2 + 0.5;
let speedX2 = Math.random() * 2 + 0.5;

let moveY1 = 0;
let moveY2 = 0;
let speedY1 = Math.random() * 2 + 1;
let speedY2 = Math.random() * 2 + 1;

let diagX = 0;
let diagY = 0;
let speedDiag = 1.5;

let titleSize = 20;
let sizeCount = 0;
let growing = true;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(220);
  strokeWeight(1);


  if (frameCount % 10 === 0) {
  if (growing) {
    titleSize += 4;
    sizeCount++;
    if (sizeCount >= 5) growing = false;
  } else {
    titleSize -= 4;
    sizeCount--;
    if (sizeCount <= 0) growing = true;
  }
}

  moveX1 += speedX1;
  if (moveX1 > 20 || moveX1 < -20) speedX1 *= -1;
  moveX2 += speedX2;
  if (moveX2 > 15 || moveX2 < -15) speedX2 *= -1;

  moveY1 += speedY1;
  if (moveY1 > 10 || moveY1 < -10) speedY1 *= -1;
  moveY2 += speedY2;
  if (moveY2 > 20 || moveY2 < -20) speedY2 *= -1;

  diagX += speedDiag;
  diagY += speedDiag;
  if (diagX > 30 || diagX < 0) speedDiag *= -1;


  //MOUSE COORDS
  fill (0);
  textSize(20);
  // text("X: " + mouseX,100,200 );
  // text("Y: " + mouseY,100,220 );

  //TEXT
  textSize(32);
  textSize(titleSize);
  textAlign(CENTER);
  text('Portrait of Self', 290, 60); // x, y
  text('-Sierra Merrick', 380, 592); // x, y

  noFill();

  //HAIR BACK LEFT  
  line(300,90,250,85);
  line(250,85,200,100);
  line(200,100,180,120);
  line(180,120,160,160);
  line(160,160,160,190);
  line(160,190,150,210);
  line(150,210,160,240);
  line(160,240,150,300);
  line(150,300,160,320);
  line(160,320,180,330);
  line(180,330,200,330);
  line(200,330,203,333);


  //HAIR BACK RIGHT  
  line(300,90,350,85);
  line(350,85,410,105);
  line(410,105,420,120);
  line(420,120,430,160);
  line(430,160,440,190);
  line(440,190,430,220);
  line(430,220,440,260);
  line(440,260,450,290);
  line(450,290,430,320);
  line(430,320,420,330);
  line(420,330,400,330);
  line(400,330,396,332);

  //BRAIDS
  line(365,330,390,550);
  line(385,359,400,550);

  line(219,395,195,550);
  line(210,360,185,550);

  line(231,323,229,340)



  rect(185,551,10,5);
  rect(390,551,10,5);

  quad(185,556,195,556,200,566,180,566);
  quad(390,556,400,556,405,566,385,566);


  //HEAD
  line(240, 120, 360, 120);
  line(200, 160, 200, 320);

  line(400, 160, 400, 320);
  line(265, 365, 335, 365);

  line(240,120,200,160);
  line(360,120,400,160);

  line(224,315,265,365)
  line(335,365,378,315)

  //line(230,350,265,370)
  //line(335,370,376,342)

  //NOSE
  line(310,270,312,280);
  line(312,280,316,284);
  line(316,284,316,290);
  line(316,290,310,290);

  line(292,270,290,280);
  line(290,280,286,284);
  line(286,284,286,290);
  line(286,290,292,290);

  triangle(292,290,296,288,298,290);
  triangle(310,290,306,288,304,290);

  // circle(301,291,9)
  ellipse(301,292,10,6)

  

  //GLASSES
  circle (260 + diagX, 240 + diagY, 60);
  circle (340 + diagX, 240 + diagY, 60);
  circle (260 + diagX, 240 + diagY, 55);
  circle (340 + diagX, 240 + diagY, 55);

  line(288 + diagX, 230 + diagY, 312 + diagX, 230 + diagY);
  line(288 + diagX, 228 + diagY, 312 + diagX, 228 + diagY);
 

  //EYES


  ellipse(260 + moveX1, 240, 30, 15);
  ellipse(340 + moveX2, 240, 30, 15);
  
  circle(260 + moveX1, 240, 16);
  circle(340 + moveX2, 240, 16);
  circle(260 + moveX1, 240, 8);
  circle(340 + moveX2, 240, 8);
 

  //MOUTH

  line(300,315,310,314);
  line(310,314,325,315);
  line(325,315,335,313);
  line(335,313,325,320);
  line(325,320,310,323);

  line(300,315,290,314);
  line(290,314,280,315);
  line(280,315,270,313);
  line(270,313,280,320);
  line(280,320,295,323);
  line(295,323,310,323);

  line(300,310,290,309);
  line(290,309,270,313);

  line(300,310,315,309);
  line(315,309,335,313);
 



  //EYEBROWS
  line(320,200,355,200);
  line(355,200,370,210);
  line(370,210,355,203);
  line(355,203,322,203);
  line(322,203,320,200);

  line(280,200,245,200);
  line(245,200,230,210);
  line(230,210,245,203);
  line(245,203,278,203);
  line(278,203,280,200);

  
  

  //HAIR FRONT
  //bangs
  line(220,180,250,180);
  line(250,180,255,150);
  line(255,150,260,180);
  line(260,180,290,180);
  line(290,180,300,130);
  line(300,130,310,180);
  line(310,180,380,180);
  //frame left
  line(220,180,225,230);
  line(225,230,220,290);
  line(220,290,230,350);
  line(230,350,220,400);
  line(220,400,200,320);
  //frame right
  line(380,180,375,260);
  line(375,260,380,290);
  line(380,290,375,360);
  line(375,360,370,400);
  line(370,400,400,320);


  //PIERCINGS

  strokeWeight(3);


  point(350, 198 + moveY1);
  point(350, 205 + moveY1);
  point(250, 198 + moveY2);
  point(250, 205 + moveY2);

  point(302,314);
  point(302,325);


  

}
