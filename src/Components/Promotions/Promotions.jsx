import React, { useState } from 'react'
import './Promotions.css'

function Promotions() {

    const [promotions, setPromotions] = useState (
        {
            course: '"How to walk and dance in heels"',
            expireDate: '15/11/2024'
        }
    )


  return (
    <div className={promotions.course != '' ? 'promotionsSection' : 'promotionsSection hidden'}>
        <p>Înscrie-te acum la următorul modul {promotions.course}</p>
        <p id='promotionDate'>Expiră pe {promotions.expireDate}</p>
    </div>
  )
}

export default Promotions
