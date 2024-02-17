import { createContext, useState } from "react";

export const LoginContext = (props) => {
  const LoginContext = createContext();
  const { loginUser, setLoginUser } = useState;
  const { children } = props;

  return (
    <LoginContext.Provider value={(loginUser, setLoginUser)}>
      {children}
    </LoginContext.Provider>
  );
};
