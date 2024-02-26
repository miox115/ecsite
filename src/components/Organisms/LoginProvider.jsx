import { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <LoginContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginContext.Provider>
  );
};
