import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SignUpForm from '../Components/LogInForm/SignUpForm'

function SignUp() {
    return (
        <div className='flex flex-col justify-center items-center text-center mx-auto'>
            <Navbar />
            <SignUpForm />
        </div>
    )
}

export default SignUp
