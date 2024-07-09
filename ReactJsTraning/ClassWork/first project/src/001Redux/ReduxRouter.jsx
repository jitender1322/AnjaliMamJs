import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './App/store'
import ProductComponent from './ProductComponent'

export default function ReduxRouter() {
  return (
    <div>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={ProductComponent} ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
