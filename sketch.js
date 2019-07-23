var gridW = 700;
var gridH = 400;
var cols = 4;
var rows = 3;

// =======================

var resX = gridW / cols;
var resY = gridH / rows;

var canvas;

var stars = [];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
  background(220);
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

  // drawGrid();
  drawStars();

}

function addStar(xpos, ypos) {
  let star = {};
  star.xpos = xpos;
  star.ypos = ypos;
  star.x = int(random((xpos-1) * resX, xpos * resX + 1));
  star.y = int(random((ypos-1) * resY, ypos * resY + 1));
  stars.push(star);
}

function drawStars() {
  noFill();
  stroke(40);
  strokeWeight(3);
  stars.forEach(s => {
    point(s.x, s.y);
  });
}

function drawGrid() {
  noFill();
  stroke(200);
  strokeWeight(1);
  rect(0, 0, gridW, gridH);
  for(let i = 0; i < cols; i++) {
    line(i * resX, 0, i * resX, gridH);
  }
  for(let i = 0; i < rows; i++) {
    line(0, i * resY, gridW, i * resY);
  }
}