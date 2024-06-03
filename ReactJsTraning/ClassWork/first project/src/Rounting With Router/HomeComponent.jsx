import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeComponent() {
    return (
        <div>
            <h1>Home Component</h1>
            <Link to={"/about"} >go to about</Link>
        </div>
    )
}
