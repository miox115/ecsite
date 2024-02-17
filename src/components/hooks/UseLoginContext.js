import { useContext } from "react";

import { LoginContext } from "../Context/LoginProvider";

export const UseLoginContext = () => {
  useContext(LoginContext);
};
