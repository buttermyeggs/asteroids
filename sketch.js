let ship;
let asteroids = [];
let lasers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	for (let i = 0; i < 5; i++) {
	asteroids.push(new Asteroid());
 }
}

function draw() {
	background(0);

	for(let i = 0; i < asteroids.length; i++) {
		asteroids[i].render();
		asteroids[i].update();
		asteroids[i].edges();
	}

	for(let i = 0; i < lasers.length; i++) {
		lasers[i].render();
		lasers[i].update();
	}

	ship.render();
	ship.turn();
	ship.update();
	ship.edges();

} 

function keyReleased(){
	ship.setRotation(0);
	ship.boosting(false);
}

function keyPressed(){
	if (key == ' '){ 
		 lasers.push(new Laser(ship.pos, ship.heading));
	} else if (keyCode == RIGHT_ARROW) {
		ship.setRotation(0.1);
	} else if (keyCode == LEFT_ARROW) {
		ship.setRotation(-0.1);
	} else if (keyCode == UP_ARROW){
		ship.boosting(true);
		}
}
