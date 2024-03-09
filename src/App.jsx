import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import Promotions from './Pages/Promotions'
import Videos from './Pages/Videos'

function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/promotions" Component={Promotions} />
          <Route path="/videos" Component={Videos} />
          <Route path="/logIn" Component={LogIn} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
