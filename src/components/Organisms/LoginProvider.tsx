import React, { FC, createContext, useState } from "react";

type LoginObject = {
  loginUser: boolean;
  setLoginUser: boolean;
};

type Props = {
  children: React.ReactNode;
};

export const LoginContext = createContext<LoginObject>({});

export const LoginProvider: FC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState(LoginContext);

  const contextValue: LoginObject = {
    loginUser,
    setLoginUser,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
