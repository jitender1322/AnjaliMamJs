import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './Rounting With Router/HomeComponent'
import ContactComponent from './Rounting With Router/ContactComponent'
import AboutComponent from './Rounting With Router/AboutComponent'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent />} ></Route>
          <Route path='/contact' element={<ContactComponent />} ></Route>
          <Route path='/about' element={<AboutComponent />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
