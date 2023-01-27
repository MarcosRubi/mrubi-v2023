import { FiSettings } from 'react-icons/fi'

function SettingTheme ({ changeTheme }) {
  const handleOnClick = () => {
    document.querySelector('.menu__preset-colors').classList.toggle('show')
  }
  return (
    <div className='menu__setting p-relative'>
      <button className='btn' onClick={handleOnClick}>
        <FiSettings />
      </button>
      <div className='menu__preset-colors p-absolute w-100'>
        <p>Seleccione el tema</p>
        <ul>
          <li className='w-100' onClick={() => { changeTheme('default') }}>
            <div>
              <span className='theme-color' style={{ background: '#3959a2' }} />
              <span className='theme-color' style={{ background: '#a8dbd2' }} />
            </div>
          </li>
          <li className='w-100' onClick={() => { changeTheme('purple') }}>
            <div>
              <span className='theme-color' style={{ background: '#9A9CEA' }} />
              <span className='theme-color' style={{ background: '#A2DCEE' }} />
            </div>
          </li>
          <li className='w-100' onClick={() => { changeTheme('gray') }}>
            <div>
              <span className='theme-color' style={{ background: '#78A6C8' }} />
              <span className='theme-color' style={{ background: '#E65C4F' }} />
            </div>
          </li>
          <li className='w-100' onClick={() => { changeTheme('green') }}>
            <div>
              <span className='theme-color' style={{ background: '#53D2B2' }} />
              <span className='theme-color' style={{ background: '#FFE3B3' }} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SettingTheme
