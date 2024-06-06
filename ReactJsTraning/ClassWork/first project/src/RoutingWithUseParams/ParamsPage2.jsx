import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamsPage2() {
    const value = useParams();
    return (
        <div>
            <h2>ParamsPage2</h2>
            <p>{value.id}</p>
            <p>{value.name}</p>
        </div>
    )
}
