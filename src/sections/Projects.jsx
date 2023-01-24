import { useContext, useState, useEffect } from 'react'
import MainContext from '../context/MainContext'
import Card from '../components/projects/Card'
import NavFilters from '../components/projects/NavFilters'

function Projects () {
  const { projects, projectsToShow, updateProjectsToShow } =
    useContext(MainContext)
  const [order, setOrder] = useState('default')
  const [languages, setLanguages] = useState([])
  const [arrProjects, setArrProjects] = useState([])

  useEffect(() => {
    setArrProjects(projects)
  }, [projects])

  const handleOnClickProjectsBtn = (e, val) => {
    updateProjectsToShow(val)

    e.target.classList.contains('show-more')
      ? e.target.scrollIntoView(true)
      : setTimeout(() => {
        e.target.scrollIntoView(false)
      }, 10)
  }

  const changeOrder = (newOrder, arr = arrProjects) => {
    setOrder(newOrder)

    if (newOrder === 'old') {
      setArrProjects(
        arr.sort((x, y) => {
          return x.endDate[2] - y.endDate[2]
        })
      )
      return
    }
    if (newOrder === 'new') {
      setArrProjects(
        arr.sort((x, y) => {
          return y.endDate[2] - x.endDate[2]
        })
      )
      return
    }
    setArrProjects(arr.sort((x, y) => x.id - y.id))
  }

  const filterLanguages = (lang) => {
    updateProjectsToShow(6)
    if (languages.includes(lang)) {
      const newLanguages = languages.filter((language) => language !== lang)
      setLanguages(newLanguages)
      filterProjects(newLanguages)
      return
    }

    const newLanguages = [...languages, lang]
    setLanguages(newLanguages)
    filterProjects(newLanguages)
  }

  const filterProjects = (languagesFilter) => {
    if (languagesFilter.length === 0) {
      setArrProjects(projects)
      changeOrder(order, projects)
      return
    }

    const filteredProjects = projects.filter((project) =>
      languagesFilter.every((lang) => project.technologies.includes(lang))
    )
    setArrProjects(filteredProjects)
  }

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
          languages={languages}
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
