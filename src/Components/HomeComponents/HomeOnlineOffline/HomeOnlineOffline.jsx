import React from 'react'
import OnlineOfflineCourses from '../OnlineOffline/OnlineOfflineCourses'


function HomeOnlineOffline() {
    return (
        <div id='homeOnlineOffline' className='mx-auto'>
            <div className='my-4 mx-auto flex'>
                <OnlineOfflineCourses onlineOffline={'online'} />
                <OnlineOfflineCourses onlineOffline={'offline'} />
            </div>
        </div>
    )
}

export default HomeOnlineOffline
