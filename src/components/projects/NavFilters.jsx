import { useState } from 'react'

import { AiOutlineDown } from 'react-icons/ai'

function NavFilters ({ changeOrder, order, filterLanguages, languages }) {
  const [activeOption, setActiveOption] = useState('')

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
        className={`filter d-flex jc-center align-center ${
          activeOption === 'date' ? 'active' : ''
        }`}
        onClick={(e) => {
          handleOnClickToggleOptions(e, 'date')
        }}
      >
        <span>Ordenar por</span>
        <AiOutlineDown />
      </div>
      <div
        className={`filter d-flex jc-center align-center ${
          activeOption === 'language' ? 'active' : ''
        }`}
        onClick={(e) => {
          handleOnClickToggleOptions(e, 'language')
        }}
      >
        <span>Filtrar por</span>
        <AiOutlineDown />
      </div>
      <div
        className={`options w-100 p-absolute ${
          activeOption === 'date' ? 'show' : ''
        }`}
      >
        <div className=' d-flex flex-column'>
          <button
            className={`btn btn-secondary ${
              order === 'default' ? 'selected' : ''
            }`}
            onClick={() => {
              changeOrder('default')
            }}
          >
            {' '}
            Destacados{' '}
          </button>
          <button
            className={`btn btn-secondary ${order === 'new' ? 'selected' : ''}`}
            onClick={() => {
              changeOrder('new')
            }}
          >
            {' '}
            Más recientes{' '}
          </button>
          <button
            className={`btn btn-secondary ${order === 'old' ? 'selected' : ''}`}
            onClick={() => {
              changeOrder('old')
            }}
          >
            {' '}
            Más antiguos{' '}
          </button>
        </div>
      </div>
      <div
        className={`options w-100 p-absolute languages ${
          activeOption === 'language' ? 'show' : ''
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
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default NavFilters
