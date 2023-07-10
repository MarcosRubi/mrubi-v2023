import { useRef } from 'react'
import { useObserver } from '../components/hooks/useObserver'

function AboutMe () {
  const elementRef = useRef()
  const { show } = useObserver(elementRef)
  return (
    <section ref={elementRef} className={`${show} about-me p-relative`}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='w-100 d-flex h-auto fill-link p-absolute-lg top-0 opacity-25-lg'><path fillOpacity='.75' d='M0,128L6.2,149.3C12.3,171,25,213,37,234.7C49.2,256,62,256,74,229.3C86.2,203,98,149,111,122.7C123.1,96,135,96,148,101.3C160,107,172,117,185,122.7C196.9,128,209,128,222,128C233.8,128,246,128,258,106.7C270.8,85,283,43,295,48C307.7,53,320,107,332,112C344.6,117,357,75,369,74.7C381.5,75,394,117,406,122.7C418.5,128,431,96,443,122.7C455.4,149,468,235,480,234.7C492.3,235,505,149,517,149.3C529.2,149,542,235,554,261.3C566.2,288,578,256,591,256C603.1,256,615,288,628,277.3C640,267,652,213,665,208C676.9,203,689,245,702,245.3C713.8,245,726,203,738,160C750.8,117,763,75,775,69.3C787.7,64,800,96,812,112C824.6,128,837,128,849,154.7C861.5,181,874,235,886,266.7C898.5,299,911,309,923,272C935.4,235,948,149,960,117.3C972.3,85,985,107,997,138.7C1009.2,171,1022,213,1034,192C1046.2,171,1058,85,1071,80C1083.1,75,1095,149,1108,165.3C1120,181,1132,139,1145,144C1156.9,149,1169,203,1182,224C1193.8,245,1206,235,1218,229.3C1230.8,224,1243,224,1255,240C1267.7,256,1280,288,1292,282.7C1304.6,277,1317,235,1329,202.7C1341.5,171,1354,149,1366,138.7C1378.5,128,1391,128,1403,117.3C1415.4,107,1428,85,1434,74.7L1440,64L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z' /></svg>
      <div className='container' id='about-me'>
        <h2 className='text-center'>Sobre Mí</h2>
        <div className='d-flex align-center flex-column flex-row-lg'>
          <div className='about-me__content'>
            <h3>Marcos Daniel Rubí Hernández</h3>
            <p>Tengo experiencia en desarrollo web, especialmente en HTML, CSS, JavaScript, React y POO (Programación Orientada a Objetos). Desde febrero, trabajo en Sortos Travel Multiservices, donde he sido responsable de crear su sitio web en WordPress, gestionar sus redes sociales y desarrollar un sistema CRM utilizando PHP. La tecnología es mi pasión y siempre estoy en busca de oportunidades para aprender y experimentar con nuevas herramientas. Me entusiasma la posibilidad de aplicar mis habilidades y conocimientos en futuros proyectos, y contribuir al éxito de las empresas a través del desarrollo web.</p>
          </div>
          <div className='about-me__img'>
            <img src='/images/profile.webp' alt='Foto de perfil de Marcos Rubí' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
