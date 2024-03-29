import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3, TbBrandBootstrap, TbBrandJavascript, TbBrandPhp } from 'react-icons/tb'
import { FaSass, FaReact } from 'react-icons/fa'
import { FiGithub, FiDownload } from 'react-icons/fi'
import { SiMysql } from 'react-icons/si'
import { useRef } from 'react'
import { useObserver } from '../components/hooks/useObserver'

function Banner () {
  const elementRef = useRef()
  const { show } = useObserver(elementRef)
  return (
    <section ref={elementRef} className={`${show} banner p-relative text-center`}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='w-100 d-flex h-auto fill-link p-absolute-lg top-0 opacity-25-lg'><path fillOpacity='.75' d='M0,288L6.2,293.3C12.3,299,25,309,37,272C49.2,235,62,149,74,106.7C86.2,64,98,64,111,90.7C123.1,117,135,171,148,186.7C160,203,172,181,185,181.3C196.9,181,209,203,222,192C233.8,181,246,139,258,144C270.8,149,283,203,295,218.7C307.7,235,320,213,332,186.7C344.6,160,357,128,369,133.3C381.5,139,394,181,406,176C418.5,171,431,117,443,101.3C455.4,85,468,107,480,133.3C492.3,160,505,192,517,181.3C529.2,171,542,117,554,90.7C566.2,64,578,64,591,80C603.1,96,615,128,628,149.3C640,171,652,181,665,186.7C676.9,192,689,192,702,165.3C713.8,139,726,85,738,64C750.8,43,763,53,775,74.7C787.7,96,800,128,812,133.3C824.6,139,837,117,849,117.3C861.5,117,874,139,886,149.3C898.5,160,911,160,923,149.3C935.4,139,948,117,960,122.7C972.3,128,985,160,997,144C1009.2,128,1022,64,1034,69.3C1046.2,75,1058,149,1071,192C1083.1,235,1095,245,1108,229.3C1120,213,1132,171,1145,176C1156.9,181,1169,235,1182,224C1193.8,213,1206,139,1218,133.3C1230.8,128,1243,192,1255,234.7C1267.7,277,1280,299,1292,304C1304.6,309,1317,299,1329,288C1341.5,277,1354,267,1366,234.7C1378.5,203,1391,149,1403,138.7C1415.4,128,1428,160,1434,176L1440,192L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z' /></svg>

      <div className='d-flex align-center flex-column jc-center container'>
        <div className='banner__about-me'>
          <h1>Hola, soy <span>Marcos Rubí</span></h1>
          <p>Técnico en sistemas y redes, actualmente estoy cursando último año de ingeniería en sistemas y redes.</p>
          <a href='/documents/CV-Marcos-Rubi.pdf' download='CV - Marcos Rubí' className='btn btn-primary'>
            <span>Descargar CV</span>
            <FiDownload />
          </a>
        </div>
        <div className='banner__skills'>
          <h2>Habilidades</h2>
          <div className='skill-container d-flex align-center jc-center'>
            <div className='d-flex flex-column-sm'>
              <div className='skill p-relative'>
                <AiOutlineHtml5 />
                <span className='tooltip p-absolute'>HTML5</span>
              </div>
            </div>
            <div className='d-flex flex-column-sm'>
              <div className='skill p-relative'>
                <TbBrandCss3 />
                <span className='tooltip p-absolute'>CSS3</span>
              </div>
              <div className='skill p-relative'>
                <FaSass />
                <span className='tooltip p-absolute'>SASS</span>
              </div>
              <div className='skill p-relative'>
                <TbBrandBootstrap />
                <span className='tooltip p-absolute'>Bootstrap</span>
              </div>
            </div>
            <div className='d-flex flex-column-sm'>
              <div className='skill p-relative'>
                <TbBrandJavascript />
                <span className='tooltip p-absolute'>JavaScript</span>
              </div>
              <div className='skill p-relative'>
                <FaReact />
                <span className='tooltip p-absolute'>React.js</span>
              </div>
            </div>
            <div className='d-flex flex-column-sm'>
              <div className='skill p-relative'>
                <FiGithub />
                <span className='tooltip p-absolute'>Git</span>
              </div>
            </div>
            <div className='d-flex flex-column-sm'>
              <div className='skill p-relative'>
                <TbBrandPhp />
                <span className='tooltip p-absolute'>PHP</span>
              </div>
              <div className='skill p-relative'>
                <SiMysql />
                <span className='tooltip p-absolute'>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='w-100 d-flex h-auto fill-link p-absolute-lg bottom-0 opacity-25-lg'><path fillOpacity='.75' d='M0,96L6.2,133.3C12.3,171,25,245,37,266.7C49.2,288,62,256,74,224C86.2,192,98,160,111,133.3C123.1,107,135,85,148,112C160,139,172,213,185,250.7C196.9,288,209,288,222,266.7C233.8,245,246,203,258,160C270.8,117,283,75,295,74.7C307.7,75,320,117,332,138.7C344.6,160,357,160,369,176C381.5,192,394,224,406,224C418.5,224,431,192,443,154.7C455.4,117,468,75,480,80C492.3,85,505,139,517,144C529.2,149,542,107,554,96C566.2,85,578,107,591,117.3C603.1,128,615,128,628,117.3C640,107,652,85,665,90.7C676.9,96,689,128,702,138.7C713.8,149,726,139,738,149.3C750.8,160,763,192,775,213.3C787.7,235,800,245,812,250.7C824.6,256,837,256,849,250.7C861.5,245,874,235,886,218.7C898.5,203,911,181,923,186.7C935.4,192,948,224,960,208C972.3,192,985,128,997,117.3C1009.2,107,1022,149,1034,160C1046.2,171,1058,149,1071,133.3C1083.1,117,1095,107,1108,106.7C1120,107,1132,117,1145,112C1156.9,107,1169,85,1182,80C1193.8,75,1206,85,1218,117.3C1230.8,149,1243,203,1255,234.7C1267.7,267,1280,277,1292,272C1304.6,267,1317,245,1329,224C1341.5,203,1354,181,1366,181.3C1378.5,181,1391,203,1403,208C1415.4,213,1428,203,1434,197.3L1440,192L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z' /></svg>
    </section>
  )
}

export default Banner
