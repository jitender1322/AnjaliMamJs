import React, { createContext, useState } from 'react'

export const themeContext = createContext()

export default function ParentTheme({ children }) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    }
    return (
        <div>
            <themeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </themeContext.Provider>
        </div>
    )
}
