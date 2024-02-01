import React from 'react'
import './Presentation.css'

function Presentation() {
  return (
    <div className='presentation-component my-10 flex flex-col mx-auto justify-center text-center items-center'>
        <div className='mb-6 relative my-2'>
          <img src='phoneHorizontal.png' alt='phone'></img>
          <p id='presentationText'>Welcome to my world...</p>
        </div>
        <p>Sediul energiei feminine este în corp.</p>
        <p>Descoperă cum te poți conecta la această Energie Creatoare prin dans, flow și comuniune.</p>
    </div>
  )
}

export default Presentation
