import Sketch from "react-p5";
import { useRef, useState } from "react";
import { Line, Checkbox, ColorPicker, Slider } from "../../components";

// Global constraints
const MAX_BRUSH_SIZE = 32;
const MIN_BRUSH_SIZE = 5;

// Global utils
const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

const rgbToHex = (r, g, b) => {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
  
	if (r.length === 1)
	  r = "0" + r;
	if (g.length === 1)
	  g = "0" + g;
	if (b.length === 1)
	  b = "0" + b;
  
	return `#${r[0]+r[1]}${g[0]+g[1]}${b[0]+b[1]}`;
}

const hexToRGB = (hex) => {
	let r = 0, g = 0, b = 0;

	r = "0x" + hex[1] + hex[2];
	g = "0x" + hex[3] + hex[4];
	b = "0x" + hex[5] + hex[6];

	return [+r, +g, +b];
}


const Kaleidoscope = () => {
	// Settings refs
	const foldCounterRef = useRef();
	const invertButtonRef = useRef();
	const changingBrushColorRef = useRef();
	const changingBrushSizeRef = useRef();
	const brushSizeRef = useRef();
	const bgColorRef = useRef();
	const brushColorRef = useRef();
	
	// Other refs
	const saveLinkRef = useRef();
	
	// Settings state
	const [folds, setFolds] = useState(8);
	const [invert, setInvert] = useState(true);
	const [isChangingColor, setChangingColor] = useState(false);
	const [isChangingSize, setChangingSize] = useState(false);
	const [brushSize, setBrushSize] = useState(3);
	const [bgColor, setBgColor] = useState("#333333");
	const [brushColor, setBrushColor] = useState("#FFFFFF");

	// Canvas state
	const [sketch, setSketch] = useState(null);
	const [withinCanvas, setWithinCanvas] = useState(false);

	// Other state
	const [sizeChangeFactor, setSizeChangeFactor] = useState(1); // 1 or -1
	const [colorChangeFactor, setColorChangeFactor] = useState(1); // 1 or -1

	// Settings change
	const onFoldsChange = () => {
		setFolds(foldCounterRef.current.value);
	}

	const onInvertChange = () => {
		setInvert(invertButtonRef.current.checked);
	}

	const onChangingColor = () => {
		setChangingColor(changingBrushColorRef.current.checked);
	}

	const onChangingSize = () => {
		setChangingSize(changingBrushSizeRef.current.checked);
	}

	const onBrushSize = () => {
		setBrushSize( Math.floor(brushSizeRef.current.value) );
		sketch.strokeWeight(brushSizeRef.current.value);
	}

	const onBgColorChange = () => {
		setBgColor(bgColorRef.current.value);
	}

	const onBrushColorChange = () => {
		setBrushColor(brushColorRef.current.value);
		sketch.stroke(brushColorRef.current.value);
	}

	// Option buttons
	const onSave = () => {
		let href = sketch.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		
		saveLinkRef.current.setAttribute("download", "Painting.png");
		saveLinkRef.current.setAttribute("href", href);
		saveLinkRef.current.click();
	
	}

	const onClear = () => {
		sketch.background(bgColor);
	}

	const onDefault = () => {
		setFolds(8);
		setInvert(true);
	}

	const onPaintMode = () => {
		setFolds(1);
		setInvert(false);
	}

	// Sketch methods
	const setup = (p5, parentRef) => {
		let size = p5.windowHeight * 0.8;
		p5.pixelDensity(1);
		p5.createCanvas(size, size).parent(parentRef);
		p5.background(bgColor);
		setSketch(p5);

		p5.strokeWeight(brushSize);
		p5.stroke(brushColor);
	};

	const draw = (p5) => {
		p5.translate(p5.width/2, p5.height/2);
	};

	const mousePressed = (p5) => {
		setWithinCanvas((p5.mouseX >= 0 && p5.mouseX <= p5.width) &&
						(p5.mouseY >= 0 && p5.mouseY <= p5.height) );
	}

	const mouseDragged = (p5) => {
		if (!withinCanvas) return;

		// Check for changing brush size
		if (isChangingSize) {
			// Clamp new brush size and update
			let newBrushSize = clamp(brushSize + sizeChangeFactor, MIN_BRUSH_SIZE, MAX_BRUSH_SIZE);
			setBrushSize(newBrushSize);

			// Brush size limit reached, flip the sign of the change factor
			if (newBrushSize >= MAX_BRUSH_SIZE || newBrushSize <= MIN_BRUSH_SIZE) {
				setSizeChangeFactor( sizeChangeFactor * -1 );
			}
			
			p5.strokeWeight(newBrushSize);
		}

		// Check for changing brush color
		if (isChangingColor) {
			let rgb = hexToRGB(brushColor);
			rgb[1] += 30 * colorChangeFactor;
			if (rgb[1] > 255 || rgb[1] < 0) {
				rgb[1] = clamp(rgb[1], 0, 255);
				setColorChangeFactor(colorChangeFactor * -1);
			}

			let newHex = rgbToHex(rgb[0], rgb[1], rgb[2]);
			setBrushColor(newHex);
			p5.stroke(newHex);
		}

		p5.push();
		let x1 = p5.pmouseX - p5.width/2;
		let y1 = p5.pmouseY - p5.height/2;
		let x2 = p5.mouseX - p5.width/2;
		let y2 = p5.mouseY - p5.height/2;
		
		for (let i = 0; i < folds; i++) {
			p5.line(x1, y1, x2, y2);
			if (invert) p5.line(y1, x1, y2, x2);
			p5.rotate(p5.TWO_PI/folds);
		}
		p5.pop();
	}

	const windowResized = (p5) => {
		p5.resizeCanvas(p5.windowHeight * 0.8,  p5.windowHeight * 0.8);
		p5.background(bgColor);
	}

	return (
		<div className="container gap-12 w-full flex-wrap">
			<div className="panel relative flex-col w-80 m-0 mt-auto">
				<Line/>
				<span className="text">Folds</span>
				<input className="rounded-xl w-16 h-16 m-1 text-2xl text-center text-black" type="number" value={folds} min="1" max="360" ref={foldCounterRef} onChange={onFoldsChange}/>
				<Line/>
				<div className="container text-center">
					<Checkbox text="Inverted Brush" ref={invertButtonRef} isChecked={invert} onChange={onInvertChange}/>
					<Checkbox text="Changing Color" ref={changingBrushColorRef} isChecked={isChangingColor} onChange={onChangingColor}/>
					<Checkbox text="Changing Size" ref={changingBrushSizeRef} isChecked={isChangingSize} onChange={onChangingSize}/>
				</div>
				<Line/>
				<ColorPicker text="Background Color" value={bgColor} ref={bgColorRef} onChange={onBgColorChange}/>
				<ColorPicker text="Brush Color" value={brushColor} ref={brushColorRef} onChange={onBrushColorChange}/>

				<Line/>
				<Slider
					text="Brush Size"
					value={brushSize}
					min={MIN_BRUSH_SIZE}
					max={MAX_BRUSH_SIZE}
					ref={brushSizeRef}
					onChange={onBrushSize}/>
			</div>
			<div className="container flex-col w-auto">
				<h1 className="title self-center">Kaleidoscope</h1>
				<Sketch
					className="container w-auto"
					setup={setup}
					draw={draw}
					windowResized={windowResized}
					mouseDragged={mouseDragged}
					mousePressed={mousePressed}
				/>
			</div>
			<div className="panel relative flex-col w-80 m-0">
				<button className="btn" onClick={onSave}><a href="/" ref={saveLinkRef}>Save</a></button>
				<button className="btn" onClick={onClear}>Clear</button>
				<Line />
				<button className="btn" onClick={onDefault}>Kaleidoscope</button>
				<button className="btn" onClick={onPaintMode}>Paint</button>
				
			</div>
		</div>
	)
}
export default Kaleidoscope;