import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Promotions from '../Components/Promotions/Promotions'
import Presentation from '../Components/Presentation/Presentation'
import Opinions from '../Components/Opinions/Opinions'
import Footer from '../Components/Footer/Footer'

function Home() {
    return (
        <div className='home flex flex-col mx-auto justify-center'>
            <Navbar />
            <Promotions />
            <Presentation />
            <Opinions />
            <Footer />
        </div>
    )
}

export default Home
