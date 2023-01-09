import React from 'react'

function Card({project}) {
	return (
		<div className='project__card'>
			<div className="project__img">
				<img src={project.routeImages.preview} alt={`Foto del proyecto ${project.title.toLowerCase()}`} />
			</div>
			<div className="project__content">
				<h3>{project.title}</h3>
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