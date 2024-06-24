import React from 'react'
import './SocialMediaComponent.css'

function SocialMediaComponent({ socialMediaPlatform }) {
    return (
        <div className='relative socialMediaComponentImage'>
            <img src={`HomePageLogo${socialMediaPlatform}.png`} alt={socialMediaPlatform} className='homeContactSectionImage my-2' />
        </div>
    )
}

export default SocialMediaComponent
