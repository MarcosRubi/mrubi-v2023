import { useContext, useState } from "react";
import MainContext from "../context/MainContext";
import Card from '../components/projects/Card'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function Projects() {
	const { projects } = useContext(MainContext)
	const [activeOption, setActiveOption] = useState("")

	const handleOnClick = (selected) => {
		if (activeOption === selected) {
			setActiveOption('')
			return
		}
		setActiveOption(selected)
	};
	const removeActiveOption = () => {
		setActiveOption("");
	}


	return <section className="projects">
		<div className="container" id="proyectos">
			<h2 className="text-center">Proyectos</h2>
			<div className="text-justify-sm">
				<p>De los más de 50 proyectos realizados he recopilado los que considero más relevantes.</p>
				<p>Estos proyectos <strong>no</strong> fueron creados siguiendo tutoriales ni son descargados de Internet, y tampoco son proyectos universitarios.</p>
			</div>
			<div className="filters d-flex jc-center align-center p-relative">
				<div className={`filter date d-flex jc-center align-center ${activeOption === 'date' ? 'active' : ''}`} onClick={() => { handleOnClick('date') }}>
					<span>Ordenar por</span>
					<AiOutlineDown />
				</div>
				<div className={`filter date d-flex jc-center align-center ${activeOption === 'language' ? 'active' : ''}`} onClick={() => { handleOnClick('language') }}>
					<span>Filtrar por</span>
					<AiOutlineDown />
				</div>
				<div className={`options w-100 p-absolute ${activeOption === 'date' ? 'show' : ''}`}>
					<div className=" d-flex flex-column" >
						<button className="btn btn-secondary" onClick={removeActiveOption}>Más recientes</button>
						<button className="btn btn-secondary" onClick={removeActiveOption}>Más antiguos</button>
					</div>
				</div>
				<div className={`options w-100 p-absolute languages ${activeOption === 'language' ? 'show' : ''}`}>
					<div className="d-flex flex-column" >
						<p>Por lenguajes:</p>
						<label htmlFor="html" className="d-flex align-center language">
							<span>HTML & CSS</span>
							<input type="checkbox" name="txtHtml" id="html" />
						</label>
						<label htmlFor="js" className="d-flex align-center language">
							<span>JavaScript</span>
							<input type="checkbox" name="txtHtml" id="js" />
						</label>
						<label htmlFor="php" className="d-flex align-center language">
							<span>PHP</span>
							<input type="checkbox" name="txtHtml" id="php" />
						</label>
						<label htmlFor="sql" className="d-flex align-center language">
							<span>MySQL</span>
							<input type="checkbox" name="txtHtml" id="sql" />
						</label>
					</div>
					<div className="d-flex flex-column" >
						<p>Por herramientas:</p>
						<label htmlFor="prepros" className="d-flex align-center language">
							<span>Pug/SCSS</span>
							<input type="checkbox" name="txtHtml" id="prepros" />
						</label>
						<label htmlFor="ajax" className="d-flex align-center language">
							<span>AJAX</span>
							<input type="checkbox" name="txtHtml" id="ajax" />
						</label>
						<label htmlFor="react" className="d-flex align-center language">
							<span>React</span>
							<input type="checkbox" name="txtHtml" id="react" />
						</label>
						<label htmlFor="api" className="d-flex align-center language last">
							<span>API</span>
							<input type="checkbox" name="txtHtml" id="api" />
						</label>
					</div>
				</div>
			</div>
			<div className="projects__container">
				{projects.map(project => <Card project={project} key={project.id} />)}
			</div>
		</div>
	</section>;
}

export default Projects;
