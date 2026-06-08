let n = 17;

function setup() {
  createCanvas(400, 400);
  background(220);

  for (let i = 0; i < n; i++) {
    noStroke();
    fill(250, (width / n) * i, 0);
    rect((width / n) * i, 0, width / n, height);
    
  }
  
}

function draw() {}
