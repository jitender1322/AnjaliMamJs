import React from 'react'
import { Link } from 'react-router-dom'

export default function ParamsPage1() {
    return (
        <div>
            <h1>ParamsPage1</h1>
            <Link to={'/paramspage/1'} >id send to page2</Link><br />
            <Link to={'/paramspage/2'} >id 2 send to page2</Link><br />
            <Link to={'/paramspage/101/Jitender'} >id and name send to page2</Link>
        </div>
    )
}
