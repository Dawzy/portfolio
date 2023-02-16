import { useState, useRef } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";

const Navbar = () => {
	const navButtons = [useRef(), useRef(), useRef()];
	const [navButtonsState, setNavButtonsState] = useState([false, false, false]);

	const handleClick = (e) => {
		let newState = [false, false, false];

		// Set the state of the selected button
		let i = navButtons.findIndex(obj => obj.current == e.target);
		if (i !== -1) newState[i] = true;
		setNavButtonsState(newState);
	}

	return (
	<div className="sticky w-full bg-primary border-style h-16 nav-flex z-10 mx-auto">
		<div className="h-full nav-flex w-full px-4 bg-transparent">
			<Link to="/">
				<button className="nav-button hover:underline title">
					David Fawzy
				</button>
			</Link>
			
			<div className="absolute left-1/2 -translate-x-1/2 flex flex-wrap justify-around content-around items-center w-1/2 h-auto mt-1">
				<Link to="/skills"> 
					<button
						className={`nav-button hover:underline ${navButtonsState[0] ? "underline" : "no-underline"}`}
						ref={navButtons[0]}
						onClick={handleClick}
						
					>Skills</button>
				</Link>
				<Link to="/projects">
					<button
						className={`nav-button hover:underline ${navButtonsState[1] ? "underline" : "no-underline"}`}
						ref={navButtons[1]}
						onClick={handleClick}
						
					>Projects</button>
				</Link>
				<Link to="/contact">
					<button
						className={`nav-button hover:underline ${navButtonsState[2] ? "underline" : "no-underline"}`}
						ref={navButtons[2]}
						onClick={handleClick}
						
					>Contact</button>
				</Link>
			</div>

			<div className="container bg-transparent p-0 m-0 w-auto">
				<Link to="/">
					<IconButton icon={<AiFillHome/>}/>
				</Link>
				<Link to="https://github.com/Dawzy" target="_blank" rel="noreferrer">
					<IconButton icon={<AiFillGithub/>}/>
				</Link>
				<Link to="https://www.linkedin.com/in/davidfawzy-/" target="_blank" >
					<IconButton icon={<AiFillLinkedin/>}/>
				</Link>
				<Link to="https://leetcode.com/Dawzy/" target="_blank" rel="noreferrer">
					<IconButton icon={<SiLeetcode/>}/>
				</Link>
			</div>
		</div>
	</div>
	)
}
export default Navbar;