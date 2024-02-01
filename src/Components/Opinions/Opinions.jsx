import React from 'react'
import './opinions.css'

function Opinions() {

    let opinions = [{
        opinion: "BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA"
    },
    {
        opinion: "Cel mai frumos curs! Recomand! Ruxandra m-a invatat sa danses exceptional si ii voi ramane vesnic recunoscatoare!"
    },
    {
        opinion: "Multumesc pentu momentele si realizarile nemaipomenite! Iti doresc mult succes in continuare!"
    }
    ]

  return (
    <div className='opinionSection flex flex-col'>
        <p className='opinionsDescription my-2'>CE SPUN CURSANTELE MELE?</p>
        <div className='flex'>
            {
                opinions.map((el, index) => 
                    <div key={index} className='opinionElement flex mx-auto relative my-8'>
                        <img src='phoneVertical.png' alt='Phone' className='mx-auto'/>
                        <p className='opinionDescription'>{el.opinion}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Opinions
