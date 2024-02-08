import React from 'react'
import SearchBar from './SearchBar'
import Header from './Header'
import EmployeeList from './EmployeeList'


const HomePage = (props) => {
  return (
    <div className="home-page">
        <Header title="props.title"/>
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default HomePage