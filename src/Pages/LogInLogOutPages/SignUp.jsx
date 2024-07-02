import React from 'react'
import SignUpForm from '../../Components/LogInForm/SignUpForm'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function SignUp() {
    return (
        <div className="mx-auto w-full">
            <Navbar />
            <div className='flex flex-col justify-center items-center text-center mx-auto mb-20'>

                <SignUpForm />
            </div>
            <Footer />
        </div>

    )
}

export default SignUp
