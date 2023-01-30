import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../context/MainContext'

function Logo () {
  const { scrollToTop } = useContext(MainContext)
  return (
    <Link to='/' onClick={scrollToTop} className='logo'>
      <img src='/logo.svg' alt='Logo de Marcos Rubí' />
    </Link>
  )
}

export default Logo
