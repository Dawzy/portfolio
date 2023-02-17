import Skills from "./Skills.js";
import { Line } from "../components";

const Home = () => {
  return (
	<>
		<div className="panel flex-col">
			<h1 className="title">About Me</h1>
			<Line/>
			<span className="text">
				Hello, I am David!<br/><br/>
				I am a 3rd-year Computer Science student at Brock University. I started programming when I was 12 for fun. So naturally,
				I am now looking to turn my hobby into a career in software engineering.
				<br/><br/>
				I love learning new things, so I worked a little with all kinds of
				technologies across different fields.
				<br/><br/>
				These fields include but are not limited to computer graphics/art, game development,
				web design, AI, etc. Take a look at my project list! I am always working on expanding it.
			</span>
		</div>
		<Skills/>
	</>
  )
}
export default Home;