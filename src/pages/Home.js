import { Skills } from "../pages";
import { Line } from "../components";

const Home = () => {
  return (
	<>
		<div className="panel flex-col">
			<h1 className="title">About Me</h1>
			<Line/>
			<span className="text text-center">
        Hello, I'm David!<br/><br/>
        I am a Computer Science graduate from Brock University. I'm passionate about building and learning, with hands-on experience in full-stack web development. Check out my growing list of projects and skills!</span>
		</div>
		<Skills/>
	</>
  )
}
export default Home;