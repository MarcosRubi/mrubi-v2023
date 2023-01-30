import { useContext, useState } from 'react'

import { AiOutlineDown } from 'react-icons/ai'
import MainContext from '../../context/MainContext'
import { useProjects } from '../hooks/useProjects'

function NavFilters () {
  const [activeOption, setActiveOption] = useState('')
  const { order, languages } = useContext(MainContext)
  const { changeOrder, filterLanguages } = useProjects()

  const handleOnClickToggleOptions = (e, selected) => {
    if (activeOption === selected) {
      setActiveOption('')
      return
    }

    document.querySelector('body').offsetWidth >= 768 &&
      e.target.scrollIntoView()

    setActiveOption(selected)
  }

  return (
    <div className='filters d-flex jc-center align-center p-relative'>
      <div
        className={`filter d-flex jc-center align-center ${activeOption === 'date' ? 'active' : ''
          }`}
        onClick={(e) => {
          handleOnClickToggleOptions(e, 'date')
        }}
      >
        <span>Ordenar por</span>
        <AiOutlineDown />
      </div>
      <div
        className={`filter d-flex jc-center align-center ${activeOption === 'language' ? 'active' : ''
          }`}
        onClick={(e) => {
          handleOnClickToggleOptions(e, 'language')
        }}
      >
        <span>Filtrar por</span>
        <AiOutlineDown />
      </div>
      <div
        className={`options w-100 p-absolute ${activeOption === 'date' ? 'show' : ''
          }`}
      >
        <div className=' d-flex flex-column'>
          <button
            className={`btn ${order === 'new' ? 'selected' : ''}`}
            onClick={() => { changeOrder('new') }}
          >
            <span>Más recientes</span>
          </button>
          <button
            className={`btn ${order === 'old' ? 'selected' : ''}`}
            onClick={() => { changeOrder('old') }}
          >
            <span>Más antiguos</span>
          </button>
        </div>
      </div>
      <div
        className={`options w-100 p-absolute languages ${activeOption === 'language' ? 'show' : ''
          }`}
      >
        <div className='d-flex flex-column'>
          <p>lenguajes:</p>
          <label htmlFor='js' className='d-flex align-center language'>
            <span>JavaScript</span>
            <input
              type='checkbox'
              name='js'
              id='js'
              onChange={() => {
                filterLanguages('JavaScript')
              }}
              checked={languages.includes('JavaScript')}
            />
          </label>
          <label htmlFor='php' className='d-flex align-center language'>
            <span>PHP</span>
            <input
              type='checkbox'
              name='php'
              id='php'
              onChange={() => {
                filterLanguages('PHP')
              }}
              checked={languages.includes('PHP')}
            />
          </label>
          <label htmlFor='sql' className='d-flex align-center language'>
            <span>MySQL</span>
            <input
              type='checkbox'
              name='sql'
              id='sql'
              onChange={() => {
                filterLanguages('MySQL')
              }}
              checked={languages.includes('MySQL')}
            />
          </label>
        </div>
        <div className='d-flex flex-column'>
          <p>herramientas:</p>
          <label htmlFor='react' className='d-flex align-center language'>
            <span>React</span>
            <input
              type='checkbox'
              name='react'
              id='react'
              onChange={() => {
                filterLanguages('React')
              }}
              checked={languages.includes('React')}
            />
          </label>
          <label htmlFor='api' className='d-flex align-center language'>
            <span>API</span>
            <input
              type='checkbox'
              name='api'
              id='api'
              onChange={() => {
                filterLanguages('API')
              }}
              checked={languages.includes('API')}
            />
          </label>
          <label htmlFor='pug' className='d-flex align-center language'>
            <span>PUG</span>
            <input
              type='checkbox'
              name='pug'
              id='pug'
              onChange={() => {
                filterLanguages('PUG')
              }}
              checked={languages.includes('PUG')}
            />
          </label>
          <label htmlFor='scss' className='d-flex align-center language'>
            <span>SCSS</span>
            <input
              type='checkbox'
              name='scss'
              id='scss'
              onChange={() => {
                filterLanguages('SCSS')
              }}
              checked={languages.includes('SCSS')}
            />
          </label>
        </div>
        <div className='d-flex flex-column'>
          <p>Metodologías:</p>
          <label htmlFor='poo' className='d-flex align-center language'>
            <span>POO</span>
            <input
              type='checkbox'
              name='poo'
              id='poo'
              onChange={() => {
                filterLanguages('POO')
              }}
              checked={languages.includes('POO')}
            />
          </label>
          <label htmlFor='ajax' className='d-flex align-center language last'>
            <span>AJAX</span>
            <input
              type='checkbox'
              name='ajax'
              id='ajax'
              onChange={() => {
                filterLanguages('AJAX')
              }}
              checked={languages.includes('AJAX')}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default NavFilters
