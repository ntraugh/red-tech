import React from 'react'
import logo from "../images/red-technologies.png"
// React icons
import {FaRegSun, FaRegUserCircle} from "react-icons/fa"
const Header = () => {
  return (
    <div style={{
      "display": "flex", 
      "marginBottom": "20px", 
      "justifyContent": "space-between",
      "borderBottom": "1px solid rgba(0, 0, 0, 0.2)",
      "paddingBottom": "12px"}}>
      <img src={logo} alt="red" style={{"height": "50px"}} />
      <div style={{"margin": "6px"}}>
        <FaRegSun size={30} style={{"cursor": "pointer", "marginRight": "8px"}}/>
        <FaRegUserCircle size={30} style={{"cursor": "pointer"}}/>
      </div>
    </div>
    
  )
}

export default Header