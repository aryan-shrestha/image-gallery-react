import React from 'react'

import './Thumbnail.css'

const Thumbnail = ({src, toggleImageViewer}) => {
  return (
    <div className='thumbnail' onClick={toggleImageViewer}>
        <img src={src} alt="thumbnail" />
    </div>
  )
}

export default Thumbnail