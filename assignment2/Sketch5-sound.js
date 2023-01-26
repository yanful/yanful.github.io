let song;

function setup() {
song = loadSound("onepiece.mp3");
createCanvas(800, 500);
background(79, 115, 167);
noStroke();
let c = color(250, 250, 250)
fill(c);

textSize(140);
textFont('New Roman');
text('ONE PIECE', 40, 480);


stroke(4)
fill(239, 154, 73)
arc(400, 175, 190, 170, PI, TWO_PI)
fill("red")
arc(400, 195, 200, 170, PI, TWO_PI)
fill(239, 154, 73)
ellipse(400, 230, 280, 210) //帽框


//face
stroke(1)
strokeWeight(1)
fill(246, 196, 145)
beginShape()
vertex(480, 300)
vertex(480, 160)
vertex(320, 160)
vertex(320, 290)
bezierVertex(370, 365, 435, 365, 480, 290);
endShape()

//eye
noStroke()
stroke(5)
strokeWeight(10)
noFill()
arc(360, 280, 35, 40, PI + QUARTER_PI / 3, TWO_PI - QUARTER_PI / 3)
arc(440, 280, 35, 40, PI + QUARTER_PI / 3, TWO_PI - QUARTER_PI / 3)

//eyebrow
stroke(0, 0, 0)
strokeWeight(4);
line(350, 240, 380, 250)
line(450, 240, 420, 250)

//scar
strokeWeight(2)
noFill()
arc(440, 292, 40, 10, 0, PI)
line(430, 292, 427, 298)
line(450, 292, 457, 298)

//hair
strokeWeight(1)
fill(0)
beginShape()
vertex(320, 300)
vertex(310, 310)
vertex(310, 290)
vertex(290, 290)
vertex(305, 210)
vertex(280, 215)
vertex(310, 170)
vertex(310, 165)
vertex(340, 150)
vertex(300, 120)
vertex(360, 140)
vertex(345, 110)
vertex(380, 130)
vertex(385, 125)
vertex(430, 130)
vertex(425, 100)
vertex(460, 135)
vertex(490, 105)
vertex(480, 145)
vertex(510, 160)
vertex(490, 180)
vertex(520, 250)
vertex(490, 225)
vertex(510, 290)
vertex(490, 270)
vertex(480, 300)
vertex(480, 230)
vertex(470, 210)
vertex(465, 240)
vertex(450, 200)
vertex(453, 234)
vertex(430, 190)
vertex(380, 250)
vertex(360, 180)
vertex(330, 270)
vertex(325, 220)
vertex(320, 230)
vertex(320, 300)
endShape()

//ear
stroke(1)
fill(246, 196, 145)
arc(494, 260, 30, 30, PI, TWO_PI)
arc(479, 260, 60, 60, 0, HALF_PI)
arc(306, 260, 30, 30, PI, TWO_PI)
arc(321, 260, 60, 60, HALF_PI, PI)
noFill();
strokeWeight(1);
beginShape();
vertex(490, 260);
quadraticVertex(500, 250, 490, 280);
endShape();
beginShape();
vertex(310, 260);
quadraticVertex(300, 250, 310, 280);
endShape();

//nose
strokeWeight(2);
noFill()
beginShape();
vertex(400, 275);
bezierVertex(395, 280, 398, 283, 400, 290)
endShape();

//mouse
strokeWeight(1);
fill(255)
beginShape();
vertex(460, 300);
bezierVertex(460, 340, 340, 340, 340, 300);
bezierVertex(380, 305, 420, 305, 460, 300);
endShape();
noFill()
arc(400, 300, 120, 42, 0, PI)
line(420, 310, 422, 323)
line(435, 312, 437, 320)

}

