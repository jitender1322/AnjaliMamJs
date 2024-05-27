import React, { useState } from 'react'
import "./Text.css"

export default function TextEditor() {
    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");

    const lowerCase = ()=>{
        let newValue= input.toLowerCase();
        setOutput(newValue);
    };
    const upperCase = ()=>{
        let newValue= input.toUpperCase();
        setOutput(newValue);
    };
    const capitalize = ()=>{
        let newValue= input.split('');
        let updateValue=newValue[0].toUpperCase() + newValue.join('').slice(1);
        setOutput(updateValue)
    };
    const totalChar=()=>{
        let newValue = input.replace(/\s/g, "")
        setOutput(newValue.length);
    };
    const totalWords=()=>{
        let newValue = input.split(/\s/g).length;
        setOutput(newValue);
    }
    const reverse = ()=>{
        let newValue=input.split('').reverse().join('');
        setOutput(newValue)
    }
    const reset =()=>{
        setOutput(input)
    }
  return (
    <div>
        <div className="container">
            <h1>TEXT EDITOR</h1>
            <div className="main">
                <div className="input">
                    <h2>Input</h2>
                    <textarea onChange={(e)=>setInput(e.target.value)}></textarea>
                </div>
                <div className="output">
                    <h2>Output</h2>
                    <textarea disabled value={output}> </textarea>
                </div>
            </div>
            <div className="buttons">
                <button onClick={lowerCase}>LowerCase</button>
                <button onClick={upperCase}>UpperCase</button>
                <button onClick={capitalize}>Capitalize</button>
                <button onClick={totalChar}>Total Charcter</button>
                <button onClick={totalWords}>Total Words</button>
                <button onClick={reverse}>Reverse Order</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}
