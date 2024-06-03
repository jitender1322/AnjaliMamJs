import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const inputRef = useRef();
    const handleSubmit = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent ref={inputRef} />
            <button onClick={handleSubmit}  >click</button>
        </div>
    )
}
