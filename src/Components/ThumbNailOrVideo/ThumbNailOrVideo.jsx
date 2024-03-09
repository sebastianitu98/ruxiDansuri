import React from 'react'
import youTubeUrlParser from "js-video-url-parser";
import './ThumbNailOrVideo.css'

function ThumbNailOrVideo() {

    const user1 = { userId: 1, hasAccess: false }
    const user2 = { userId: 2, hasAccess: true }

    const thumbnailPathStart = 'http://img.youtube.com/vi/'
    const thumbnailPathEnd = '/maxresdefault.jpg'

    const pret = 500
    const currency = 'RON'

    return (
        <div className='mt-12'>
            <p className='mt-12 mb-4 videoDescription'>VIDEOCLIP NECUMPARAT</p>
            {!user1.hasAccess &&
                <div className='thumbnailOrVideoContainer'>
                    <img src={`${thumbnailPathStart + youTubeUrlParser.parse('https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH').id + thumbnailPathEnd}`}
                        alt="youTubeUrlParser.parse('https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH').id"
                        className="youTubeThumbnail"
                        width="560" height="315"
                    />
                    <button onClick={(e) => e.preventDefault()} className='thumbnailOrVideoButton'> CUMPARA PENTRU DOAR {pret} {currency} </button>
                </div>
            }
            {console.log(youTubeUrlParser.parse('https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH'))}


            <p className='my-12'></p>
            <p className='mt-16 mb-4 videoDescription'>VIDEOCLIP CUMPARAT</p>
            {user2.hasAccess &&
                <div className='thumbnailOrVideoContainer'>
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
                        allowFullScreen>
                    </iframe>
                </div>
            }
        </div>
    )
}

export default ThumbNailOrVideo
