import { useContext } from 'react'
import { Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import Technologies from '../components/projects/Technologies'
import MainContext from '../context/MainContext'
import Date from '../components/projects/Date'

function Project () {
  const navigate = useNavigate()
  const { title } = useParams()
  const { findProjectByTitle, scrollToTop, updateProjectImages } = useContext(MainContext)
  const project = findProjectByTitle(title)

  scrollToTop()

  if (project.length === 0) { return }

  return (
    <section className='projects'>
      <div className='container'>
        <div className='back'>
          <button className='btn btn-secondary' onClick={() => { navigate(-1) }}><span>Ir a proyectos</span> </button>
        </div>
        <div className='project view'>
          <Link to='imagenes' className='img d-flex jc-center-sm' onClick={() => { updateProjectImages(project[0].routeImages) }}>
            <img src={`../public/${project[0].routeImages.preview}`} alt='Imagen del proyecto' className='d-flex' />
          </Link>
          <h3>{project[0].title}</h3>
          <div className='technologies'>
            <h4>Tecnología empleada</h4>
            <Technologies technologies={project[0].technologies} />
          </div>
          <div className='buttons'>
            <h4>Enlaces</h4>
            <div className='d-flex flex-wrap'>
              <a href={project[0].urlDemo} target='_blank' className='btn btn-primary' rel='noreferrer'><span>Ver Demo</span></a>
              <a href={project[0].urlRepo} target='_blank' className='btn btn-secondary' rel='noreferrer'><span>Ver Código</span></a>
            </div>
          </div>
          <div className='dates'>
            <h4>Tiempo de desarrollo</h4>
            <div className='d-flex align-center flex-wrao'>
              <span>Inicio:</span>
              <Date date={project[0].startDate} />
            </div>
            <div className='d-flex align-center flex-wrap'>
              <span>Completado:</span>
              <Date date={project[0].endDate} />
            </div>
          </div>
          <div className='description'>
            <h4>Descripción del proyecto</h4>
            <p dangerouslySetInnerHTML={{ __html: project[0].description }} />
          </div>
          {project[0].learning !== '' &&
            <div className='learning'>
              <h4>Aprendizaje obtenido</h4>
              <p dangerouslySetInnerHTML={{ __html: project[0].learning }} className='text-justify' />
            </div>}
          {project[0].difficulties !== '' &&
            <div className='difficulties'>
              <h4>Dificultades en el desarrollo</h4>
              <p dangerouslySetInnerHTML={{ __html: project[0].difficulties }} className='text-justify' />
            </div>}
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default Project
