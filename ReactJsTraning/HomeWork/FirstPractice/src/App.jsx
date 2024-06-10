import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Form from './RouterTask/Form'
import Home from './RouterTask/Home'
import Task from './CustomCreation/TaskManager/Task'
export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/form"} element={<Form />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Task />
    </div>
  )
}
