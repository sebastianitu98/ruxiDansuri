import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ResetPasswordForm from '../../Components/LogInForm/ResetPasswordForm'

function ResetPassword() {
    return (

        <div id='logInPage' className='flex flex-col justify-center items-center text-center mx-auto w-full'>
            <Navbar />
            <ResetPasswordForm />
        </div>
    )
}

export default ResetPassword

