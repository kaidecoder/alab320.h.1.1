import React from 'react'
import bird from "../assets/black-capped-chickadee.jpg"

const EmployeeListItem = (props) => {
  return (
    <div>
        <img className="bird" src={bird} alt="" />
        <h1 className="employee-list-item">
            Employee List</h1>
    </div>
  )
}

export default EmployeeListItem