import { useContext } from 'react'
import MainContext from '../context/MainContext'
import Card from '../components/projects/Card'
import NavFilters from '../components/projects/NavFilters'
import NotResults from '../components/projects/NotResults'
import { useProjects } from '../components/hooks/useProjects'

function Projects () {
  const { arrProjects, projectsToShow } = useContext(MainContext)
  const { handleOnClickProjectsBtn } = useProjects()
  return (
    <section className='projects'>
      <div className='container' id='projects'>
        <h2 className='text-center'>Proyectos</h2>
        <div>
          <p>
            De los más de 50 proyectos, he seleccionado los más relevantes.
          </p>
          <p>No son realizados con tutoriales, descargas web ni trabajos universitarios.</p>
        </div>
        <NavFilters />
        {
          arrProjects.length === 0 && <NotResults />
        }
        <div className='projects__container'>
          {arrProjects.map((project, index) => {
            return index + 1 <= projectsToShow && <Card project={project} key={index} />
          })}
        </div>
        <div className='flex-wrap btn-updates d-flex jc-center align-center flex-column-sm'>
          <button
            className={`btn btn-primary show-more ${projectsToShow >= arrProjects.length ? 'hide' : ''
              }`}
            onClick={(e) => {
              handleOnClickProjectsBtn(e, +3)
            }}
          >
            <span>Ver más</span>
          </button>
          <button
            className={`btn btn-secondary show-less ${projectsToShow <= 6 ? 'hide' : ''
              }`}
            onClick={(e) => {
              handleOnClickProjectsBtn(e, -3)
            }}
          >
            <span>Ver menos</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
