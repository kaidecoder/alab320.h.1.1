import React from 'react'
import SearchBar from './SearchBar'
import Header from './Header'
import EmployeeList from './EmployeeList'


const HomePage = (props) => {
    console.log(props)
  return (
    <div className="home-page">
        <Header title="Employee Directory"/>
        <SearchBar />
        <EmployeeList data={props.data}/>
    </div>
  )
}

export default HomePage