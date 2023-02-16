import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

import {
	Home,
	Projects,
	Contact,
	Skills,
	Sketch
} from "./pages";

const App = () => {
  return (
	  <>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/skills" element={<Skills/>} />
			<Route path="/projects" element={<Projects/>} />
			<Route path="/contact" element={<Contact/>} />
			<Route path="/sketches/" element={<Sketch/>} />
			<Route path="/sketches/:id" element={<Sketch/>} />
		</Routes>
	</>
  );
}

export default App;
