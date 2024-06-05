import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const nav = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => nav('/home', { replace: true })}>sign up</button>
        </div>
    )
}
