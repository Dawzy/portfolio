import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

import {
	Home,
	Projects,
	Contact,
	Skills,
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
		</Routes>
	</>
  );
}

export default App;
