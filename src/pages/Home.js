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
				I am a Computer Science student at Brock University. I have a passion for learning and creating things! Check out my growing projects list!
				<br/><br/>
        They range from game development, to AI, to web development and more! Currently, getting my web development skills up 💪
			</span>
		</div>
		<Skills/>
	</>
  )
}
export default Home;