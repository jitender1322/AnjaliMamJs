import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './RoutingWithUseNavigate/HomePage'
import ContactPage from './RoutingWithUseNavigate/ContactPage'
import AboutPage from './RoutingWithUseNavigate/AboutPage'
import PageNotFound from './RoutingWithUseNavigate/PageNotFound'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/contact' element={<ContactPage />} ></Route>
          <Route path='/about' element={<AboutPage />} ></Route>
          <Route path='*' element={<PageNotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
