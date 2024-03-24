import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import Promotions from './Pages/Promotions'
import Videos from './Pages/Videos'
import VideosOnline from './Pages/VideosOnline'
import VideosOffline from './Pages/VideosOffline'
import Vision from './Pages/Vision'

function App() {

  return (
    <Router>
      <div className='App w-full mx-auto'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/promotions" Component={Promotions} />
          <Route path="/videos" Component={Videos} />
          <Route path="/videos/online" Component={VideosOnline} />
          <Route path="/videos/offline" Component={VideosOffline} />
          <Route path="/vision" Component={Vision} />
          <Route path="/logIn" Component={LogIn} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
