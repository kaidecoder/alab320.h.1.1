import React from 'react'
import Header from './Header'
import bird from "../assets/black-capped-chickadee.jpg"
import EmployeePageText from './EmployeePageText'

const EmployeePage = (props) => {
    
  return (
    <div className="employee-page">
        <Header title="Employee"/>
        {/* <Image /> */}
        <EmployeePageText name="Julie Taylor" text="VP of Marketing" />
        {
            <ul>
                <p>Call Office:</p>
                <li>{props.data[1].office}</li>
                <br />
                <p>Call Mobile:</p>
                <li>{props.data[1].mobile}</li>
                <br />
                <p>Call SMS:</p>
                <li>{props.data[1].sms}</li>
                <br />
                <p>Send Email:</p>
                <li>{props.data[1].email}</li>
            </ul>
        }
    </div>
  )
}

export default EmployeePage