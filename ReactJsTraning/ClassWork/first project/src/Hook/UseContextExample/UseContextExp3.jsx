import React, { useContext } from 'react'
import { myContext } from './UseContextExp1';

export default function UseContextExp3() {
    let record = useContext(myContext);
    return (
        <div>
            {record}
        </div>
    )
}
