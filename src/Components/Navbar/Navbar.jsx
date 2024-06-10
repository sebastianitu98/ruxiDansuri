import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import './Navbar.css'

function Navbar() {
  const [navToggled, setNavToggled] = useState(false)
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleToggleNavigation = (e) => {
    e.preventDefault()
    setNavToggled(!navToggled)
  }

  return (
    <nav className='navbar flex justify-center mx-auto py-4 text-center w-full fixed top-0 left-0 right-0 w-full'>
      <div id='navContainer' className='flex w-full'>
        {/* LOGO SI DESCRIERE */}
        {/* <div className="nav-logo-name flex justify-center"> */}
        {/* <img src="logo.png" alt="LOGO" title='LOGO' id='logo' className='hidden' /> */}
        <p id='navLogo' className='text-center my-auto mx-2 nav-logo-name'>RUXANDRA T</p>
        {/* </div> */}

        {/* BUTOANE PT NAVIGARE LA SECTIUNEA RESPECTIVA */}
        <ul className={`navItemsList my-auto items-center ${navToggled ? 'flex' : 'hidden'}`} id="navButtons">
          <Link to="/" relative="path" className='mx-4 navLi'>Acasa</Link>
          <Link to="/aboutMe" relative="path" className='mx-4 navLi'>Despre mine</Link>
          <Link to="/videos" relative="path" className='mx-4 navLi'>Cursuri</Link>
          <Link to="/`co`ntact" relative="path" className='mx-4 navLi'>Contact</Link>
          {!user &&
            <div className='w-full flex' id='logInRegisterContainer'>
              <Link to="/logIn" relative="path" className='mx-2 logInLogOutButton'>LOG IN</Link>
              <Link to="/signUp" relative="path" className='mx-2 logInLogOutButton'>SIGN UP</Link>
            </div>
          }
          {user && < div onClick={logout}>
            <span className='mx-4 '>{user.nickname}</span>
            <button className='logInLogOutButton' >
              <Link to="/" relative="path">Log Out </Link>
            </button>
          </div>}
        </ul>
      </div>
      <button id='navHamburgerButton' onClick={handleToggleNavigation}>
        <img src="navHamburger.png" alt="Navigation" id='navHamburger' />
      </button>
    </nav>
  )
}

export default Navbar
