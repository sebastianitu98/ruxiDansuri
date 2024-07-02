import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ResetPasswordForm() {

  const [email, setEmail] = useState('')
  const resetPasswordResponseMessage = "Ai resetat parola cu succes"
  const isLoading = false

  const handleSubmitResetPassword = async (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className='mt-40 flex flex-col mx-auto items-center justify-center text-zinc-950 w-full'>
      <form className='logInPage flex flex-col w-full mx-auto' onSubmit={handleSubmitResetPassword}>

        <h3 className='logInPageTitle'>Resetează parola</h3>

        {resetPasswordResponseMessage && <div className='error logInPageLabel'>{resetPasswordResponseMessage}</div>}

        <label className='logInPageLabel'>Adresa ta de email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='logInPageInput' placeholder='Adresa ta de email' />

        <button disabled={isLoading} className='logInPageButton'>Resetează parola</button>

        <div className="logInPageFooter flex justify-between w-full mx-auto">
          <p className='logInPageFooterText'>Nu ai cont?<Link to="/signUp" relative="path" className='underline'>Înregistrează-te</Link></p>
          <p className='logInPageFooterText'> <Link to="/linkForResetSent" relative="path" className='underline'>Loghează-te</Link></p>
        </div>

      </form>
    </div>
  )
}

export default ResetPasswordForm
