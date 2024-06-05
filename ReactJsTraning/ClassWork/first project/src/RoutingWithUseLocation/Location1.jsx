import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Location1() {
    const local = useLocation();
    return (
        <div>
            <h1>use location exp</h1>
            <p>{local.pathname}</p>
            <p>{local.search}</p>
            <p>{local.hash}</p>
        </div>
    )
}
