import React from 'react'
import bird from "../assets/black-capped-chickadee.jpg"

const Image = () => {
  return (
    <div>
        <img className="bird" src={bird} alt="MA state bird" />
    </div>
  )
}

export default Image