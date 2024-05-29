import React, { useContext } from 'react'

export default function UseContextExp3() {
    let record = useContext(myContext);
    return (
        <div>
            {record}
        </div>
    )
}
