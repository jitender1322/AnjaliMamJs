import React, { useRef } from 'react'

export default function UseRefExp1() {
    const inputRef = useRef(null);

    const handleSubmit=()=>{
        inputRef.current.focus();
    }
  return (
    <>
        <input ref={inputRef} type="text" />
        <button onClick={handleSubmit}>click</button>
    </>
  )
}
