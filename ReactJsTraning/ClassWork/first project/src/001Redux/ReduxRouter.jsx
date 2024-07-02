import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainRedux from './MainRedux'

export default function ReduxRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={MainRedux}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
