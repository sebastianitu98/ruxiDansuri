import React from 'react'
import './OpinionCard.css'

function OpinionCard({ key, opinionLink, selected }) {
    return (
        <div className={`opinionCard ${selected}`} key={key} opinionLink={opinionLink}>
            <iframe width="560" height="315"
                src={`${opinionLink}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer;
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default OpinionCard
