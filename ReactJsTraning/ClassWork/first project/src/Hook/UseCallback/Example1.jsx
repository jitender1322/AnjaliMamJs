import React, { useCallback, useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2';

export default function Example1() {
    const [count, setCount] = useState(0)
    const [myList, setList] = useState([]);
    const addRecord = useCallback(() => {
        setList([...myList, 'newRecord'])
    }, [myList])
    return (
        <div>
            {count}
            {/* <Component1 /> */}
            <Component2 myList={myList} addRecord={addRecord} />
            <button onClick={() => setCount(count + 1)} >Count+1</button>
        </div>
    )
}
