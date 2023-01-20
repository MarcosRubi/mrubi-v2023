import { useContext } from 'react'
import { Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import MainContext from '../context/MainContext'

function Project () {
  const navigate = useNavigate()
  const { title } = useParams()
  const { findProjectByTitle } = useContext(MainContext)

  const project = findProjectByTitle(title)

  return (
    <section>
      <div className='container'>
        <button onClick={() => { navigate(-1) }}>Ir a proyectos</button>
        <div>Datos del proyecto {title}</div>
        <Link to='imagenes'>Ver imagenes</Link>
        <Outlet />
      </div>
    </section>
  )
}

export default Project
