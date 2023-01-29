import { FiGithub } from 'react-icons/fi'
import { SiFrontendmentor } from 'react-icons/si'
import { AiOutlineCodepen } from 'react-icons/ai'

function Repositories () {
  return (
    <div className='repositories'>
      <h4>Repositorios</h4>
      <div className='repositories__item d-flex align-center'>
        <div className='icon'>
          <SiFrontendmentor />
        </div>
        <div>
          <p>Frontend Mentor</p>
          <a href='https://www.frontendmentor.io/profile/MarcosRubi' target='_blank' rel='noreferrer'>Visitar</a>
        </div>
      </div>

      <div className='repositories__item d-flex align-center'>
        <div className='icon'>
          <FiGithub />
        </div>
        <div>
          <p>GitHub</p>
          <a href='https://github.com/MarcosRubi' target='_blank' rel='noreferrer'>Visitar</a>
        </div>
      </div>

      <div className='repositories__item d-flex align-center'>
        <div className='icon'>
          <AiOutlineCodepen />
        </div>
        <div>
          <p>Codepen</p>
          <a href='https://codepen.io/Marcos_Rubi' target='_blank' rel='noreferrer'>Visitar</a>
        </div>
      </div>
    </div>
  )
}

export default Repositories
