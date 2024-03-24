import React from 'react'
import './OnlineOfflineBtn.css'
import { Link } from 'react-router-dom'

function OnlineOfflineBtn({ onlineOffline }) {
    return (
        <Link to={`${onlineOffline}`} relative="path">
            <div className=' flex flex-col mx-8 onlineOfflineButton'>
                <h2 className='my-2'>{onlineOffline.toUpperCase()}</h2>
                <img src={`${onlineOffline}Course.png`} alt="onlineOfflineImg" className='onlineOfflineImg' />
            </div>
        </Link>
    )
}

export default OnlineOfflineBtn
