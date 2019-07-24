var gridW = 700;
var gridH = 500;
var cols = 4;
var rows = 3;

// =======================

var resX = gridW / cols;
var resY = gridH / rows;

var canvas;

var stars = [];
var idCount = 0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
  background(10, 20, 50);
}

function draw() {

  // Center grid
  translate(width/2 - gridW/2, height/2 - gridH/2);

  // Add Stars
  addStar(1, 1);
  addStar(2, 1);
  addStar(3, 1);
  addStar(4, 1);
  addStar(1, 2);
  addStar(2, 2);
  addStar(3, 2);
  addStar(4, 2);
  addStar(1, 3);
  addStar(2, 3);
  addStar(3, 3);
  addStar(4, 3);

  stars.forEach(star => {
    star.getNeighbours();
    star.connect();
  });

  // drawStars();
  // filter(BLUR, 5);
  drawStars();
  drawConnections();
  drawGrid();
  
}

function drawConnections() {
  stars.forEach(star => {
    star.drawConnections();
  });
}

function addStar(xpos, ypos) {
  star = new Star(xpos-1, ypos-1);
  stars.push(star);
}

function getStarByID(id) {
  let star;
  stars.forEach(s => {
    if (s.id === id) { star = s; }
  });
  return star;
}

function drawStars() {
  stars.forEach(s => {
    s.draw();
  });
}

function drawGrid() {
  noFill();
  stroke(255, 7);
  strokeWeight(1);
  rect(0, 0, gridW, gridH);
  for(let i = 0; i < cols; i++) {
    line(i * resX, 0, i * resX, gridH);
  }
  for(let i = 0; i < rows; i++) {
    line(0, i * resY, gridW, i * resY);
  }
}