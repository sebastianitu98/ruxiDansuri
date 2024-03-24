import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar flex justify-between mx-auto py-2 text-center w-full fixed top-0 left-0 right-0'>
      {/* LOGO SI DESCRIERE */}
      <div className="nav-logo-name flex justify-center">
        <img src="logo.png" alt="LOGO" title='LOGO' id='logo' className='hidden' />
        <p className='navTitle text-center my-auto mx-2'>RUXANDRA T</p>
      </div>

      {/* BUTOANE PT NAVIGARE LA SECTIUNEA RESPECTIVA */}
      <ul className='nav-buttons my-auto flex flex items-center'>
        <li className='mx-6'><Link to="/" relative="path">Acasa</Link></li>
        <li className='mx-6'><Link to="/videos" relative="path">Danseaza cu mine!</Link></li>
        <li className='mx-6'><Link to="/vision" relative="path">Viziunea mea</Link></li>
        <li className='mx-6'><Link to="/" relative="path">Experienta</Link></li>
        <li className='mx-6'><Link to="/logIn" relative="path">LOG IN</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
