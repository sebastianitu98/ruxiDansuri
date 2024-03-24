import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import LogInForm from '../Components/LogInForm/LogInForm'

function LogIn() {
    return (
        <div className='flex flex-col justify-center items-center text-center mx-auto'>
            <Navbar />
            <LogInForm />
        </div>
    )
}

export default LogIn
