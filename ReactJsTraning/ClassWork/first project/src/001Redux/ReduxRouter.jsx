import React from 'react'
import MainRedux from './MainRedux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './App/store'
import TodoComponent from './TodoComponent'

export default function ReduxRouter() {
  return (
    <div>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={TodoComponent} ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
