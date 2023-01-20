import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../context/MainContext'

function Certificates () {
  const { certificates, resetTitle } = useContext(MainContext)

  return (
    <section className='certificates'>
      <div className='container' id='certificates'>
        <h2 className='text-center'>Certificados</h2>
        <div className='certificates__container align-center'>
          {certificates.map(certificate => {
            if (certificate.id === 1) {
              return (
                <a href='https://www.credly.com/badges/3222fd4b-97b2-4671-822d-7a1311994dde/public_url' className='certificates__item' key={certificate.id} target='_blank' rel='noreferrer'>
                  <img src={certificate.routeImg} alt={`Certificado del curso ${certificate.name} completado por Marcos Rubí`} />
                </a>
              )
            }
            return (
              <Link to={`certificado/${resetTitle(certificate.name)}`} className='certificates__item' key={certificate.id}>
                <img src={certificate.routeImg} alt={`Certificado del curso ${certificate.name} completado por Marcos Rubí`} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certificates
