import React, { useEffect, useRef, useState } from 'react'

export default function UseRefExp2() {
    const [count,setCount]=useState(0);
    let prevCount=useRef();
    useEffect(()=>{
        prevCount.current=count;
    },[count])
  return (
    <div>
        <p>Current value : {count}</p>
        <p>Current value : {prevCount.current}</p>
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
