import React from 'react'
import './OnlineOfflineCourses.css'
import { Link } from 'react-router-dom'

function OnlineOfflineCourses({ onlineOffline }) {
    return (
        <div id='onlineOfflineCoursesComponent' className='flex flex-col mx-4 text-left'>
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

            <span className='onlineOfflineCoursesComponentTitleText my-2'>Cursuri {onlineOffline == 'online' ? 'online' : 'fizice'}</span>

            <span className='onlineOfflineCoursesComponentDescriptionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            <Link to={`videos/${onlineOffline}`} relative="path" className='flex onlineOfflineCoursesButton my-2'>
                <span>Descoperă cursul</span>
                <img src="arrowRight16px.png" alt="arrowRight" />
            </Link>


            {/* <Link to={`${onlineOffline}`} relative="path">
                <div className=' flex flex-col mx-8 onlineOfflineButton'>
                    <h2 className='my-2'>{onlineOffline.toUpperCase()}</h2>
                    <img src={`${onlineOffline}Course.png`} alt="onlineOfflineImg" className='onlineOfflineImg' />
                </div>
            </Link> */}
        </div>
    )
}

export default OnlineOfflineCourses
