import { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginProvider = (props) => {
  const [ loginUser, setLoginUser ] = useState(null);
  const { children } = props;

  return (
    <LoginContext.Provider value={{loginUser, setLoginUser}}>
      {children}
    </LoginContext.Provider>
  );
};
