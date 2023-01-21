import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import { useContext } from 'react'
import MainContext from '../../context/MainContext'

function ModalProject () {
  const navigate = useNavigate()
  const { projectImages } = useContext(MainContext)

  return (
    <div className='modal p-fixed d-flex flex-column'>
      <div className='container p-relative'>

        <div className='d-flex jc-end'>
          <button className='btn btn-secondary' onClick={() => navigate(-1)}>
            <span><AiOutlineClose /></span>
          </button>
        </div>
        <div className='modal__img p-relative d-flex jc-center'>
          <img src={`../../${projectImages.preview}`} />
        </div>
        <div className='d-flex jc-between mb-2 buttons'>
          <button className='btn btn-secondary'><GrCaretPrevious /></button>
          <button className='btn btn-secondary'><GrCaretNext /></button>
        </div>
      </div>
    </div>
  )
}

export default ModalProject
