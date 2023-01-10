import { Link } from 'react-router-dom'

function Card({ project }) {
	return (
		<div className='project__card'>
			<Link to={`/proyecto/${project.title.split(' ').join('-').toLowerCase()}`} className="project__img d-block">
				<img src={project.routeImages.preview} alt={`Foto del proyecto ${project.title.toLowerCase()}`} className="d-flex" />
			</Link>
			<div className="project__content">
				<Link to={`/proyecto/${project.title.split(' ').join('-').toLowerCase()}`}><h3>{project.title}</h3></Link>
				<div className="d-flex align-center jc-between flex-wrap">
					<div className="technologies d-flex align-center flex-wrap">
						{project.technologies.map((technology, index) => <span key={index}>{technology}</span>)}
					</div>
					<div className="date">
						{project.endDate}
					</div>
				</div>
				<p>{project.description}</p>
			</div>
		</div>
	)
}

export default Card