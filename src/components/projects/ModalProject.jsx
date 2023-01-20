import { useNavigate } from 'react-router-dom'

function ModalProject () {
  const navigate = useNavigate()
  return (
    <div>
      ModalProject
      <button onClick={() => navigate(-1)}>← Back</button>
    </div>
  )
}

export default ModalProject