function mousePressed() {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      background(79, 115, 167);
      noStroke();
      let c = color(250, 250, 250)
      fill(c);

      textSize(140);
      textFont('New Roman');
      text('ONE PIECE', 40, 480);


      stroke(4)
      fill(239, 154, 73)
      arc(400, 175, 190, 170, PI, TWO_PI)
      fill("red")
      arc(400, 195, 200, 170, PI, TWO_PI)
      fill(239, 154, 73)
      ellipse(400, 230, 280, 210) //帽框


      //face
      stroke(1)
      strokeWeight(1)
      fill(246, 196, 145)
      beginShape()
      vertex(480, 300)
      vertex(480, 160)
      vertex(320, 160)
      vertex(320, 290)
      bezierVertex(370, 365, 435, 365, 480, 290);
      endShape()

      //eye
      noStroke()
      stroke(5)
      strokeWeight(10)
      noFill()
      arc(360, 280, 35, 40, PI + QUARTER_PI / 3, TWO_PI - QUARTER_PI / 3)
      arc(440, 280, 35, 40, PI + QUARTER_PI / 3, TWO_PI - QUARTER_PI / 3)

      //eyebrow
      stroke(0, 0, 0)
      strokeWeight(4);
      line(350, 240, 380, 250)
      line(450, 240, 420, 250)

      //scar
      strokeWeight(2)
      noFill()
      arc(440, 292, 40, 10, 0, PI)
      line(430, 292, 427, 298)
      line(450, 292, 457, 298)

      //hair
      strokeWeight(1)
      fill(0)
      beginShape()
      vertex(320, 300)
      vertex(310, 310)
      vertex(310, 290)
      vertex(290, 290)
      vertex(305, 210)
      vertex(280, 215)
      vertex(310, 170)
      vertex(310, 165)
      vertex(340, 150)
      vertex(300, 120)
      vertex(360, 140)
      vertex(345, 110)
      vertex(380, 130)
      vertex(385, 125)
      vertex(430, 130)
      vertex(425, 100)
      vertex(460, 135)
      vertex(490, 105)
      vertex(480, 145)
      vertex(510, 160)
      vertex(490, 180)
      vertex(520, 250)
      vertex(490, 225)
      vertex(510, 290)
      vertex(490, 270)
      vertex(480, 300)
      vertex(480, 230)
      vertex(470, 210)
      vertex(465, 240)
      vertex(450, 200)
      vertex(453, 234)
      vertex(430, 190)
      vertex(380, 250)
      vertex(360, 180)
      vertex(330, 270)
      vertex(325, 220)
      vertex(320, 230)
      vertex(320, 300)
      endShape()

      //ear
      stroke(1)
      fill(246, 196, 145)
      arc(494, 260, 30, 30, PI, TWO_PI)
      arc(479, 260, 60, 60, 0, HALF_PI)
      arc(306, 260, 30, 30, PI, TWO_PI)
      arc(321, 260, 60, 60, HALF_PI, PI)
      noFill();
      strokeWeight(1);
      beginShape();
      vertex(490, 260);
      quadraticVertex(500, 250, 490, 280);
      endShape();
      beginShape();
      vertex(310, 260);
      quadraticVertex(300, 250, 310, 280);
      endShape();

      //nose
      strokeWeight(2);
      noFill()
      beginShape();
      vertex(400, 275);
      bezierVertex(395, 280, 398, 283, 400, 290)
      endShape();

      //mouse
      strokeWeight(1);
      fill(255)
      beginShape();
      vertex(460, 300);
      bezierVertex(460, 340, 340, 340, 340, 300);
      bezierVertex(380, 305, 420, 305, 460, 300);
      endShape();
      noFill()
      arc(400, 300, 120, 42, 0, PI)
      line(420, 310, 422, 323)
      line(435, 312, 437, 320)
    } else {
      song.play();
      createCanvas(800, 500);
      background(79, 115, 167);
      noStroke();
      let c = color(250, 250, 250)
      fill(c);

      textSize(140);
      textFont('New Roman');
      text('ONE PIECE', 40, 480);


      stroke(4)
      fill(239, 154, 73)
      arc(400, 175, 190, 170, PI, TWO_PI)
      fill("red")
      arc(400, 195, 200, 170, PI, TWO_PI)
      fill(239, 154, 73)
      ellipse(400, 230, 280, 210) //帽框


      //face
      stroke(1)
      strokeWeight(1)
      fill(246, 196, 145)
      beginShape()
      vertex(480, 300)
      vertex(480, 160)
      vertex(320, 160)
      vertex(320, 290)
      bezierVertex(370, 365, 435, 365, 480, 290);
      endShape()

      //eye
      noStroke()
      fill(255)
      ellipse(360, 270, 50, 40)
      ellipse(440, 270, 50, 40)
      fill(0)
      ellipse(360, 270, 30, 30)
      ellipse(440, 270, 30, 30)
      stroke(0)
      strokeWeight(1)
      noFill()
      arc(360, 270, 50, 40, PI + QUARTER_PI / 3, TWO_PI - QUARTER_PI / 3)
      arc(360, 270, 50, 40, QUARTER_PI, PI - QUARTER_PI)
      arc(440, 270, 50, 40, PI + QUARTER_PI / 3, TWO_PI - QUARTER_PI / 3)
      arc(440, 270, 50, 40, QUARTER_PI, PI - QUARTER_PI)


      //eyebrow
      stroke(0, 0, 0)
      strokeWeight(4);
      line(350, 240, 380, 250)
      line(450, 240, 420, 250)

      //scar
      strokeWeight(2)
      noFill()
      arc(440, 292, 40, 10, 0, PI)
      line(430, 292, 427, 298)
      line(450, 292, 457, 298)

      //hair
      strokeWeight(1)
      fill(0)
      beginShape()
      vertex(320, 300)
      vertex(310, 310)
      vertex(310, 290)
      vertex(290, 290)
      vertex(305, 210)
      vertex(280, 215)
      vertex(310, 170)
      vertex(310, 165)
      vertex(340, 150)
      vertex(300, 120)
      vertex(360, 140)
      vertex(345, 110)
      vertex(380, 130)
      vertex(385, 125)
      vertex(430, 130)
      vertex(425, 100)
      vertex(460, 135)
      vertex(490, 105)
      vertex(480, 145)
      vertex(510, 160)
      vertex(490, 180)
      vertex(520, 250)
      vertex(490, 225)
      vertex(510, 290)
      vertex(490, 270)
      vertex(480, 300)
      vertex(480, 230)
      vertex(470, 210)
      vertex(465, 240)
      vertex(450, 200)
      vertex(453, 234)
      vertex(430, 190)
      vertex(380, 250)
      vertex(360, 180)
      vertex(330, 270)
      vertex(325, 220)
      vertex(320, 230)
      vertex(320, 300)
      endShape()

      //ear
      stroke(1)
      fill(246, 196, 145)
      arc(494, 260, 30, 30, PI, TWO_PI)
      arc(479, 260, 60, 60, 0, HALF_PI)
      arc(306, 260, 30, 30, PI, TWO_PI)
      arc(321, 260, 60, 60, HALF_PI, PI)
      noFill();
      strokeWeight(1);
      beginShape();
      vertex(490, 260);
      quadraticVertex(500, 250, 490, 280);
      endShape();
      beginShape();
      vertex(310, 260);
      quadraticVertex(300, 250, 310, 280);
      endShape();

      //nose
      strokeWeight(2);
      noFill()
      beginShape();
      vertex(400, 275);
      bezierVertex(395, 280, 398, 283, 400, 290)
      endShape();

      //mouse
      strokeWeight(1);
      fill(255)
      beginShape();
      vertex(460, 300);
      bezierVertex(460, 340, 340, 340, 340, 300);
      bezierVertex(380, 305, 420, 305, 460, 300);
      endShape();
      noFill()
      arc(400, 300, 120, 42, 0, PI)
      line(420, 310, 422, 323)
      line(435, 312, 437, 320)
    }
}