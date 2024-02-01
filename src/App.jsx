import { useState } from 'react'
import './App.css'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Presentation from './Components/Presentation/Presentation'
import Opinions from './Components/Opinions/Opinions'
import Footer from './Components/Footer/Footer'
import Promotions from './Components/Promotions/Promotions'

function App() {

  return (
    <div className='App flex flex-col mx-auto justify-center'>
      <Navbar />
      <Promotions />
      <Presentation />
      <Opinions />
      <Footer />
    </div>
  )
}

export default App
