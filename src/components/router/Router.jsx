import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Start } from '../pages/Start'
import { Shop } from '../pages/Shop'
import { Page404 } from '../pages/Page404'
import { Login } from '../pages/Login'

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Start" element={<Start />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
