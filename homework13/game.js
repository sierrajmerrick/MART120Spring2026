var myXs = []; 
var myYs = []; 
var myRs = []; 

let x = 50;
let y = 50;
let r = 10;

var myColors = [];
var myShapes = [];

var xSpeeds = [];
var ySpeeds = [];

let xSpeed = Math.random() + 0.2;
let ySpeed = Math.random() + .3;

let px = 30;
let py = 120;
let pr = 30;

var mousex = 0;
var mousey = 0;


function setup(){
        createCanvas(800,600);

        for(var i = 0; i < 11; i++){
            console.log(i);
        }

        for(var i = 0; i < 5; i++)
        {
            myXs[i] = x;
            myYs[i] = y;
            myRs[i] = r;

            myColors[i] = color(random(255), random(255), random(255));

            x += 100;
            y += 80;
            r += 10;
        }

        for(var i = 0; i < 5; i++)
        {
            xSpeeds[i] = xSpeed;
            ySpeeds[i] = ySpeed;
            xSpeed += .6;
            ySpeed += .6;
        }
    }

function draw() {
    background(147, 197, 114);
    createBorder();
    createObstacles();
    moveObstacles();
    createPlayer();
    movePlayer();
    createExit();

    // WIN CONDITION  could not get this to work when the if statement was in the youWin function, so I put it here instead. any advice?
    if (px > 730 && py > 240 && py < 360) {
        youWin();
    }

    
}

function createPlayer() {
    strokeWeight(0);
    fill(50, 18, 122);
    square(px, py, pr*2);
}

function movePlayer() {
    if (keyIsDown(83) && py < height - pr*2) {
    py += 5;
    } else if (keyIsDown(87) && py > 0) {
    py -= 5;
    } else if (keyIsDown(68) && py > 240 && py < 300) {
    px += 5;
    } else if (keyIsDown(65) && px > 0) {
    px -= 5;
    } else if (keyIsDown(68) && px < width - pr*2) {
    px += 5;
    }
}

function createObstacles() {
    for(var i = 0; i < myXs.length; i++)
    {   fill(myColors[i]);
        noStroke();
        ellipse(myXs[i], myYs[i], myRs[i]*2, myRs[i]*2);
    }
}

function moveObstacles() {
    for(var i = 0; i < myXs.length; i++) {
        myXs[i] += xSpeeds[i];
        myYs[i] += ySpeeds[i];
        if (myXs[i] > 775 - myRs[i] || myXs[i] < 25 + myRs[i]) {
            xSpeeds[i] *= -1;
        }
        if (myYs[i] > 575 - myRs[i] || myYs[i] < 25 + myRs[i]) {
            ySpeeds[i] *= -1;
        }  
    }
}

function createBorder() {
    stroke(0);
    strokeWeight(50);
    line(0, 0, 0, 600); // left line
    line(0, 0, 800, 0); // top line
    line(800, 0, 800, 220); // right line top
    line(800, 380, 800, 600); // right line bottom
    line(800, 600, 0, 600); // bottom line
}

function createExit() {
    fill(0, 0, 0);
    strokeWeight(15);
    textSize(30);
    text("EXIT", 730, 315);
}

function youWin() {
    fill(0, 0, 0);
    strokeWeight(70);
    textSize(50);
    text("YOU WIN!", 300, 300);
}

function mouseClicked() {
    if (myXs.length > 0) {
        let lastIndex = xSpeeds.length - 1;
        xSpeeds[lastIndex] = random(-4, 4);
        ySpeeds[lastIndex] = random(-4, 4);
    }
    myXs.push(mouseX);
    myYs.push(mouseY);
    myRs.push(random(10, 50));
    myColors.push(color(random(255), random(255), random(255)));

    xSpeeds.push(0);
    ySpeeds.push(0);
}