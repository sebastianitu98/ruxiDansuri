import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function LinkForResetSent() {

    const isLoading = false

    return (
        <div className='mx-auto w-full '>
            <Navbar />
            <div className='flex flex-col justify-center items-center text-center mx-auto w-full logInPage linkForResetSentPage mb-40' >
                <div className='resetPasswordTextHeader flex flex-col mx-auto items-center justify-center text-zinc-950 w-full'>

                    <p className='logInPageTitle'>DACĂ ACEASTĂ ADRESA DE EMAIL ARE UN CONT ÎNREGISTRAT, VEȚI GĂSI PE EMAIL LINKUL PENTRU FORMULARUL DE RESETARE A PAROLEI.</p>

                    <button disabled={isLoading} className='logInPageButton'><Link to="/logIn" relative="path" className='underline'>Înapoi spre Logare</ Link > </button>


                </div >
            </div>
            <Footer />
        </div>
    )
}

export default LinkForResetSent
