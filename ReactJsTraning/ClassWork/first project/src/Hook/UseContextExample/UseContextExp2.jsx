import React, { createContext, useState } from 'react'
import UseContextExp4 from './UseContextExp4';
export const myContext = createContext();

export default function UseContextExp2() {
    const [name, setName] = useState('');
    const [sub, setSub] = useState('');
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <input type="text" onChange={(e) => setSub(e.target.value)} />

            <myContext.Provider value={{ name, sub }}>
                <UseContextExp4 />
            </myContext.Provider>
        </div>

    )
}
