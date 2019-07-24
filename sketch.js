var gridW = 700;
var gridH = 500;
var cols = 4;
var rows = 3;

// =======================

var resX = gridW / cols;
var resY = gridH / rows;

var canvas;

var stars;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
  background(10, 20, 50);

  // Make 2D array for stars
  stars = new Array(cols);
  for (let x = 0; x < stars.length; x++) {
    stars[x] = new Array(rows);
  }
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

  drawStars();
  filter(BLUR, 5);
  drawStars();
  addConnections();
  // drawConnections();
  drawGrid();
  
}

function drawConnections() {
  for (let x = 0; x < stars.length; x++) {
    for (let y = 0; y < stars[x].length; y++) {
      stroke(255, 50);
      strokeWeight(1);
      line(stars[x][y].x, stars[x][y].y, stars[x][y].connect.x, stars[x][y].connect.y, );
    }
  }
}

function addConnections() {
  for (let x = 0; x < stars.length; x++) {
    for (let y = 0; y < stars[x].length; y++) {
      stars[x][y].connect = getConnections(stars[x][y]);
    }
  }
}

function getConnections(star) {
  let neighbours = [];
  for (let x = star.xpos-1; x <= star.xpos+1; x++) {
    if (!stars[x]) {
      continue
    }
    for (let y = star.ypos-1; y <= star.ypos+1; y++) {
      if (!stars[x][y] || stars[x][y] === star || ) {
        continue
      }
      neighbours.push(stars[x][y]);
    }
  }
  console.log(neighbours);
}

function addStar(xpos, ypos) {
  stars[xpos-1][ypos-1] = {};
  stars[xpos-1][ypos-1].xpos = xpos-1;
  stars[xpos-1][ypos-1].ypos = ypos-1;
  stars[xpos-1][ypos-1].x = int(random((xpos-1) * resX, xpos * resX + 1));
  stars[xpos-1][ypos-1].y = int(random((ypos-1) * resY, ypos * resY + 1));
}

function drawStars() {
  noFill();
  stroke(255);
  strokeWeight(3);
  stars.forEach(row => {
    row.forEach(s => {
      point(s.x, s.y);
    });
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