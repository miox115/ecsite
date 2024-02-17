import { useContext } from "react";

import { LoginContext } from "../Organisms/CartLayout/LoginProvider";

export const UseLoginContext = () => {
  return useContext(LoginContext);
};
