import React from 'react'
import Header from './Header'
import bird from "../assets/black-capped-chickadee.jpg"

const EmployeePage = () => {
  return (
    <div className="employee-page">
        <Header />
        <div>
            <h3>Julie Taylor</h3>
            <p>VP, Marketing</p>
        </div>
    </div>
  )
}

export default EmployeePage