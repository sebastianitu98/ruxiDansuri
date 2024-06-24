import React from 'react'
import { Link } from 'react-router-dom'
import './WorkTogetherSection.css'

function WorkTogetherSection() {
    return (
        <div id='workTogetherComponent' className='relative'>
            <img src="WorkTogetherImage.png" alt="Work Together" id='workTogetherImage' />
            <div id="workTogetherComponentTextAndButtton">
                <span className='my-5' id='workTogetherComponentText' >VREI SĂ LUCRĂM ÎMPREUNĂ?</span>
                <Link to="/videos" relative="path" id='workTogetherComponentButtton' className='flex text-ellipsis px-4 my-2 mx-auto'>
                    <span className=''>Dansează cu mine</span>
                    <img src="arrowRight16px.png" alt=">" />
                </Link>
            </div>
        </div>
    )
}

export default WorkTogetherSection
