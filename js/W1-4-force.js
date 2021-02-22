"use strict";

//Let's continue with our Bouncing Ball
//Introduce 2 forces: wind and gravity
//Wind is only applied when the mouse is pressed

//Introduce mass
//To check if it works, create 2 instances of your Ball class with different masses.

const w = 800;
const h = 800;
let ball;
let ball2;


function setup() {
    createCanvas(w, h);
    background(200);
    ball = new Ball(w/2,h/2,2);
    ball2 = new Ball(w/2+4,h/2+4,6);
}

function draw() {
    background(200);
    //Update

    if (mouseIsPressed){
    let wind = createVector(-0.1,0.2);
    ball.applyForce(wind);
    let wind2 = createVector(0.1,0);
    ball2.applyForce(wind2);
}


    let gravity = createVector(0,0.2);
    let weight1 = p5.Vector.mult(gravity, ball.mass);
    let weight2 = p5.Vector.mult(gravity, ball2.mass);
    ball.applyForce(weight1);
    ball2.applyForce(weight2);


    
    //Draw
    ball.update();
    ball2.update();
    ball.edges();
    ball2.edges();
    ball.show();
    ball2.show();

}


