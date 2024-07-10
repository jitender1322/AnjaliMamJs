import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(10);
    // function doSomething() {
    //     console.warn("-------do something")
    //     return num1 * 10
    // }
    const useData = useMemo(() => {
        console.warn('usememo')
        return num1 * 10
    }, [num1])
    return (
        <div>
            <h1>{num1}</h1>
            <h3>{useData}</h3>
            <button onClick={() => setNum1(num1 + 1)} >Count + 1</button>
            <h2>{num2}</h2>
            <button onClick={() => setNum2(num2 + 10)} >Count + 10</button>
        </div>
    )
}
