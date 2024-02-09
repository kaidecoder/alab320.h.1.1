import React from 'react'
import Image from './Image'

const EmployeePageText = (props) => {
  return (
    <div className="card">
        <Image />
        <div>
            <h3 className="name">{props.name}</h3>
            <p className="text">{props.text}</p>
        </div>
    </div>
  )
}

export default EmployeePageText