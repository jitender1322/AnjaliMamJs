import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './RoutingWithUseNavigate/HomePage'
import ContactPage from './RoutingWithUseNavigate/ContactPage'
import AboutPage from './RoutingWithUseNavigate/AboutPage'
import PageNotFound from './RoutingWithUseNavigate/PageNotFound'
import Home from './RoutingWithUseNavigate/ReplaceInUseNavigate/Home'
import Login from './RoutingWithUseNavigate/ReplaceInUseNavigate/Login'
import Home1 from './RoutingWithUseLocation/Home1'
import Location1 from './RoutingWithUseLocation/Location1'
import Input from './RoutingWithUseLocation/Input'
import Output from './RoutingWithUseLocation/Output'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<HomePage />} ></Route>
          <Route path='/contact' element={<ContactPage />} ></Route>
          <Route path='/about' element={<AboutPage />} ></Route>
          <Route path='*' element={<PageNotFound />} ></Route> */}
          {/* <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route> */}
          {/* <Route path='/' element={<Home1 />}></Route>
          <Route path='/location' element={<Location1 />}></Route> */}
          <Route path='/' element={<Input />}></Route>
          <Route path='/output' element={<Output />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
