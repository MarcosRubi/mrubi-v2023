/* eslint-disable no-undef */
/* eslint-disable camelcase */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import testImg from '../../public/images/projects/preview/a.webp'
gsap.registerPlugin(ScrollTrigger)

function Timeline () {
  const timelineRef = useRef()

  useLayoutEffect(() => {
    const timeline__items = gsap.utils.toArray('.timeline__item')

    const ctx = gsap.context(() => {
      gsap.to(timeline__items, {
        xPercent: -100 * (timeline__items.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          pin: true,
          start: 'top top',
          scrub: 1,
          snap: {
            snapTo: 1 / (timeline__items.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
          },
          end: () => '+=' + (timelineRef.current.offsetWidth - innerWidth)
        }
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className='timeline p-relative'>
      <h2 className='text-center'>Mi proceso</h2>
      <div className='timeline__container' ref={timelineRef}>
        <article id='timeline__item-1' className='timeline__item full-screen'>
          <div className='container'>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'><span>2017</span> <br />Inicio de la carrera: Técnico en sistemas y redes.</h5>
                <p>En el primer año descubrí mi pasión por el desarrollo web en la asignatura de <span>diseño de páginas web</span>.</p>
                <p>También en este año, creé mi primer "sitio web", una radio la cual no es responsive.</p>
              </div>
              <div className='img'>
                <img src={testImg} alt='' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mt-0'>
                <img src={testImg} alt='' />
              </div>
              <div className='content'>
                <h5 className='text-center'><span>2018</span><br />Fin de la carrera: Técnico en sistemas y redes.</h5>
                <p>En este año aprendí a usar <span>AJAX</span>, <span>PHP</span> con programación orientada a objetos (POO) y los conceptos básicos de <span>MySQL</span>.</p>
                <p>Estos conocimientos me ayudaron a crear la red social <Link to='/proyecto/pintelog'>Pintelog</Link> en el año 2022.</p>
              </div>
            </div>
          </div>
        </article>
        <article id='timeline__item-2' className='timeline__item full-screen'>
          <div className='container'>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'><span>Enero ~ Octubre del 2019</span><br /> Cursos en línea enfocados a maquetación web.</h5>
                <p>Continué mi aprendizaje de manera audodidacta con cursos gratuitos de <span>HTML</span> y <span>CSS</span> de internet, incluyendo el uso de pre-procesadores como <span>Pug</span> y <span>SCSS</span>.</p>
                <p>Además, comence a usar <span>GitHub</span> y realize mi <span>primer menú responsive</span>.</p>
              </div>
              <div className='img'>
                <img src={testImg} alt='' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mt-0'>
                <img src={testImg} alt='' />
              </div>
              <div className='content'>
                <h5 className='text-center'><span>Noviembre 2019 - Marzo 2020</span><br />Síndrome del impostor.</h5>
                <p>Comencé un curso de <span>JavaScript</span>, pero al llegar a la sección de aprender un framework como <span>Angular</span>, me encontraba con dificultades y no podía entender los conceptos, lo que me llevó a convencerme de que no era apto para programar, y dejé de estudiar.</p>
              </div>
            </div>
          </div>
        </article>
        <article id='timeline__item-3' className='timeline__item full-screen'>
          <div className='container'>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'><span>Enero - Junio 2020</span><br />Inicio de: Ingeniería en sistemas y redes.</h5>
                <p>En mi primer ciclo curse la asignatura <span>Programación Computacional IV</span>, enfocada en <span>PHP</span>, <span>POO</span> y <span>MVC</span>.</p>
                <p>A pesar de seguir convencido de que no era apto para programar, la pasión que siento por el desarrollo web me llevó a seguirlo estudiando como un pasatiempo.</p>
              </div>
              <div className='img'>
                <img src={testImg} alt='' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mt-0'>
                <img src={testImg} alt='' />
              </div>
              <div className='content'>
                <h5 className='text-center'><span>Julio - Diciembre 2020</span><br />Retomo el curso de JavaScript.</h5>
                <p>Durante este tiempo, creé proyectos simples enfocándome en hacerlos responsive. Completé un <span>curso de CSS</span> y otro de <span>JavaScript</span>, el curso que antes me había derrotado. En las últimas semanas de diciembre realicé <span>4 páginas web totalmente responsivas</span>, 2 de ellas utilizando css puro y las otras 2 utilizando Booststrap.</p>
              </div>
            </div>
          </div>
        </article>
        <article id='timeline__item-4' className='timeline__item full-screen'>
          <div className='container'>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'><span>2021</span><br />Práctica y más práctica.</h5>
                <p>En mayo terminé mi <span>portafolio personal</span> y aunque no me quedaba mucho tiempo libre por la universidad de vez en cuando creaba proyectos simples en <span>codepen</span> donde me centraba en realizar un buen responsive y dominar flexbox para ello.</p>
              </div>
              <div className='img'>
                <img src={testImg} alt='' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mt-0'>
                <img src={testImg} alt='' />
              </div>
              <div className='content'>
                <h5 className='text-center'><span>Enero - Julio 2022</span><br />Pintelog: una red social.</h5>
                <p>Repase <span>AJAX</span>, <span>PHP</span> usando <span>POO</span> y <span>MySQL</span>. Para ello, en febrero creé una <span>lista de tareas con paginación</span>.</p>
                <p>Durante el interciclo decidí realizar <span>pintelog</span>, una <span>red social</span>. Quería evaluar mi progreso y asegurarme de que estaba en el camino correcto.</p>
              </div>
            </div>
          </div>
        </article>
        <article id='timeline__item-5' className='timeline__item full-screen'>
          <div className='container'>
            <div className='timeline__element d-flex flex-column'>
              <div className='content'>
                <h5 className='text-center'><span>Agosto - Diciembre 2022</span><br />Frontend Mentor, React y APIs.</h5>
                <p>Conocí <span>Frontend Mentor</span> y comencé a realizar sus ejercicios, completando 30 desafíos en un periodo de 5 meses.</p>
                <p>Mejoré mi portafolio, comencé con <span>React</span>, <span>APIs</span>, y creé una API con Node.js y Express que scrapea datos en plataformas de compras de videojuegos y creé <span>GamesScraping</span>.</p>
              </div>
              <div className='img'>
                <img src={testImg} alt='' />
              </div>
            </div>
            <div className='timeline__element d-flex flex-column'>
              <div className='img mt-0'>
                <img src={testImg} alt='' />
              </div>
              <div className='content'>
                <h5 className='text-center'><span>Enero 2023 - Actualidad</span><br />Un sueño posible.</h5>
                <p>Realicé este portafolio usando react y tengo la esperanza de algún día poder dedicarme al desarrollo web.</p>
                <p><span><i>El éxito es un viaje, no un destino final. No dejaré de aprender, crecer y evolucionar para alcanzar mis sueños y vivir lo que me apasiona.</i></span></p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Timeline
