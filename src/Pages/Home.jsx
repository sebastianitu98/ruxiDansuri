import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Promotions from '../Components/Promotions/Promotions'
import Presentation from '../Components/Presentation/Presentation'
import Opinions from '../Components/Opinions/Opinions'
import Footer from '../Components/Footer/Footer'
import HomeContactSection from '../Components/HomeComponents/HomeContactSection/HomeContactSection'
import HomeOnlineOffline from '../Components/HomeComponents/HomeOnlineOffline/HomeOnlineOffline'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import WorkTogetherSection from '../Components/HomeComponents/WorkTogetherSection/WorkTogetherSection'

function Home() {
    return (
        <div className='home flex flex-col mx-auto justify-center w-full'>
            <Navbar />
            {/* <Promotions /> */}
            {/* <Presentation /> */}
            <HomeContactSection />

            {/* OPINIONS ELEMENT */}
            <TitleHeader componentSrc={'homePage'} text={'Și tu te poți simți așa!'} backgroundImgWidth={'900'} />
            <Opinions />

            {/* COURSES COMPONENT */}
            <TitleHeader componentSrc={'homePage'} text={'Ești gata să faci o schimbare?'} backgroundImgWidth={'1200'} />
            <HomeOnlineOffline />

            <WorkTogetherSection />

            <Footer />
        </div>
    )
}

export default Home
