function Technologies ({ technologies }) {
  return (
    <div className='technologies d-flex align-center flex-wrap'>
      {technologies.map((technology, index) => <span key={index}>{technology}</span>)}
    </div>
  )
}

export default Technologies
