import React from 'react'
import { BsSearch, BsHouseDoorFill,BsFillPlusSquareFill,BsChatDots,BsFillCompassFill,BsHeart } from "react-icons/bs";

import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <img src="images/logo.png" alt="logo" />
        <span><BsSearch className='searchIcon'/><input type="text" placeholder='Search' /></span>
        <ul>
            <li><a href="/"><BsHouseDoorFill/></a></li>
            <li><a href="/"><BsChatDots/></a></li>
            <li><a href="/"><BsFillPlusSquareFill/></a></li>
            <li><a href="/"><BsFillCompassFill/></a></li>
            <li><a href="/"><BsHeart/></a></li>
        </ul>
    </nav>
  )
}

export default Navbar