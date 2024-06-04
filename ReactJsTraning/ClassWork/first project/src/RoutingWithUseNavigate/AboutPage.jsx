import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {
    const nav = useNavigate()
    return (
        <div>
            <h1>About page</h1>
            <button onClick={() => nav(1)} >Go Next</button>
            <button onClick={() => nav(-1)} >Go BACK</button>
        </div>
    )
}
