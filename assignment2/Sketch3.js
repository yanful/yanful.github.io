//thanks for "https://p5js.org/examples/motion-bounce.html"
//thanks for "https://editor.p5js.org/jeremydouglass/sketches/T2ooOe6Nx" 
//Sets the texture function that will be used to render subsequent shapes
//Adding WEBGL inside of createCanvas part, or texture won't working
let img;
function preload() {
  img = loadImage('https://staticg.sportskeeda.com/editor/2020/08/1a2c1-15977865196143-800.jpg');
}
let rad = 100; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 5; // Speed of the shape

let xdirection = 0.5; // Left or Right

function setup() {
  createCanvas(720, 400, WEBGL);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = 0;
  ypos = 0;
  
}

function draw() {
  background(255, 153, 102);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > 250 || xpos < -270) {
    xdirection *= -1;
  }

  // Draw the shape
  texture(img);
  ellipse(xpos, ypos, rad, rad);
}
