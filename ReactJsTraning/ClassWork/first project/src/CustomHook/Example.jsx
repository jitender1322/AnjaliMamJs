import React from 'react'
import useCustomHook from './useCustomHook'

export default function Example() {
    const [count, addCount, removeCount] = useCustomHook();
    return (
        <div>
            {count}
            <button onClick={addCount} >add</button>
            <button onClick={removeCount} >remove</button>
        </div>
    )
}
