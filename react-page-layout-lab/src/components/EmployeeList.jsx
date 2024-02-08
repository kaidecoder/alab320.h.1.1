import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import bird from "../assets/black-capped-chickadee.jpg"

const EmployeeList = (props) => {
  return (
    <div className="employee-list">
        <img className="bird" src={bird} alt="" />
        
        <EmployeeListItem bird= {props.bird}/>
        <EmployeeListItem bird= {props.bird}/>
        <EmployeeListItem bird= {props.bird}/>
        <EmployeeListItem bird= {props.bird}/>
        <EmployeeListItem />
        <EmployeeListItem />
    </div>
  )
}

export default EmployeeList