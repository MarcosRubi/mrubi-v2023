import { createContext, useEffect, useState } from 'react'
import dataCertificates from '../data/certificates.json'
import dataProjects from '../data/projects.json'

export const MainContext = createContext()

export function MainContextProvider (props) {
  const [certificates, setCertificates] = useState([])
  const [projects, setProjects] = useState([])
  const [projectsToShow, setProjectsToShow] = useState(6)

  useEffect(() => {
    setCertificates(dataCertificates)
    setProjects(dataProjects)
  }, [])

  // Devolvemos el proyecto que coincida con la búsqueda
  const findProjectByTitle = (title) => {
    return projects.filter((project) => resetTitle(project.title) === title)
  }

  const findCertificateByName = (name) => {
    return certificates.filter((certificate) => resetTitle(certificate.name) === name)
  }

  // Sustituimos espacios en blanco por un guión y todo el título sea en minúsculas
  const resetTitle = (title) => {
    return title.split(' ').join('-').toLowerCase()
  }

  const updateProjectsToShow = (val) => {
    if ((projectsToShow + val) <= 6) {
      setProjectsToShow(6)
      return
    }

    if ((projects.length + val) <= projectsToShow) {
      setProjectsToShow(projectsToShow - 3)
      return
    }

    setProjectsToShow(projectsToShow + val)
  }

  return (
    <MainContext.Provider
      value={{ certificates, projects, findProjectByTitle, projectsToShow, updateProjectsToShow, resetTitle, findCertificateByName }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContext
