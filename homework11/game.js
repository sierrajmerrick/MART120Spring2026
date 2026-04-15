let x = 50;
let y = 50;
let r = 10;

let x2 = 100;
let y2 = 50;
let r2 = 20;

let x3 = 530;
let y3 = 320;
let r3 = 30;

let x4 = 30;
let y4 = 120;
let r4 = 30;

let xSpeed = Math.random() * 4 + 0.5;
let ySpeed = Math.random() * 4 + 1;

let x2Speed = Math.random() * 8 + 2;
let y2Speed = Math.random() * 8 + 1;

let x3Speed = Math.random() * 2 + 3;
let y3Speed = Math.random() * 2 + 3;


function setup(){
        createCanvas(800,600);
    }

function draw() {
    background(147, 197, 114);
    strokeWeight(50);

    //BORDER
    line(0, 0, 0, 600); // left line
    line(0, 0, 800, 0); // top line
    line(800, 0, 800, 220); // right line top
    line(800, 380, 800, 600); // right line bottom
    line(800, 600, 0, 600); // bottom line

    strokeWeight(15);
    textSize(30);
    text("EXIT", 730, 315);

    // OBSTACLE 1
    fill(0, 0, 0);
    ellipse(x, y, r*2, r*2);
    x += xSpeed;
    y += ySpeed;

    if (x > width - r || x < r) {
        xSpeed = -xSpeed;
    }
    if (y > height - r || y < r) {
        ySpeed = -ySpeed;
    }   

    // OBSTACLE 2
    fill(0, 0, 0);
    ellipse(x2, y2, r2*2, r2*2);
    x2 += x2Speed;
    y2 += y2Speed;

    if (x2 > width - r2 || x2 < r2) {
        x2Speed = -x2Speed;
    }
    if (y2 > height - r2 || y2 < r2) {
        y2Speed = -y2Speed;
    }

    // OBSTACLE 3
    fill(0, 0, 0);
    ellipse(x3, y3, r3*2, r3*2);
    x3 += x3Speed;
    y3 += y3Speed;

    if (x3 > width - r3 || x3 < r3) {
        x3Speed = -x3Speed;
    }
    if (y3 > height - r3 || y3 < r3) {
        y3Speed = -y3Speed;
    }

    strokeWeight(0);
    // PLAYER
    fill(50, 18, 122);
    square(x4, y4, r4*2);

    if (keyIsDown(83) && y4 < height - r4*2) {
    y4 += 5;
    } else if (keyIsDown(87) && y4 > 0) {
    y4 -= 5;
    } else if (keyIsDown(68) && y4 > 240 && y4 < 300) {
    x4 += 5;
    } else if (keyIsDown(65) && x4 > 0) {
    x4 -= 5;
    } else if (keyIsDown(68) && x4 < width - r4*2) {
    x4 += 5;
    }

    fill(0, 0, 0);
    strokeWeight(15);
    textSize(30);
    text("EXIT", 730, 315);
}
