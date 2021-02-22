"use strict";

//This time we just want a line that points in the direction of mouse,
//The line has a length of 200px;

const w = 800;
const h = 800;

let loc;
let mPos;


function setup() {
    createCanvas(w, h);
    background(200);

}

function draw() {
    background(200);
    loc = createVector(w/2,h/2);
    mPos = createVector(mouseX,mouseY);
    mPos.sub(loc)

    mPos.normalize();
    mPos.mult(200)


    line(loc.x, loc.y, mPos.x, mPos.y);

}