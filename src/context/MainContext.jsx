import { createContext, useEffect, useState } from 'react'
import dataCertificates from '../data/certificates.json'
import dataProjects from '../data/projects.json'

export const MainContext = createContext()

export function MainContextProvider (props) {
  const [certificates, setCertificates] = useState([])
  const [projects, setProjects] = useState([])
  const [projectsToShow, setProjectsToShow] = useState(6)
  const [projectImages, setProjectImages] = useState([])
  const [order, setOrder] = useState('new')
  const [languages, setLanguages] = useState([])
  const [arrProjects, setArrProjects] = useState([])
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    setCertificates(dataCertificates)
    setProjects(dataProjects)
    setArrProjects(dataProjects)
  }, [])

  const overflowBody = () => {
    document.querySelector('body').classList.toggle('overflow-hidden')
  }

  const resetTitle = (title) => {
    return title.split(' ').join('-').toLowerCase()
  }

  const scrollToTop = () => {
    document.querySelector('body').scrollIntoView()
  }

  const toggleModalActive = () => {
    setModalActive(!modalActive)
  }

  return (
    <MainContext.Provider
      value={{
        resetTitle,
        overflowBody,
        toggleModalActive,
        scrollToTop,
        certificates,
        projects,
        modalActive,
        order,
        setOrder,
        languages,
        setLanguages,
        projectsToShow,
        setProjectsToShow,
        projectImages,
        setProjectImages,
        arrProjects,
        setArrProjects
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContext
