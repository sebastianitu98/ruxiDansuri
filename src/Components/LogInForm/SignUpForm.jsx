import React, { useState } from 'react'
import { useSignUp } from '../../hooks/useSignup'
import { Link } from 'react-router-dom'

function SignUpForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const { signUp, error, isLoading } = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp(email, password, nickname)
    }

    return (
        <div className='mt-40 flex flex-col mx-auto items-center justify-center text-zinc-950 logInPage w-full'>
            <form className='flex flex-col w-full' onSubmit={handleSubmit}>

                <h3 className='logInPageTitle'>ÎnregisTRARE</h3>

                {error && <div className='error logInPageLabel'>{error}</div>}

                <label htmlFor="text" className='logInPageLabel'>Numele tău* </label>
                <input type="text" onChange={(e) => {
                    setNickname(e.target.value)
                    console.log(nickname)
                }
                } value={nickname} className='logInPageInput' placeholder='Numele tău' />

                <label htmlFor="email" className='logInPageLabel'>Adresa ta de email*</label>
                <input type="email" onChange={(e) => {
                    setEmail(e.target.value)
                    console.log(email)
                }} value={email} className='logInPageInput' placeholder='Adresa ta de email' />

                <label htmlFor="password" className='logInPageLabel'>Parola ta*</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='logInPageInput' placeholder='Parola ta' />



                <button disabled={isLoading} className='logInPageButton'>Sign Up</button>

                <div className="logInPageFooter flex justify-between w-full mx-auto">
                    <p className='logInPageFooterText' ><Link to="/logIn" relative="path" className='underline'>Ai deja cont? </Link></p>
                    <p className='logInPageFooterText'> <Link to="/logIn" relative="path" className='underline'>  Loghează-te   </Link> </p>
                </div>

            </form>
        </div>
    )
}

export default SignUpForm
