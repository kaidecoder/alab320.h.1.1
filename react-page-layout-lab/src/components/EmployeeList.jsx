import React from 'react'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = (props) => {
    console.log("EL", props)
            
  return (
    <div className="employee-list">
        
     {
            props.data.map((employee, index) => (
               <EmployeeListItem key={index}  name={employee.name} title={employee.title}/>
            ))
        }
    </div>
  )
}

export default EmployeeList