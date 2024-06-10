import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './Pages/Home'
import Promotions from './Pages/Promotions'
import Videos from './Pages/Videos'
import VideosOnline from './Pages/VideosOnline'
import VideosOffline from './Pages/VideosOffline'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import './App.css'
import Contact from './Pages/Contact'
import AboutMe from './Pages/AboutMe'


function App() {
  const { user } = useAuthContext()
  return (
    <Router>
      <div className='App w-full mx-auto'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/promotions" Component={Promotions} />
          <Route path="/videos" Component={Videos} />
          <Route path="/videos/online" Component={VideosOnline} />
          <Route path="/videos/offline" Component={VideosOffline} />
          <Route path="/contact" Component={Contact} />
          <Route path="/logIn" element={!user ? <LogIn /> : <Navigate to='/videos' />} />
          <Route path="/signUp" element={!user ? <SignUp /> : <Navigate to='/videos' />} />
          <Route path="/aboutMe" Component={AboutMe} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
