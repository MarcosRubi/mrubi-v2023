import { Link } from 'react-router-dom'

function Logo () {
  const handleOnClick = () => {
    document.querySelector('body').scrollIntoView()
  }
  return (
    <Link to='/' onClick={handleOnClick} className='logo'>
      <img src='https://marcosrubi.github.io/_mrubi-v2023/public/images/logo.webp' alt='Logo de Marcos Rubí' />
    </Link>
  )
}

export default Logo
