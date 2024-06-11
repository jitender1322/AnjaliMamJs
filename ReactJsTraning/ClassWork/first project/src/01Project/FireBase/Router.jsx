import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import Login from './Login'
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RegistrationPage />} ></Route>
                    <Route path='/login' element={<Login />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
