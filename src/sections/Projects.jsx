import { useContext } from "react";
import MainContext from "../context/MainContext";
import Card from '../components/projects/Card'

function Projects() {
	const { projects } = useContext(MainContext)
	return <section className="projects">
		<div className="container" id="proyectos">
			<h2 className="text-center">Proyectos</h2>
			<div className="text-justify-sm">
				<p>De los más de 50 proyectos realizados he recopilado los que considero más relevantes.</p>
				<p>Estos proyectos <strong>no</strong> fueron creados siguiendo tutoriales ni son descargados de Internet, y tampoco son proyectos universitarios.</p>
			</div>
			<div className="filters">Filtros</div>
			<div className="projects__container">
				{projects.map(project => <Card project={project} key={project.id} />)}
			</div>
		</div>
	</section>;
}

export default Projects;
