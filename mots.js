function setup() {
  createCanvas(400, 400);
  background(220);
  
  //textSize(24);
  //text("hello",24,48);
}

let mots=["alpha","bravo", "charlie","delta", "echo"];
mots[5]="foxtrot";
mots.push("golf");
mots.push("hotel","indigo");

index=0;
function mousePressed(){
  text(mots[index], mouseX, mouseY);
  index++;
  
}

function draw(  ){
  
}