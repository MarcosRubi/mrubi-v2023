import { useContext } from 'react'
import MainContext from '../context/MainContext'
import Card from '../components/projects/Card'
import NavFilters from '../components/projects/NavFilters'

function Projects () {
  const { order, projectsToShow, changeOrder, filterLanguages, arrProjects, handleOnClickProjectsBtn } =
    useContext(MainContext)

  return (
    <section className='projects'>
      <div className='container' id='projects'>
        <h2 className='text-center'>Proyectos</h2>
        <div className='text-justify-sm'>
          <p>
            De los más de 50 proyectos realizados he recopilado los que
            considero más relevantes.
          </p>
          <p>
            Estos proyectos <strong>no</strong> fueron creados siguiendo
            tutoriales ni son descargados de Internet, y tampoco son proyectos
            universitarios.
          </p>
        </div>
        <NavFilters
          changeOrder={changeOrder}
          order={order}
          filterLanguages={filterLanguages}
        />
        <div className='projects__container'>
          {arrProjects.map((project, index) => {
            return (
              index + 1 <= projectsToShow && (
                <Card project={project} key={index} />
              )
            )
          })}
        </div>
        <div className='btn-updates d-flex jc-center flex-wrap align-center flex-column-sm'>
          <button
            className={`btn btn-primary show-more ${
              projectsToShow >= arrProjects.length && 'hide'
            }`}
            onClick={(e) => {
              handleOnClickProjectsBtn(e, +3)
            }}
          >
            <span>Ver más</span>
          </button>
          <button
            className={`btn btn-secondary show-less ${
              projectsToShow <= 6 && 'hide'
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
