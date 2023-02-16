import Sketch from "react-p5";
import Droplet from "./Droplet.js";
import Splash from "./Splash.js";
import { useState } from "react";

const Rain = () => {
	const NUM_OF_DROPS = 300;
	const BACKGROUND_COLOR = [255, 200, 225];
	const DROPLET_COLOR = [153, 50, 153];

	const [droplets, setDroplets] = useState([]);
	const [splashes, setSplashes] = useState([]);

	const addSplashEffect = (p5, drop) => {
		// Get number of splashes (random 2, 4)
		let splashCount = p5.random(2, 5);
		let angleDir = 1; // 1: right, -1: left

		// Parameters
		let a;			// angle
		let r;			// radius
		let s;			// splash/angle speed

		for (let i = 0; i < splashCount; i++) {
			// Set the radius and speed of the splash depending on how long the rain drop is
			// This makes closer raindrops (bigger) hit the ground harder (bigger radius and speed)
			// and vice versa for the further raindrops (smaller)
			r = p5.map(drop.height, 11, 18, 10, 20) + (4 - p5.random(9));
			s = p5.map(drop.height, 11, 18, 450, 550) * angleDir + (50 - p5.random(101));
			a = 180 * angleDir;
			angleDir *= -1; // flip splash direction for next one

			// Add splash to vector
			setSplashes( (prev) => [...prev, new Splash(drop.pos.x, p5.height-1, r, a, s)]);
		}
	}

	const setup = (p5, parentRef) => {
		p5.pixelDensity(1);
		p5.createCanvas(p5.windowWidth * 0.9,  p5.windowHeight * 0.8).parent(parentRef);
		let temp = [];
		for (let i = 0; i < NUM_OF_DROPS; i++) {
			temp.push(new Droplet(p5));
		}

		setDroplets(temp);

		p5.fill(...DROPLET_COLOR);
		p5.stroke(...DROPLET_COLOR);
	};

	const draw = (p5) => {
		p5.background(...BACKGROUND_COLOR);

		for (let i = 0; i < droplets.length; i++) {
			let drop = droplets[i];
			drop.drop(p5);
			drop.draw(p5);
	
			if (drop.pos.y > p5.height) {
				addSplashEffect(p5, drop);
				drop.reset(p5);

			}
		}

		for (let i = splashes.length - 1; i >= 0; i--) {
			splashes[i].update(p5);
			splashes[i].draw(p5);

			if (splashes[i].isDone()) {
				setSplashes( (prev) => {
					prev.splice(i, 1);
					return prev;
				});
			}
		}
	};

	const windowResized = (p5) => {
		p5.resizeCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.8);
	}

	return (
		<>
			<h1 className="title">Rain</h1>
			<Sketch
				setup={setup}
				draw={draw}
				windowResized={windowResized}
			/>
		</>
	)
}
export default Rain;