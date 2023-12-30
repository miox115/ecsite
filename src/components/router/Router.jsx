import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Start" element={<Start />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
