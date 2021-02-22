"use strict";

//This how you used to code a bouncing ball
//Now rewrite this sketch so it uses vectors.

const w = 800;
const h = 800;


let loc,acc; 

function setup() {
    createCanvas(w, h);
    background(200);
    loc = createVector(w/2, h/2);
    acc = createVector(5,3);
}

function draw() {
    background(200);

    //Update
    edges();
loc.x +=acc.x;
loc.y +=acc.y;

    //Draw
    stroke(0);
    fill(175);
    circle(loc.x,loc.y,50);
}

function edges() {
    if ((loc.x > w) || (loc.x < 0)) {
        acc.x = acc.x * -1;
      }
      if ((loc.y > h) || (loc.y < 0)) {
        acc.y = acc.y * -1;
      }
    
}