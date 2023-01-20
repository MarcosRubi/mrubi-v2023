import { useEffect } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

function ToggleTheme ({ toggleDark }) {
  useEffect(() => {
    const input = document.getElementById('toggle-theme')
    // eslint-disable-next-line no-undef
    if (localStorage.getItem('isDark') === 'dark') {
      input.checked = 'true'
    }
  }, [])
  return (
    <div className='menu__toggle p-relative'>
      <input className='w-100' type='checkbox' name='toggle-theme' id='toggle-theme' onChange={toggleDark} />
      <MdOutlineLightMode className='p-absolute feather-sun' />
      <MdOutlineDarkMode className='p-absolute feather-moon' />
      <span className='p-absolute text-center hide'>Cambiar a modo día</span>
    </div>
  )
}

export default ToggleTheme
