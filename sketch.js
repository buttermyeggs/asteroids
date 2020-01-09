function setup() {
  createCanvas(500, 500);
   frameRate(10);
  
}

function draw() {
  background(225);
	strokeWeight(5);
	//hovde
	ellipse(250, 50, 100, 100);
    //højre øje
    ellipse(230, 40, 10, 10);
    //vestre øje
    ellipse(270, 40, 10, 10);
    //mund
    line(270, 75, 230, 75)
	//krop
	line(250, 100, 250, 300);

	//venstre arm
	line(250, 150, 150, 50);
	//højre arm
	line(250, 150, 350, 250);
	//ben
	line(250, 300, 350, 400);
	line(250, 300, 150, 400);
 
}