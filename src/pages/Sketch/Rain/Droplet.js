class Droplet {
	constructor(p5) {
		this.pos = p5.createVector();
		this.speed = 0;
		this.height = 0;
		this.width = 0;
		this.reset(p5);
	}
	
	reset(p5) {
		this.height = p5.random(11, 19);
		this.width = p5.map(this.height, 11, 18, 1, 3);
		this.speed = p5.map(this.height, 11, 18, 15, 30);
		this.pos.x = p5.random(this.width, p5.width-this.width);
		this.pos.y = p5.random(-400, 0);
	}
	
	drop(p5) {
		let velocity = p5.createVector(0, this.speed * p5.deltaTime / 100);
		this.pos.add(velocity);
	}
	
	draw(p5) {
		p5.strokeWeight(0);
		p5.rect(this.pos.x, this.pos.y, this.width, this.height);
	}
}

export default Droplet;