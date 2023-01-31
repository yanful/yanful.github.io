// https://editor.p5js.org/monniqian/sketches/TwckaaeGl
let img;
function preload() {
  img = loadImage('https://pbs.twimg.com/profile_images/1690974292/naruto_1_400x400.jpg');
}
var notes = [ 60, 62, 64, 65, 67, 69, 71];
var osc;
let autoplay = false;
let index = 0;
let trigger = 0;

let song = [
  { note: 2, duration: 400 },
  { note: 4, duration: 800},
  { note: 4, duration: 400},
  { note: 4, duration: 400},
  { note: 2, duration: 400},
  { note: 4, duration: 400},
  { note: 5, duration: 800},
  { note: 5, duration: 400},
  { note: 2, duration: 800},
  { note: 1, duration: 400},
  { note: 0, duration: 800},
  { note: 0, duration: 400},
  { note: 1, duration: 800},
  { note: 4, duration: 400},
  { note: 2, duration: 2000},
  { note: 2, duration: 400},
  { note: 4, duration: 1200},
  { note: 4, duration: 400},
  { note: 2, duration: 400},
  { note: 4, duration: 400},
  { note: 5, duration: 800},
  { note: 5, duration: 400},
  { note: 2, duration: 800},
  { note: 1, duration: 400},
  { note: 0, duration: 800},
  { note: 0, duration: 400},
  { note: 1, duration: 800},
  { note: 2, duration: 400},
  { note: 1, duration: 1000},
  { note: 0, duration: 1000},
];

function setup() {
  createCanvas(720, 500);
  let button = createButton("Chengdu");
  // Trigger automatically playing
  button.mousePressed(function() {
    if (!autoplay) {
      index = 0;
      autoplay = true;
    }
  });
  

  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {
  
  if (autoplay && millis() > trigger){
    playNote(notes[song[index].note], song[index].duration);
    trigger = millis() + song[index].duration;
    // Move to the next note
    index ++;
  // We're at the end, stop autoplaying.
  } else if (index >= song.length) {
    autoplay = false;
  }
  
  

  // Draw a keyboard

  // The width for each key
  var w = width / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height && mouseY > 200) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(random(256),random(256),random(256));
      // Or just rolling over
      } else {
        fill(240);
      }
    } else {
      fill(200);
    }
    
    if (autoplay && i === song[index-1].note) {
      fill(0, 204, 153);
      image(img,250,0,200,200)
    }


    // Draw the key
    rect(x, 200, w, height-1);
  }

}

// When we click
function mousePressed() {
  // Map mouse to the key index
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}