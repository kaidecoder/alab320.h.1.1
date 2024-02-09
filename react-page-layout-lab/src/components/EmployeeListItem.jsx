import React from 'react'
import Image from './Image'
import EmployeePageText from './EmployeePageText'

const EmployeeListItem = (props) => {
    
    console.log(props)
  return (
    <div className="employeeList">
        <EmployeePageText name={props.name} text={props.title} />
    </div>
    
  )
}

export default EmployeeListItem