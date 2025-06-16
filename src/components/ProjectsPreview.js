import { Link } from "react-router-dom";
import icons from "../icons.js";

const ProjectsPreview = ({projects}) => {

	return (
	<div className="container bg-transparent h-auto w-full flex-wrap relative">
		{projects.map(project => (
			<Link to={project.url} target="_blank" rel="noreferrer">
				{/*
					Tailwind does not support true dynamic class names
					So inline css must be used instead.
				*/}
				<div className="project-card group" style={{backgroundImage: `url(./images/${project.thumbnail})`}}>
					<span className="project-card-title group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:bg-opacity-0">
            {project.name}
          </span>
					<div className="project-card-overlay group-hover:opacity-80"/>
					<span className="project-card-desc group-hover:opacity-100">
            {project.desc}
            <div className="container gap-x-4 absolute w-full h-auto bottom-0 text-5xl pb-2 px-3">
              {project.tools.map(tool => icons[tool])}
            </div>
					</span>
				</div>
			</Link>
		))}
	</div>
	)
}
export default ProjectsPreview;