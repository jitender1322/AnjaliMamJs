import React, { useContext } from 'react'
import { themeContext } from './ParentTheme'

export default function ChildTheme() {
    const { theme, toggleTheme } = useContext(themeContext);
    const myStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    }
    return (
        <div style={{ backgroundColor: myStyle.backgroundColor, color: myStyle.color }}>
            <h1>current theme is {theme}</h1>
            <button onClick={toggleTheme}>change</button>
        </div>
    )
}
