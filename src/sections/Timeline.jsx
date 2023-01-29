/* eslint-disable import/no-absolute-path */
import { Link } from 'react-router-dom'

import inicioCarrera2017 from '/images/timeline/inicio-de-la-carrera-2017.webp'
import finCarrera2018 from '/images/timeline/fin-de-la-carrera-2018.webp'
import cursosMaquetacionWeb from '/images/timeline/cursos-en-linea-maquetacion-web.webp'
import sindromeDelImpostor from '/images/timeline/sindrome-del-impostor.webp'
import inicioIngSistemas from '/images/timeline/inicio-ing-sistemas-2020.webp'
import menuResponsive from '/images/timeline/primer-menu-responsive.webp'
import codepen2021 from '/images/timeline/codepen-2021.webp'

import pintelogImg from '/images/projects/preview/pintelog-preview.webp'
import frontentReactApis from '/images/timeline/frontend-react-apis.webp'
import actualidad from '/images/timeline/actualidad.webp'
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import { useState, useEffect } from 'react'

function Timeline () {
  const [sectionToShow, setSectionToShow] = useState(1)
  const [sections, setSections] = useState()

  useEffect(() => {
    setSections(document.querySelectorAll('.timeline .section'))
  }, [])

  const handleOnClick = (position) => {
    window.screen.width <= 1024 && document.querySelector('.timeline').scrollIntoView()
    if ((sectionToShow + position) <= 1) {
      setSectionToShow(1)
      return
    }
    if ((sectionToShow + position) >= sections.length) {
      setSectionToShow(sections.length)
      return
    }
    setSectionToShow(sectionToShow + position)
  }
  return (
    <section className='timeline' id='timeline'>
      <div className='container p-relative'>
        <h2 className='text-center'>Mi proceso</h2>
        <div className='timeline__container'>
          <div className={`section ${sectionToShow === 1 ? 'show' : ''}`}>
            <div className='timeline__element'>
              <div className='content'>
                <h5 className='text-center'>
                  <span>2017</span> <br />
                  Inicio de la carrera: Técnico en sistemas y redes.
                </h5>
                <p>
                  En el primer año descubrí mi pasión por el desarrollo web en
                  la asignatura de <span>diseño de páginas web</span>.
                </p>
                <p>
                  También en este año, creé mi primer "sitio web", una radio la
                  cual no es responsive.
                </p>
              </div>
              <div className='img'>
                <img src={inicioCarrera2017} alt='Diseño de la radio creada en 2017 en la asignatura de diseños de páginas web' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mb-1'>
                <img src={finCarrera2018} alt='Imagen de la página de inicio de la red social pintelog' />
              </div>
              <div className='content'>
                <h5 className='text-center'>
                  <span>2018</span>
                  <br />
                  Fin de la carrera: Técnico en sistemas y redes.
                </h5>
                <p>
                  En este año aprendí a usar <span>AJAX</span>, <span>PHP</span>{' '}
                  con programación orientada a objetos (POO) y los conceptos
                  básicos de <span>MySQL</span>.
                </p>
                <p>
                  Estos conocimientos me ayudaron a crear la red social{' '}
                  <Link to='/proyecto/pintelog'>Pintelog</Link> en el año 2022.
                </p>
              </div>
            </div>
          </div>
          <div className={`section ${sectionToShow === 2 ? 'show' : ''}`}>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Enero ~ Octubre del 2019</span>
                  <br /> Cursos en línea enfocados a maquetación web.
                </h5>
                <p>
                  Continué mi aprendizaje de manera audodidacta con cursos
                  gratuitos de <span>HTML</span> y <span>CSS</span> de internet,
                  incluyendo el uso de pre-procesadores como <span>Pug</span> y{' '}
                  <span>SCSS</span>.
                </p>
                <p>
                  Además, comence a usar <span>GitHub</span> y realize mi{' '}
                  <a href='https://codepen.io/Marcos_Rubi/pen/YMVOoR' target='_blank' rel='noreferrer'>primer menú responsive</a>.
                </p>
              </div>
              <div className='img'>
                <img src={menuResponsive} alt='Diseño del primer menú responsive que realicé' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mb-1'>
                <img src={sindromeDelImpostor} alt='Imagen ilustrativa del sindrome del impostor' />
              </div>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Noviembre 2019 - Marzo 2020</span>
                  <br />
                  Síndrome del impostor.
                </h5>
                <p>
                  Comencé un curso de <span>JavaScript</span>, pero al llegar
                  a la sección de aprender un framework como{' '}
                  <span>Angular</span>, me encontraba con dificultades y no
                  podía entender los conceptos, lo que me llevó a convencerme
                  de que no era apto para programar, y dejé de estudiar.
                </p>
              </div>
            </div>
          </div>
          <div className={`section ${sectionToShow === 3 ? 'show' : ''}`}>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Enero - Junio 2020</span>
                  <br />
                  Inicio de: Ingeniería en sistemas y redes.
                </h5>
                <p>
                  En mi primer ciclo curse la asignatura{' '}
                  <span>Programación Computacional IV</span>, enfocada en{' '}
                  <span>PHP</span>, <span>POO</span> y <span>MVC</span>.
                </p>
                <p>
                  A pesar de seguir convencido de que no era apto para
                  programar, la pasión que siento por el desarrollo web me
                  llevó a seguirlo estudiando como un pasatiempo.
                </p>
              </div>
              <div className='img'>
                <img src={inicioIngSistemas} alt='Imagen del proyecto realizado con MVC en la UGB' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mb-1'>
                <img src={cursosMaquetacionWeb} alt='Imagen con los dos cursos realizados y el logo de los 4 proyectos realizados.' />
              </div>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Julio - Diciembre 2020</span>
                  <br />
                  Retomo el curso de JavaScript.
                </h5>
                <p>
                  Durante este tiempo, creé proyectos simples enfocándome en
                  hacerlos responsive. Completé un <span>curso de CSS</span> y
                  otro de <span>JavaScript</span>, el curso que antes me había
                  derrotado. En las últimas semanas de diciembre realicé{' '}
                  <span>4 páginas web totalmente responsivas</span>, 2 de
                  ellas utilizando css puro y las otras 2 utilizando
                  Booststrap.
                </p>
              </div>
            </div>
          </div>
          <div className={`section ${sectionToShow === 4 ? 'show' : ''}`}>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'>
                  <span>2021</span>
                  <br />
                  Práctica y más práctica.
                </h5>
                <p>
                  En mayo realice mi primer diseño de mi <span>portafolio personal</span> y de vez
                  en cuando creaba proyectos simples en <a href='https://codepen.io/Marcos_Rubi' target='_blank' rel='noreferrer'>codepen </a>
                  donde me centraba en realizar un buen responsive y dominar
                  flexbox para ello.
                </p>
              </div>
              <div className='img'>
                <img src={codepen2021} alt='Imagen de los proyectos realizados en codepen' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mb-1'>
                <img src={pintelogImg} alt='Imagen de la página de inicio de la red social pintelog' />
              </div>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Enero - Julio 2022</span>
                  <br />
                  Pintelog: una red social.
                </h5>
                <p>
                  Repase <span>AJAX</span>, <span>PHP</span> usando{' '}
                  <span>POO</span> y <span>MySQL</span>. Para ello, en febrero
                  creé una <span>lista de tareas con paginación</span>.
                </p>
                <p>
                  Durante el interciclo decidí realizar <span>pintelog</span>,
                  una <span>red social</span>. Quería evaluar mi progreso y
                  asegurarme de que estaba en el camino correcto.
                </p>
              </div>
            </div>
          </div>
          <div className={`section ${sectionToShow === 5 ? 'show' : ''}`}>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Agosto - Diciembre 2022</span>
                  <br />
                  Frontend Mentor, React y APIs.
                </h5>
                <p>
                  Conocí <span>Frontend Mentor</span> y comencé a realizar sus
                  ejercicios, completando 30 desafíos en un periodo de 5
                  meses.
                </p>
                <p>
                  Mejoré mi portafolio, comencé con <span>React</span>,{' '}
                  <span>APIs</span>, y creé una API con Node.js y Express que
                  scrapea datos en plataformas de compras de videojuegos y
                  creé <a href='https://marcosrubi.github.io/GamesScraping/' target='_blank' rel='noreferrer'>GamesScraping</a>.
                </p>
              </div>
              <div className='img'>
                <img src={frontentReactApis} alt='Imagen de mi perfil en frontend-mentor y la página inicial de gamesScraping' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mb-1'>
                <img src={actualidad} alt='Sombra de un hombre viendo al cielo' />
              </div>
              <div className='content'>
                <h5 className='text-center'>
                  <span>Enero 2023 - Actualidad</span>
                  <br />
                  Un sueño posible.
                </h5>
                <p>
                  Realicé este portafolio usando react y tengo la esperanza de
                  algún día poder dedicarme al desarrollo web.
                </p>
                <p>
                  <span>
                    <i>
                      El éxito es un viaje, no un destino final. No dejaré de
                      aprender, crecer y evolucionar para alcanzar mis sueños
                      y vivir lo que me apasiona.
                    </i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='buttons d-flex align-center jc-between'>
          <button className={`btn btn-controls ${sectionToShow === 1 ? 'hide' : ''} `} onClick={() => { handleOnClick(-1) }}><GrCaretPrevious /></button>
          <button className={`btn btn-controls ${sectionToShow >= 5 ? 'hide' : ''} `} onClick={() => { handleOnClick(+1) }}><GrCaretNext /></button>
        </div>
      </div>
    </section>
  )
}

export default Timeline
