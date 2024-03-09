import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ThumbNailOrVideo from '../Components/ThumbNailOrVideo/ThumbNailOrVideo';

function Videos() {

    return (
        <div className='mt-20 mx-auto'>
            <Navbar />

            <ThumbNailOrVideo />
        </div>
    )
}

export default Videos
