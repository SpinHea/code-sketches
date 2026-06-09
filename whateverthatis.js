let posX = 1;
let posY= 200;
let size= 70;
let posR= 200;



let vitX= 1.6;
let vitY=1.89;
let vitR=6;





function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  stroke (posR, 135, 468);
  fill(posR, 135, 468);
  
  posR += vitR;
  if(posR>=255 || posR <= 0){
    vitR=vitR *-1;
  }

  
  
  posX += vitX;
  posY += vitY;
  
  if (posX >= width-size || posX <= 0) { 
  vitX = vitX * -1;
  }
  
  if (posY >= height-size || posY <= 0) { 
  vitY = vitY * -1;
  }
  
  
circle(posX, posY, size);
//posX = posX+1;
  //posX +=;
  //posX+= vitX;
  //vitX += 1;
}


function keyPressed(){
  if( key === "s"){
    save("dessin.png");
  }
}