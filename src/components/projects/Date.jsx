function Date ({ date }) {
  return (
    <div className='date'>
      {date.map((date, index) => {
        if (index === 2) {
          return date
        }
        return date + '/'
      })}
    </div>
  )
}

export default Date
