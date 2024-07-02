import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function LinkForResetSent() {

    const isLoading = false

    return (
        <div className='mx-auto w-full'>
            <Navbar />
            <div className='flex flex-col justify-center items-center text-center mx-auto w-full logInPage linkForResetSentPage' >
                <div className='resetPasswordTextHeader flex flex-col mx-auto items-center justify-center text-zinc-950 w-full'>

                    <p className='logInPageTitle'>Link-ul pentru resetarea parolei a fost trimis în inbox-ul tău.</p>

                    <button disabled={isLoading} className='logInPageButton'>Înapoi spre Logare</button>

                </div >
            </div>
            <Footer />
        </div>
    )
}

export default LinkForResetSent
