import React, { useState } from 'react'
import Problam2 from './Problam2';

export default function Problam1() {
    const [data, setData] = useState("");
    return (
        <div>
            <h1>First omponent</h1>
            <input type="text" onChange={(e) => setData(e.target.value)} />
            <Problam2 msg={data} />
        </div>

    )
}
