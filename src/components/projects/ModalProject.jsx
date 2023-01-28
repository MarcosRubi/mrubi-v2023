import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import { useContext, useState } from 'react'
import MainContext from '../../context/MainContext'

function ModalProject () {
  const navigate = useNavigate()
  const { projectImages, toggleModalActive, overflowBody } =
    useContext(MainContext)

  const [imageToShow, setImageToShow] = useState(projectImages.mobileDesign)
  const [positionImage, setPositionImage] = useState(1)

  const handleChangeImg = (value) => {
    const position = positionImage + value

    if (position <= 1) {
      setImageToShow(projectImages.mobileDesign)
      setPositionImage(1)
      return
    }
    if (position === 2) {
      setImageToShow(projectImages.tabletDesign)
      setPositionImage(2)
      return
    }
    setImageToShow(projectImages.desktopDesign)
    setPositionImage(3)
  }
  const handleCloseModal = () => {
    toggleModalActive()
    overflowBody()
    navigate(-1)
  }
  return (
    <div className='modal project-images p-fixed d-flex flex-column'>
      <div className='close d-flex jc-end'>
        <button
          className='btn btn-controls'
          onClick={() => {
            handleCloseModal()
          }}
        >
          <span>
            <AiOutlineClose />
          </span>
        </button>
      </div>
      <div className='modal__img p-relative d-flex jc-center'>
        <div className='p-absolute '>
          <img src={`../../${imageToShow}`} />
        </div>
      </div>
      <div className='d-flex jc-between mb-2 buttons'>
        <button
          className={`btn btn-controls ${positionImage === 1 && 'hide'}`}
          onClick={() => {
            handleChangeImg(-1)
          }}
        >
          <GrCaretPrevious />
        </button>
        <button
          className={`btn btn-controls ${positionImage === 3 && 'hide'}`}
          onClick={() => {
            handleChangeImg(+1)
          }}
        >
          <GrCaretNext />
        </button>
      </div>
    </div>
  )
}

export default ModalProject
