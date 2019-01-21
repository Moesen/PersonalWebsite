/* Other stuff */

var img;
function preLoad(){
	img = loadImpage("/assets/");

}

function setup() {
  createCanvas(800, 400);

  noLoop();
}

function draw() {
	fill(0);
	rect(0,0,400,400);

  	console.log(img == null);
}

function mousePressed(){

}


