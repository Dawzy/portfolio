class Splash {
	constructor(x, y, r, angle, speed) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.initAngle = angle;
		this.angle = angle;
		this.speed = speed;
		this.angleDir = angle / Math.abs(angle);

		// Position of droplets relative to origin (x, y)
		this.offsetX = 0;
		this.offsetY = 0;

	}

	update(p5) {
		// Move the splash effect on the circular path by incrementing the angle
		this.offsetX = this.r * Math.cos(p5.radians(this.angle)) * this.angleDir + this.r * this.angleDir;
		this.offsetY = this.r * Math.sin(p5.radians(this.angle)) * this.angleDir;

		this.angle += this.speed * p5.deltaTime / 1000;
	}

	draw(p5) {
		// Draw droplets as little points
		p5.strokeWeight(5);
		p5.point(this.x + this.offsetX, this.y + this.offsetY);
	}

	isDone() {
		return ( Math.abs(this.initAngle - this.angle) >= 200 );
	}
}

export default Splash;