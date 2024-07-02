import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LogInForm from '../../Components/LogInForm/LogInForm'
import Footer from '../../Components/Footer/Footer'

function LogIn() {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div id='logInPage' className='flex flex-col justify-center items-center text-center mx-auto w-full mb-20'>

                <LogInForm />

            </div>
            <Footer />
        </div>
    )
}

export default LogIn
