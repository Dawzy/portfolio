import Sketch from "react-p5";

// const TEXT = "Sketch not found!";

const Invalid = () => {

	const setup = (p5, parentRef) => {
		p5.createCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.85).parent(parentRef);
		p5.stroke(255);
	}
	
	const draw = (p5) => {
		p5.background(51);
	}

	const windowResized = (p5) => {
		p5.resizeCanvas(p5.windowWidth * 0.9, p5.windowHeight * 0.85);
	}

	return (
		<div className="container w-screen h-full">
			<Sketch
				className="self-center"
				setup={setup}
				draw={draw}
				windowResized={windowResized}
			/>
		</div>
	)
}

export default Invalid;