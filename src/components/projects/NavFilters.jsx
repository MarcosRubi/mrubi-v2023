import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'

function NavFilters () {
  const [activeOption, setActiveOption] = useState('')
  const [order, setOrder] = useState('default')

  const handleOnClickToggleOptions = (e, selected) => {
    if (activeOption === selected) {
      removeActiveOption()
      return
    }

    document.querySelector('body').offsetWidth >= 768 && e.target.scrollIntoView()

    setActiveOption(selected)
  }

  const handleOnClickOptions = (newOrder) => {
    changeOrder(newOrder)
  }

  const changeOrder = (newOrder) => {
    setOrder(newOrder)
  }

  const removeActiveOption = () => {
    setActiveOption('')
  }

  return (
    <div className='filters d-flex jc-center align-center p-relative'>
      <div
        className={`filter date d-flex jc-center align-center ${activeOption === 'date' ? 'active' : ''}`}
        onClick={(e) => { handleOnClickToggleOptions(e, 'date') }}
      >
        <span>Ordenar por</span>
        <AiOutlineDown />
      </div>
      <div
        className={`filter date d-flex jc-center align-center ${activeOption === 'language' ? 'active' : ''}`}
        onClick={(e) => { handleOnClickToggleOptions(e, 'language') }}
      >
        <span>Filtrar por</span>
        <AiOutlineDown />
      </div>
      <div className={`options w-100 p-absolute ${activeOption === 'date' ? 'show' : ''}`}>
        <div className=' d-flex flex-column'>
          <button className={`btn btn-secondary ${order === 'default' ? 'selected' : ''}`} onClick={() => handleOnClickOptions('default')}> Destacados </button>
          <button className={`btn btn-secondary ${order === 'new' ? 'selected' : ''}`} onClick={() => handleOnClickOptions('new')}> Más recientes </button>
          <button className={`btn btn-secondary ${order === 'old' ? 'selected' : ''}`} onClick={() => handleOnClickOptions('old')}> Más antiguos </button>
        </div>
      </div>
      <div className={`options w-100 p-absolute languages ${activeOption === 'language' ? 'show' : ''}`}>
        <div className='d-flex flex-column'>
          <p>lenguajes:</p>
          <label htmlFor='html' className='d-flex align-center language'>
            <span>HTML & CSS</span>
            <input type='checkbox' name='html' id='html' />
          </label>
          <label htmlFor='js' className='d-flex align-center language'>
            <span>JavaScript</span>
            <input type='checkbox' name='js' id='js' />
          </label>
          <label htmlFor='php' className='d-flex align-center language'>
            <span>PHP</span>
            <input type='checkbox' name='php' id='php' />
          </label>
          <label htmlFor='sql' className='d-flex align-center language'>
            <span>MySQL</span>
            <input type='checkbox' name='sql' id='sql' />
          </label>
        </div>
        <div className='d-flex flex-column'>
          <p>herramientas:</p>
          <label htmlFor='prepros' className='d-flex align-center language'>
            <span>Pug/SCSS</span>
            <input type='checkbox' name='prepros' id='prepros' />
          </label>
          <label htmlFor='ajax' className='d-flex align-center language'>
            <span>AJAX</span>
            <input type='checkbox' name='ajax' id='ajax' />
          </label>
          <label htmlFor='react' className='d-flex align-center language'>
            <span>React</span>
            <input type='checkbox' name='react' id='react' />
          </label>
          <label htmlFor='api' className='d-flex align-center language last'>
            <span>API</span>
            <input type='checkbox' name='api' id='api' />
          </label>
        </div>
      </div>
    </div>
  )
}

export default NavFilters
