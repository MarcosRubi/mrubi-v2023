import { useContext } from 'react'
import MainContext from '../../context/MainContext'

export function useProjects () {
  const {
    projects,
    resetTitle,
    order,
    setOrder,
    arrProjects,
    setArrProjects,
    projectsToShow,
    setProjectsToShow,
    languages,
    setLanguages,
    setProjectImages
  } = useContext(MainContext)

  // Devolvemos el proyecto que coincida con la búsqueda
  const findProjectByTitle = (title) => {
    return projects.filter((project) => resetTitle(project.title) === title)
  }

  const changeOrder = (newOrder, arr = arrProjects) => {
    if (newOrder === order) {
      return
    }
    setArrProjects(arr.reverse())
    setOrder(newOrder)
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

  const handleOnClickProjectsBtn = (e, val) => {
    updateProjectsToShow(val)

    e.target.classList.contains('show-more')
      ? e.target.scrollIntoView(true)
      : setTimeout(() => {
        e.target.scrollIntoView(false)
      }, 10)
  }

  const updateProjectsToShow = (val) => {
    if (val === 6) {
      setProjectsToShow(6)
      return
    }
    if (projectsToShow + val <= 6) {
      setProjectsToShow(6)
      return
    }
    if (projects.length + val <= projectsToShow) {
      setProjectsToShow(projectsToShow - 3)
      return
    }

    setProjectsToShow(projectsToShow + val)
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

  const updateProjectImages = (images) => {
    setProjectImages(images)
  }

  return {
    findProjectByTitle,
    changeOrder,
    filterLanguages,
    filterProjects,
    updateProjectsToShow,
    handleOnClickProjectsBtn,
    updateProjectImages
  }
}
