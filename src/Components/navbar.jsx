import React, {useState} from 'react'
import "./navbar.css"

const NavBar = () => {

  var [IsOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!IsOpen)
    IsOpen = true ? document.getElementById("Links").classList.toggle("active") : SetIsOpen(!IsOpen);
  }

  return (
    
    <nav className="NavBar">

        <div className='Logo_Box'><a id='Logo' href='/'>Logo</a></div>

        <button className='Button' id='Button' onClick={toggle}>Menu</button>

        <ul className='Links' id='Links'>
            <li className='Link'><a id='Link_item' href='/AboutUs'>About Us</a></li>
            <li className='Link'><a id='Link_item' href='/Home'>Home</a></li>
            <li className='Link'><a id='Link_item' href='/LogIn'>Contact Us</a></li>
        </ul>

    </nav>
  )
}


export default NavBar