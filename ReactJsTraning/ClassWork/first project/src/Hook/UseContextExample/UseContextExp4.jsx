import React, { useContext } from 'react'
import { myContext } from './UseContextExp2'

export default function UseContextExp4() {
    const record = useContext(myContext);
    return (
        <div>
            <p>{record.name}</p>
            <p>{record.sub}</p>
        </div>
    )
}
