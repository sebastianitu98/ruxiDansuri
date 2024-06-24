import React from 'react'
import './MediaLinksFooter.css'

function MediaLinksFooter({ mediaPlatform }) {
    return (
        <img src={`FooterLogo${mediaPlatform}.png`} alt={`FooterLogo${mediaPlatform}`} className='mx-4 footerLogoImage' />
    )
}

export default MediaLinksFooter
