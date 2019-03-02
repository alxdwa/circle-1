let strips = []
let r;

function setup() {
	createCanvas(600, 600, SVG);
	angleMode(DEGREES);
	colorMode(RGB);
}

function draw() {
	background(225, 226, 238);
	stroke(45, 29, 251);
	noFill();
	strokeWeight(0.5);
	r = random(150, 300); //sets random radius between 150 and 300 px for circle
	ellipse(width/2, height/2, r, r); //ellipse curve at center of canvas
	translate(width/2, height/2); //translate center of spiral from (0, 0) to center of canvas
	rotate(random(0, 360)); //changes starting angle of spiral to a random value around circle
	
	for (let i = 0; i < floor(random(10, 70)); i++) { //loop generates a random number of strip objects
		strips[i] = new Strip(); //generates new strip and adds to strips array
		rotate(i*2); //rotates each strip relative to the previous to generate spiral
		strips[i].show(); //display strip
	}
	noLoop();
}


class Strip {
	constructor() {
		this.h = 40; //height of rectangles
		this.w = 3; //width of rectangles
		this.c = 15;
		this.y = 0;
		this.xoff = 0;
	}

	show() {
		for (let i = 0; i < floor(random(4, 17)); i++) { //changes Strip length between 4 and 17 rectangles
			push();
			this.y = noise(i)*i*random(10); //add some noise to the y position of each rectangle in strip. more noisy as i increases i.e. the further the rectangle is from starting point 
			translate(i*this.c, this.y); //this.c determines spacing of rectangles according to index
			rect(0, 0, this.w, this.h); //width and height of each rectangle comprising strip is constant
			pop();
		}
	}
}
