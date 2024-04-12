import React from 'react'

import './Thumbnail.css'

const Thumbnail = (props) => {
  return (
    <div className='thumbnail'>
        <img src={props.src} alt="thumbnail" />
    </div>
  )
}

export default Thumbnail