import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Output() {
    const location = useLocation();
    return (
        <div>
            <h1>Value from another component : {location.state.name}</h1>
        </div>
    )
}
