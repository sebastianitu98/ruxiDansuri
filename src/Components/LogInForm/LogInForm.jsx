import React, { useState } from 'react'
import { useLogIn } from '../../hooks/useLogin'

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
        <div className='mt-40 flex flex-col mx-auto items-center justify-center text-zinc-950'>
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <h3>Log In</h3>

                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label>Parola:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button disabled={isLoading}>Log In</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default LogInForm
