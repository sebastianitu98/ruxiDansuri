import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ThumbNailOrVideo from '../Components/ThumbNailOrVideo/ThumbNailOrVideo';
import OnlineOfflineBtn from '../Components/ThumbNailOrVideo/OnlineOffline/OnlineOfflineBtn';

function Videos() {

    return (
        <div className='mt-48 mx-auto flex flex-col'>
            <Navbar />
            <div className='my-20 mx-auto flex mx-auto'>
                <OnlineOfflineBtn onlineOffline={'online'} />
                <OnlineOfflineBtn onlineOffline={'offline'} />
            </div>
            <p className='mx-40'>Aici vor fi două imagini din cursurile online și offline.
                În momentul în care glisează cu mouse-ul peste ele, mi-
                aș dori același lucru, să se marească un pic imaginea.
                De asemenea, aș vrea ca atunci când apasă pe imagine,
                sa le redirecționeze către cele două pagini unde este
                descris fiecare serviciu separat. </p>
        </div>
    )
}

export default Videos
