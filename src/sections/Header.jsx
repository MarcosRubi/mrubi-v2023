/* eslint-disable no-undef */
import Logo from '../components/header/Logo'
import Nav from '../components/header/Nav'
import ToggleTheme from '../components/header/ToggleTheme'
import SettingTheme from '../components/header/SettingTheme'
import { useEffect, useState, useContext } from 'react'

import MainContext from '../context/MainContext'

function Header () {
  let timeout
  const [showMenu, setShowMenu] = useState(false)
  const [sticky, setSticky] = useState('')
  const { overflowBody } = useContext(MainContext)

  useEffect(() => {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    const userPrefersDark = matches

    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'default')
    }
    if (localStorage.getItem('isDark') === null && userPrefersDark) {
      localStorage.setItem('isDark', 'dark')
    }
    if (localStorage.getItem('isDark') === null) {
      localStorage.setItem('isDark', 'light')
    }

    changeTheme()
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    overflowBody()
  }

  const toggleDark = () => {
    const newValue = localStorage.getItem('isDark') === 'dark' ? 'light' : 'dark'
    localStorage.setItem('isDark', newValue)
    changeTheme()
  }
  const changeTheme = (theme = localStorage.getItem('theme')) => {
    localStorage.setItem('theme', theme)

    document.documentElement.setAttribute(
      'data-theme',
      `${theme}-${localStorage.getItem('isDark')}`
    )
  }

  if (window.innerWidth < 768) {
    window.addEventListener('scroll', () => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(function () {
        window.scrollY > 0 ? setSticky('sticky') : setSticky('')
      }, 100)
    })
  }

  return (
    <>
      <header className={`menu p-fixed w-100 ${showMenu ? 'show-menu' : ''} ${sticky}`}>
        <div className='container d-flex align-center jc-between flex-column-md'>
          <Logo />
          <Nav toggleMenu={toggleMenu} />
          <ToggleTheme toggleDark={toggleDark} />
          <SettingTheme changeTheme={changeTheme} />
        </div>
      </header>
    </>
  )
}

export default Header
