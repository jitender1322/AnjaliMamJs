import React from 'react'
import { Link } from 'react-router-dom'
export default function AboutComponent() {
    return (
        <div>
            <h1>About Component</h1>
            <Link to={"/contact"}>to contact</Link>
        </div>
    )
}
