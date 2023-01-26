import { createContext, useEffect, useState } from 'react'
import dataCertificates from '../data/certificates.json'
import dataProjects from '../data/projects.json'

export const MainContext = createContext()

export function MainContextProvider (props) {
  const [certificates, setCertificates] = useState([])
  const [projects, setProjects] = useState([])
  const [projectsToShow, setProjectsToShow] = useState(6)
  const [projectImages, setProjectImages] = useState([])
  const [order, setOrder] = useState('default')
  const [languages, setLanguages] = useState([])
  const [arrProjects, setArrProjects] = useState([])
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    setCertificates(dataCertificates)
    setProjects(dataProjects)
    setArrProjects(dataProjects)
  }, [])

  useEffect(() => {
    document.querySelector('body').classList.toggle('overflow-hidden')
  }, [modalActive])

  // Devolvemos el proyecto que coincida con la búsqueda
  const findProjectByTitle = (title) => {
    return projects.filter((project) => resetTitle(project.title) === title)
  }

  const toggleModalActive = () => {
    setModalActive(!modalActive)
  }

  const findCertificateByName = (name) => {
    return certificates.filter(
      (certificate) => resetTitle(certificate.name) === name
    )
  }

  // Sustituimos espacios en blanco por un guión y todo el título sea en minúsculas
  const resetTitle = (title) => {
    return title.split(' ').join('-').toLowerCase()
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

  const scrollToTop = () => {
    document.querySelector('body').scrollIntoView()
  }

  const updateProjectImages = (images) => {
    setProjectImages(images)
  }

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
    <MainContext.Provider
      value={{
        certificates,
        findProjectByTitle,
        projectsToShow,
        updateProjectsToShow,
        resetTitle,
        findCertificateByName,
        scrollToTop,
        projectImages,
        updateProjectImages,
        handleOnClickProjectsBtn,
        changeOrder,
        filterLanguages,
        filterProjects,
        order,
        arrProjects,
        languages,
        toggleModalActive,
        modalActive
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContext
