import React from 'react'
import './HomeContactSection.css'
import { Link } from 'react-router-dom'
import SocialMediaComponent from '../SocialMediaComponent/SocialMediaComponent'

function HomeContactSection() {

    const thumbnailPathStart = 'http://img.youtube.com/vi/'
    const thumbnailPathEnd = '/maxresdefault.jpg'

    return (
        <div id='homeContactSection' className='flex mx-auto'>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer;
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
                allowFullScreen
                className='homeContactSectioniFrame'
            >
            </iframe>
            <div id='contactSectionRight' className="flex flex-col">
                <p id='homeContactSectionDescriptionText' className='my-4'>
                    Redescoperă-ți esența feminină! Exprimă-ți natura senzuală prin dans, flow și comuniune alături de mine!
                </p>

                <SocialMediaComponent socialMediaPlatform={'Instagram'} />
                <SocialMediaComponent socialMediaPlatform={'Tiktok'} />
                <SocialMediaComponent socialMediaPlatform={'YouTube'} />


                <div id="homeContactSectionButtonWrapper">
                    <Link to="/videos" relative="path" id='homeContactSectionButton' className='flex'>
                        <span className='homeContactSectionButtonText'>Danseaza cu mine</span>
                        <img src="arrowRight16px.png" alt=">" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeContactSection
