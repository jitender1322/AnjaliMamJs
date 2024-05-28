import React, { useRef } from 'react'

export default function UseRefExp3() {
    let name=useRef("");
    let mail=useRef("");
    let handleClick=()=>{
        let nValue = name.current.value; 
        let mValue = mail.current.value; 

        alert(`name = ${nValue} - Email = ${mValue}`)
    }
  return (
    <div>
        <input ref={name} type="text" placeholder='Enter Name' />
        <input ref={mail} type="mail" placeholder='Enter Email' />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
