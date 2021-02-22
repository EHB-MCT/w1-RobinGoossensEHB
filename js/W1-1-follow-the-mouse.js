"use strict";

//Draw a line which follow your mouse pointer from the center of the screen
//Check https://p5js.org/reference/ on how to access mouse data

const w = 800;
const h = 800;

let loc;


function setup() {
    createCanvas(w, h);
    background(200);
    loc = createVector(w/2,h/2);

}

function draw() {
    background(200);

    line(loc.x, loc.y, mouseX, mouseY);

    
}