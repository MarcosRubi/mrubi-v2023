import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import { useContext, useState } from 'react'
import MainContext from '../../context/MainContext'

function ModalProject () {
  const navigate = useNavigate()
  const { projectImages } = useContext(MainContext)

  const [imageToShow, setImageToShow] = useState(projectImages.mobileDesign)

  const handleOnClick = (value) => {
    if (value === 'mobile') {
      setImageToShow(projectImages.mobileDesign)
      return
    }
    setImageToShow(projectImages.desktopDesign)
  }
  return (
    <div className='modal project-images p-fixed d-flex flex-column'>
      <div className='close d-flex jc-end'>
        <button className='btn btn-secondary' onClick={() => navigate(-1)}>
          <span><AiOutlineClose /></span>
        </button>
      </div>
      <div className='modal__img p-relative d-flex jc-center'>
        <div className='p-absolute '>
          <img src={`../../${imageToShow}`} />
        </div>
      </div>
      <div className='d-flex jc-between mb-2 buttons'>
        <button className='btn btn-secondary' onClick={() => { handleOnClick('mobile') }}><GrCaretPrevious /></button>
        <button className='btn btn-secondary' onClick={() => { handleOnClick('desktop') }}><GrCaretNext /></button>
      </div>
    </div>
  )
}

export default ModalProject
