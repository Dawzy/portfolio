import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress, SiGodotengine, SiTailwindcss, SiP5Dotjs } from "react-icons/si";

const icons = {
	"java": (<FaJava/>),
	"c++": (<span className="text-4xl">C++</span>),
	"html": (<FaHtml5/>),
	"css": (<FaCss3Alt/>),
	"javascript": (<SiJavascript/>),
	"tailwind": (<SiTailwindcss/>),
	"mongodb": (<SiMongodb/>),
	"express": (<SiExpress/>),
	"react": (<FaReact/>),
	"node": (<FaNodeJs/>),
	"git": (<FaGitAlt/>),
	"p5": (<SiP5Dotjs/>),
	"godot": (<SiGodotengine/>)
}

export default icons;