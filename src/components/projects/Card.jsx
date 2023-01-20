import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../context/MainContext'
import Technologies from './Technologies'
import Date from './Date'

function Card ({ project }) {
  const { resetTitle } = useContext(MainContext)
  return (
    <div className='project__card'>
      <Link to={`/proyecto/${resetTitle(project.title)}`} className='project__img d-block'>
        <img src={project.routeImages.preview} alt={`Foto del proyecto ${project.title}`} className='d-flex' />
      </Link>
      <div className='project__content'>
        <Link to={`/proyecto/${resetTitle(project.title)}`}><h3>{project.title}</h3></Link>
        <div className='d-flex align-center jc-between flex-wrap'>
          <Technologies technologies={project.technologies} />
          <Date date={project.endDate} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </div>
  )
}

export default Card
