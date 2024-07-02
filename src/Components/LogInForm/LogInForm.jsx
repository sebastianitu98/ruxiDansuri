import React, { useState } from 'react'
import { useLogIn } from '../../hooks/useLogin'
import './LogInForm.css'
import { Link } from 'react-router-dom'

function LogInForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { logIn, error, isLoading } = useLogIn()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)

        await logIn(email, password)
    }

    return (
        <div className='mt-40 flex flex-col mx-auto items-center justify-center text-zinc-950 w-full'>
            <form className='logInPage flex flex-col w-full mx-auto' onSubmit={handleSubmit}>

                <h3 className='logInPageTitle'>LOGARE</h3>

                {error && <div className='error logInPageLabel'>{error}</div>}

                <label className='logInPageLabel'>Adresa ta de email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='logInPageInput' placeholder='Adresa ta de email' />

                <label className='logInPageLabel'>Parola ta</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='logInPageInput' placeholder='Parola ta' />


                <button disabled={isLoading} className='logInPageButton'>Log In</button>

                <div className="logInPageFooter flex justify-between w-full mx-auto">
                    <p className='logInPageFooterText'>Nu ai cont?<Link to="/signUp" relative="path" className='underline'>Înregistrează-te</Link></p>
                    <p className='logInPageFooterText'> <Link to="/resetPassword" relative="path" className='underline'>  Ți-ai uitat parola?  </Link>  </p>
                </div>

            </form>
        </div>
    )
}

export default LogInForm
