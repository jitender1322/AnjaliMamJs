import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const nav = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => nav("/contact")} >go to contact</button>
            <button onClick={() => nav(1)} >Go Next</button>
            <button onClick={() => nav(-1)} >Go BACK</button>
        </div>
    )
}
