// Group Members: [Arshad, Nihal]

let nyan;
let noNyan;
let nyanBg;      // Added 'let'

// Added s in color
let colors = [
  [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  [255, 192, 203], // Added: [255, , 180] -> [255, 192, 203]
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;
let circles = []; // Added missing circles array declaration back!

//Added preload instead of setup
function preload() {
  nyan = loadSound('medias/nyanCat.mp3'); 
  noNyan = loadImage('medias/nyancatless.gif');
}

function setup() {
  createCanvas(400, 400);
  background(noNyan); 
}

function draw() {
  background(noNyan); 
  
  // Draw all circles
  for (let circleObj of circles) { 
    fill(circleObj.colors);         
    ellipse(circleObj.x, circleObj.y, 50, 50); 
  }
}

function mousePressed() {
  let c = random(colors); 
  let newCircle = {
    x: mouseX,
    y: mouseY,
    colors: color(c[0], c[1], c[2]) 
  };
  circles.push(newCircle);
  
  nyan.setVolume(0.5); 
  nyan.rate(playbackRate); 
  nyan.loop();
}

function mouseReleased() {
  if (nyan && nyan.isPlaying()) {
    nyan.stop();
  }
} 

function keyPressed() {
  if (keyCode === UP_ARROW) { 
    playbackRate += 0.1;     
    nyan.rate(playbackRate); 
  } else if (keyCode === DOWN_ARROW) { 
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) { 
    playbackRate = playbackRate * 1; 
    nyan.rate(playbackRate); 
  }
}