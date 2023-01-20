import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BiMessage } from 'react-icons/bi'

function FormContact () {
  return (
    <div className='form-contact'>
      <h4>Contactar</h4>
      <form action='#' method='post' onSubmit={() => { return false }}>
        <div className='input-group p-relative'>
          <input type='text' name='txtName' id='txtName' required='required' />
          <label htmlFor='txtName' className='p-absolute placeholder'>Nombre</label>
          <label htmlFor='txtName' className='p-absolute placeholder-icon'>
            <AiOutlineUser />
          </label>
        </div>
        <div className='input-group p-relative'>
          <input type='email' name='txtEmail' id='txtEmail' required='required' />
          <label htmlFor='txtEmail' className='p-absolute placeholder'>Email</label>
          <label htmlFor='txtEmail' className='p-absolute placeholder-icon'>
            <AiOutlineMail />
          </label>
        </div>
        <div className='input-group p-relative'>
          <textarea name='txtMessage' id='txtMessage' cols='30' rows='5' required='required' />
          <label htmlFor='txtMessage' className='p-absolute placeholder'>Mensaje</label>
          <label htmlFor='txtMessage' className='p-absolute placeholder-icon'>
            <BiMessage />
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          <span>Enviar Mensaje</span>
        </button>
      </form>
    </div>
  )
}

export default FormContact
