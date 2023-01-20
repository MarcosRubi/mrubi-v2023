import Banner from '../sections/Banner'
import AboutMe from '../sections/AboutMe'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Certificates from '../sections/Certificates'
import Timeline from '../sections/Timeline'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home () {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })
  return (
    <>
      <Banner />
      <AboutMe />
      <Projects />
      <Experience />
      <Certificates />
      {width >= 768 && <Timeline />}
      <Outlet />
    </>
  )
}

export default Home
