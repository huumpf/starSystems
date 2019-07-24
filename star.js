class Star {

  constructor(xpos, ypos) {
    this.id = idCount;
    idCount++;
    this.xpos = xpos;
    this.ypos = ypos;
    this.x = int(random(xpos * resX, (xpos+1) * resX + 1));
    this.y = int(random(ypos * resY, (ypos+1) * resY + 1));
    this.neighbours = [];
    this.connections = [];
  }

  draw() {
    noFill();
    stroke(255);
    strokeWeight(3);
    point(this.x, this.y);
  }

  getNeighbours() {
    stars.forEach(star => {
      if (star.xpos === this.xpos) {
        if (star.ypos === this.ypos-1 || star.ypos === this.ypos+1) {
          this.neighbours.push(star.id); }}
      if (star.ypos === this.ypos) {
        if (star.xpos === this.xpos-1 || star.xpos === this.xpos+1) {
          this.neighbours.push(star.id); }}
    });
  }

  connect(c = 0) {
    if (c > 100) {
      return;
    }
    let conIndex = int(random(0, this.neighbours.length));
    let conID = this.neighbours[conIndex];
    let conStar = getStarByID(conID);
    if (conStar.connections.find(connection => connection === this.id)) {
      c++;
      this.connect(c);
    } else {
      this.connections.push(conStar.id);
    }
  }

  drawConnections() {
    strokeWeight(1);
    stroke(255, 30);
    this.connections.forEach(c => {
      let s = getStarByID(c);
      line(this.x, this.y, s.x, s.y);
    });
  }

}