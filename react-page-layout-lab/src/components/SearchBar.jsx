import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className="search">
        <input type="text" placeholder="Search Bar" />
        <FaSearch id="search"/>
    </div>
  )
}

export default SearchBar