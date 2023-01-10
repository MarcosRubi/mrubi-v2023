import { useContext, useState } from "react";
import MainContext from "../context/MainContext";
import Card from "../components/projects/Card";
import { AiOutlineDown } from "react-icons/ai";

function Projects() {
	const { projects } = useContext(MainContext);
	const [activeOption, setActiveOption] = useState("");
	const [projectsToShow, setProjectsToShow] = useState(6)

	const handleOnClick = (e, selected) => {
		if (activeOption === selected) {
			setActiveOption("");
			return;
		}

		e.target.scrollIntoView();

		setActiveOption(selected);
	};

	const removeActiveOption = () => {
		setActiveOption("");
	};

	const updateProjectsToShow = (val) => {
		if((projectsToShow+val) <= 6){
			setProjectsToShow(6)
			return
		}

		if((projects.length + val) <= projectsToShow){
			setProjectsToShow(projectsToShow - 3)
			return
		}
		
		setProjectsToShow(projectsToShow+val)

	}



	return (
		<section className="projects">
			<div className="container" id="proyectos">
				<h2 className="text-center">Proyectos</h2>
				<div className="text-justify-sm">
					<p>
						De los más de 50 proyectos realizados he recopilado los
						que considero más relevantes.
					</p>
					<p>
						Estos proyectos <strong>no</strong> fueron creados
						siguiendo tutoriales ni son descargados de Internet, y
						tampoco son proyectos universitarios.
					</p>
				</div>
				<div className="filters d-flex jc-center align-center p-relative">
					<div className={`filter date d-flex jc-center align-center ${activeOption === "date" ? "active" : ""}`}
						onClick={(e) => { handleOnClick(e, "date") }} >
						<span>Ordenar por</span>
						<AiOutlineDown />
					</div>
					<div className={`filter date d-flex jc-center align-center ${activeOption === "language" ? "active" : ""}`}
						onClick={(e) => { handleOnClick(e, "language"); }} >
						<span>Filtrar por</span>
						<AiOutlineDown />
					</div>
					<div className={`options w-100 p-absolute ${activeOption === "date" ? "show" : ""}`} >
						<div className=" d-flex flex-column">
							<button className="btn btn-secondary" onClick={removeActiveOption} > Más recientes </button>
							<button className="btn btn-secondary" onClick={removeActiveOption} > Más antiguos </button>
						</div>
					</div>
					<div className={`options w-100 p-absolute languages ${activeOption === "language" ? "show" : ""}`}>
						<div className="d-flex flex-column">
							<p>lenguajes:</p>
							<label htmlFor="html" className="d-flex align-center language" >
								<span>HTML & CSS</span>
								<input type="checkbox" name="html" id="html" />
							</label>
							<label htmlFor="js" className="d-flex align-center language" >
								<span>JavaScript</span>
								<input type="checkbox" name="js" id="js" />
							</label>
							<label htmlFor="php" className="d-flex align-center language" >
								<span>PHP</span>
								<input type="checkbox" name="php" id="php" />
							</label>
							<label htmlFor="sql" className="d-flex align-center language" >
								<span>MySQL</span>
								<input type="checkbox" name="sql" id="sql" />
							</label>
						</div>
						<div className="d-flex flex-column">
							<p>herramientas:</p>
							<label htmlFor="prepros" className="d-flex align-center language" >
								<span>Pug/SCSS</span>
								<input type="checkbox" name="prepros" id="prepros" />
							</label>
							<label htmlFor="ajax" className="d-flex align-center language" >
								<span>AJAX</span>
								<input type="checkbox" name="ajax" id="ajax" />
							</label>
							<label htmlFor="react" className="d-flex align-center language" >
								<span>React</span>
								<input type="checkbox" name="react" id="react" />
							</label>
							<label htmlFor="api" className="d-flex align-center language last" >
								<span>API</span>
								<input type="checkbox" name="api" id="api" />
							</label>
						</div>
					</div>
				</div>
				<div className="projects__container">
					{projects.map((project) => (
						project.id > projectsToShow
							? ''
							: <Card project={project} key={project.id} />
					))}
				</div>
				<div className="btn-updates d-flex jc-center flex-wrap">
					<button className={`btn btn-primary show-more ${projectsToShow >= projects.length ? 'hide' : ''}`} onClick={() => { updateProjectsToShow(+3) }}><span>Ver más</span></button>
					<button className={`btn btn-secondary show-less ${projectsToShow <= 6 ? 'hide' : ''}`} onClick={() => { updateProjectsToShow(-3) }}><span>Ver menos</span></button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
