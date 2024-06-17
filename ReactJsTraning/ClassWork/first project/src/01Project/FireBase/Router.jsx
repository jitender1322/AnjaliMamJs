import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import Login from './Login'
import Deshboard from './Deshboard'
import Guest from './Guest'
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RegistrationPage />} ></Route>
                    <Route path='/login' element={<Login />} ></Route>
                    <Route path='/dashboard' element={<Deshboard />} ></Route>
                    <Route path='/guest' element={<Guest />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
