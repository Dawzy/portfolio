import { ProjectsPreview, Line } from "../components";
import projects from "../projects.json";

const Projects = () => {
	return (
	<>
		{
			Object.keys(projects).map(title => 
			<div className="panel flex-col">
				<h1 className="title">{`${title} [${projects[title].length} project${projects[title].length !== 1 && "s" || ""}]`}</h1>
				<Line/>
				<ProjectsPreview projects={projects[title]}  />
			</div>)
		}
	</>
	)
}
export default Projects;