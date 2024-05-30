import React, { createContext, useState } from 'react'
import UseContextExp3 from './UseContextExp3';

export const myContext = createContext("");

export default function UseContextExp1() {
    const [data, setData] = useState('')
    return (
        <div>
            <h3>first componet</h3>
            <input type="text" onChange={(e) => setData(e.target.value)} />
            <myContext.Provider value={data}>
                <UseContextExp3 />
            </myContext.Provider>
        </div>
    )
}
