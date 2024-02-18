import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Set } from "../pages/Set";
import { Shop } from "../pages/Shop";
import { Page404 } from "../pages/Page404";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { LoginProvider } from "../Organisms/CartLayout/LoginProvider";
import { UseLoginContext } from "../hooks/UseLoginContext";

export const Router = () => {
  const { loginUser } = UseLoginContext;

  const isAd = loginUser?.isAd;

  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Set" element={<Set />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Login" element={<Login />} />
            {isAd && <Route path="/Cart" element={<Cart />} />}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </LoginProvider>
      </BrowserRouter>
    </>
  );
};
