import React from 'react'
import { Link } from 'react-router-dom'

export default function Home1() {

    return (
        <div>
            <h1>Home1</h1>
            <Link to={'/location'} ><button>go to location</button></Link>
        </div>
    )
}
