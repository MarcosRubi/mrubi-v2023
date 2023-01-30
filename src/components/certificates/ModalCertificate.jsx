import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MainContext from '../../context/MainContext'
import { AiOutlineClose } from 'react-icons/ai'
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import { useCertificates } from '../hooks/useCertificates'

function ModalCertificate () {
  const { name } = useParams()
  const [certificateActive, setCertificateActive] = useState([])
  const { certificates, resetTitle } = useContext(MainContext)
  const { findCertificateByName } = useCertificates()

  useEffect(() => {
    setCertificateActive(findCertificateByName(name))
  }, [])

  useEffect(() => {
    certificateActive.length > 0 &&
    // eslint-disable-next-line no-undef
      history.pushState({}, '', resetTitle(certificateActive[0].name))
  }, [certificateActive])

  const showNewCertificate = (id) => {
    if (id <= 1) {
      setCertificateActive([certificates[certificates.length - 1]])
      return
    }
    if (id > certificates.length) {
      setCertificateActive([certificates[1]])
      return
    }

    setCertificateActive([certificates[id - 1]])
  }

  if (certificateActive.length === 0) {
    return
  }

  return (
    <div className='modal p-fixed d-flex flex-column'>
      <div className='d-flex jc-end'>
        <Link to='/' className='btn btn-controls'>
          <AiOutlineClose />
        </Link>
      </div>
      <div className='modal__img p-relative d-flex jc-center'>
        <img
          src={`../${certificateActive[0].routeImg}`}
          alt={`Certificado del curso ${certificateActive[0].name} completado por Marcos Rubí`}
        />
      </div>
      <div className='d-flex jc-between mb-2 buttons'>
        <button
          className='btn btn-controls'
          onClick={() => showNewCertificate(certificateActive[0].id - 1)}
        >
          <GrCaretPrevious />
        </button>
        <button
          className='btn btn-controls'
          onClick={() => showNewCertificate(certificateActive[0].id + 1)}
        >
          <GrCaretNext />
        </button>
      </div>
    </div>
  )
}

export default ModalCertificate
