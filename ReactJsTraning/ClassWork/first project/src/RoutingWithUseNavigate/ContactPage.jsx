import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactPage() {
    const nav = useNavigate();
    return (
        <div>
            <h1>Contact page</h1>
            <button onClick={() => nav('/about')} >go to about</button>
            <button onClick={() => nav(1)} >Go Next</button>
            <button onClick={() => nav(-1)} >Go BACK</button>
        </div>
    )
}
