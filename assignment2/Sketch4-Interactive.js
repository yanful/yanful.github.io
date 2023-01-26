let img;
let theta = 0;

function setup() {
  createCanvas(1000, 400, WEBGL);

  img = loadImage('https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg');
}

function draw() {
  background(250);
  translate(-150, 0, 0);
  push();
  rotateX(theta * mouseY * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(img);
  sphere(150);
  pop();
  theta += 0.01;
}