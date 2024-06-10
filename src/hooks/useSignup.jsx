import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useAuthContext } from "./useAuthContext";


export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signUp = async (email, password, nickname) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, nickname })
        })
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }

    return { signUp, isLoading, error }
}