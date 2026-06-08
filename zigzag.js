function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  zigzag(20, 30, 80, 120,7);
  zigzag(125,220,51,125, 34)
  
}

function zigzag(x, y, l, h,e){
  //stroke(0);
  //rect(x,y,l,h);
  //stroke(255,0,0);
  strokeWeight(e)
  
 line(x,y,x+l,y);
  line( x,y+h/2, x+l,y);
  line(x,y+h/2,x+l, y+h/2);
  line(x,y+h, x+l, y+h/2);
  line(x, y+h, x+l,y+h);
}
