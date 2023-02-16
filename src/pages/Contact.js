import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Line, IconButton } from "../components";

const Contact = () => {
  return (
	<div className="panel flex-col">
		<span className="text"><br/>You can email me at:</span>
		<h1 className="title my-4">davidfawzy02@gmail.com</h1>

		<Line/>
		<span className="text my-4">Or, you can connect with me through linkedin:</span>
		<Link to="https://www.linkedin.com/in/davidfawzy-/" target="_blank" >
			<IconButton enlarged icon={<AiFillLinkedin/>}/>
		</Link>
	</div>
  )
}
export default Contact;