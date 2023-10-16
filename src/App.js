import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/Homepage";
// import ShopPage from "./components/Shop/ShopPage";
// import ProductPage  from "./components/Product/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/Shop" element={<ShopPage />} /> */}
          {/* <Route exact path="/Products" element={<ProductPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
