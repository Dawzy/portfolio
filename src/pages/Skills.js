import { Line, Icon } from "../components";
import icons from "../icons.js";

const Skills = () => {
	return (
		<div className="panel flex-col">
			<h1 className="title">Skills</h1>
			<Line/>
			<div className="container gap-2">
				<Icon icon={icons["java"]} text="Java"/>
				<Icon icon={icons["c++"]} text=""/>
				<Icon icon={icons["html"]} text="HTML"/>
				<Icon icon={icons["css"]} text="CSS"/>
				<Icon icon={icons["tailwind"]} text="Tailwind"/>
				<Icon icon={icons["javascript"]} text="Javascript"/>
				<Icon icon={icons["typescript"]} text="Typescript"/>
				<Icon icon={icons["nextjs"]} text="Nextjs"/>
				<Icon icon={icons["react"]} text="React.js"/>
				<Icon icon={icons["node"]} text="Node.js"/>
				<Icon icon={icons["sql"]} text=""/>
				<Icon icon={icons["git"]} text="Git"/>
				{/* <Icon icon={icons["p5"]} text="p5.js"/> */}
				<Icon icon={icons["py"]} text="Python"/>
				<Icon icon={icons["godot"]} text="Godot"/>
			</div>
		</div>
	)
}
export default Skills;