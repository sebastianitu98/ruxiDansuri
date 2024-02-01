import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar flex justify-between mx-auto mt-2 bo text-center w-full fixed top-0 left-0 right-0'>
      {/* LOGO SI DESCRIERE */}
      <div className="nav-logo-name flex justify-center">
          <img src="logo.png" alt="LOGO" title='LOGO' id='logo'  className='hidden'/>
          <p className='navTitle text-center my-auto mx-2'>RUXANDRA T</p>
      </div>

      {/* BUTOANE PT NAVIGARE LA SECTIUNEA RESPECTIVA */}
      <ul className='nav-buttons my-auto flex flex items-center'>
        <li className='mx-6'><a href="#" >Danseaza cu mine!</a></li>
        <li className='mx-6'><a href="#">Viziunea mea</a></li>
        <li className='mx-6'><a href="#">Experienta</a></li>
        <li className='mx-6'><a href="#">LOG IN</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
