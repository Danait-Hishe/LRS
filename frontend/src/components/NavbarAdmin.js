import React from 'react';
import "./Navbar.css";
import { Link }  from 'react-router-dom';

export default function NavbarAdmin() {
  return (
    <div>
       <nav className="Navbar">
            <img alt='' src={Image}/>
            <div className="nav-items">
            <Link to='/'>Home</Link>
            <Link to='/Admin'>Dashboard</Link>
            </div>
        </nav>    
    </div>
  )
}
