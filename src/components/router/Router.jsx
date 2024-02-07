import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Set } from "../pages/Set";
import { Shop } from "../pages/Shop";
import { Page404 } from "../pages/Page404";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Set" element={<Set />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
