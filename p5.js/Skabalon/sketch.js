
var i = 0;
function setup() {
  createCanvas(400,400);
}

function draw() {

  background(0);
  
  for(i = 0; i < 400; i+=5){
  	for(j = i; j < 400; j+=5){
  		stroke(255/400 * j);
  		point(j,i);
  	}
  }
  
}