import { Link } from 'react-router-dom'
import { SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'

function Nav ({ toggleMenu }) {
  const handleOnClick = (element) => {
    toggleMenu()

    const section = document.getElementById(element)
    if (element) { section.scrollIntoView() }
  }

  return (
    <>
      <div className='menu__hamburguer d-flex align-center'>
        <div className='d-flex flex-column w-100' onClick={toggleMenu}>
          <span className='line w-100' />
          <span className='line w-100' />
          <span className='line w-100' />
        </div>
      </div>
      <div className='menu__content p-fixed d-flex flex-column jc-between'>
        <div className='menu__header container d-flex align-center jc-between'>
          <div className='logo d-flex align-center'>
            <img
              className='d-flex'
              src='https://marcosrubi.github.io/_mrubi-v2023/public/images/logo.webp'
              alt='Logo de Marcos Rubí'
            />
            <span>Marcos Rubí</span>
          </div>
          <div className='menu__close d-flex flex-column jc-center' onClick={toggleMenu}>
            <span className='line w-100' />
            <span className='line w-100' />
          </div>
        </div>
        <nav className='container'>
          <ul className='d-flex align-center flex-column-sm text-center'>
            <li className='w-100'><Link className='w-100 d-inline-block' onClick={() => handleOnClick('about-me')}>Sobre Mí</Link></li>
            <li className='w-100'><Link className='w-100 d-inline-block' onClick={() => handleOnClick('projects')}>Proyectos</Link></li>
            <li className='w-100'><Link className='w-100 d-inline-block' onClick={() => handleOnClick('experience')}>Experiencia</Link></li>
            <li className='w-100'><Link className='w-100 d-inline-block' onClick={() => handleOnClick('certificates')}>Certificados</Link></li>
            <li className='w-100'><Link className='w-100 d-inline-block' onClick={() => handleOnClick('timeline')}>Mi Proceso</Link></li>
            <li className='w-100'><Link className='w-100 d-inline-block' onClick={() => handleOnClick('contact')}>Contactar</Link></li>
          </ul>
        </nav>
        <div className='menu__footer'>
          <div className='container d-flex align-center jc-between'>
            <a href='mailto:danielhernandez9980%40gmail.com' className='btn btn-secondary' onClick={toggleMenu}><span>Enviar Correo </span></a>
            <ul className='d-flex align-center social-list'>
              <li>
                <a href='#'><SlSocialLinkedin /></a>
              </li>
              <li>
                <a href='#'><SlSocialInstagram /></a>
              </li>
              <li>
                <a href='#'><SlSocialFacebook /></a>
              </li>
              <li>
                <a href='#'><SlSocialTwitter /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
