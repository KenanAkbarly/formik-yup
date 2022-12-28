import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='navbar_left'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/768px-Tesla_logo.png'/>
     </div>
     <div className='navbar_right'>
        <ul>
            <Link to='/'> <li>HOME</li></Link>
            <Link to='/form'> <li>FORM</li></Link>
        </ul>
     </div>
     <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  )
}

export default Navbar
