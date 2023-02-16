import { useParams } from "react-router-dom";
import Kaleidoscope from "./Kaleidoscope.js";
import Rain from "./Rain/Rain.js"
import InvalidSketch from "./Invalid.js";

const SKETCHES = {
	"kaleidoscope": (<Kaleidoscope/>),
	"rain": (<Rain/>),
	"NOT_FOUND": (<InvalidSketch/>)
}

const Sketch = () => {
	let params = useParams();
	let id = params.id || "NOT_FOUND";

	// If the id is invalid, load the 404 page not found sketch
	if (!SKETCHES[id.toLowerCase()]) id="NOT_FOUND";

	return (
		SKETCHES[id]
	);
}
export default Sketch;