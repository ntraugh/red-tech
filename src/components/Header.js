import { Link } from 'react-dom'
import React from 'react'
import logo from "../images/red-technologies.png"
import {FaRegSun, FaRegUserCircle} from "react-icons/fa"
const Header = () => {
  return (
    <div style={{"display": "flex", "marginBottom": "20px", "justifyContent": "space-between"}}>
      <img src={logo} alt="red" style={{"height": "50px"}} />
      <div style={{"margin": "6px"}}>
        <FaRegSun size={30} style={{"cursor": "pointer", "marginRight": "8px"}}/>
        <FaRegUserCircle size={30} style={{"cursor": "pointer"}}/>
      </div>
    </div>
    
  )
}

export default Header