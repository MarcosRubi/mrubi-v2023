import { useContext } from 'react'
import MainContext from '../../context/MainContext'

export function useCertificates () {
  const { certificates, resetTitle } = useContext(MainContext)

  const findCertificateByName = (name) => {
    return certificates.filter(
      (certificate) => resetTitle(certificate.name) === name
    )
  }
  return { findCertificateByName }
}
