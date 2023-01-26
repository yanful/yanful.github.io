let img;
let theta = 0;

function setup() {
  createCanvas(1000, 400, WEBGL);

  img = loadImage('https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg');
}

function draw() {

  let x1 = 320;
  let y1 = 200;
  let x2 = mouseX;
  let y2 = mouseY;

  // d is the length of the line
  // the distance from point 1 to point 2.
  let d = dist(x1, y1, x2, y2);
  console.log(d);

  background(250);
  translate(-150, 0, 0);
  if (d < 250) {
    push();
    rotateX(-theta * mouseY * 0.001);
    rotateY(theta * mouseX * 0.001);
    //pass image as texture
    texture(img);
    sphere(150);
    pop();
    theta += 0.01;
  } else {
    push();
    //pass image as texture
    texture(img);
    sphere(150);
    pop();
    theta += 0.01;
  }
  
  
  

}