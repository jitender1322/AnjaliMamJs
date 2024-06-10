import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RegistrationPage />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
