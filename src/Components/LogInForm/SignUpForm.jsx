import React, { useState } from 'react'
import { useSignUp } from '../../hooks/useSignup'

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
        <div className='mt-40 flex flex-col mx-auto items-center justify-center text-zinc-950'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label htmlFor="email">Email: </label>
                <input type="email" onChange={(e) => {
                    setEmail(e.target.value)
                    console.log(email)
                }} value={email} />

                <label htmlFor="password">Parola: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <label htmlFor="text">Nume de utilizator: </label>
                <input type="text" onChange={(e) => {
                    setNickname(e.target.value)
                    console.log(nickname)
                }
                } value={nickname} />

                <button disabled={isLoading}>Sign Up</button>

                {error && <div className='error'>{error}</div>}

            </form>
        </div>
    )
}

export default SignUpForm
