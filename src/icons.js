import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiJavascript, SiExpress, SiGodotengine, SiTailwindcss, SiP5Dotjs } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql, BiLogoPython, BiLogoUnity } from "react-icons/bi";

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
	"godot": (<SiGodotengine/>),
  "typescript": (<SiTypescript/>),
  "nextjs": (<SiNextdotjs/>),
  "sql": (<BsFiletypeSql/>),
  "postgres": (<BiLogoPostgresql />),
  "unity": (<BiLogoUnity />),
  "py": (<BiLogoPython />)
}

export default icons;