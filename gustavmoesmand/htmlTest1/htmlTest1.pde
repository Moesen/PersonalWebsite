int counter = 0;

void setup(){
  size(640,360);
}

void draw(){
  background(0);
  
  translate(width/2, height/2);
  ellipse(0,0,counter, counter);
  if(counter < height) counter+=5;
  else counter = 0;
}
