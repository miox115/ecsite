import React, { FC, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type LoginObject = {
  isAd: boolean;
};

export const LoginContext = createContext<
  | {
      loginUser: LoginObject;
      setLoginUser: React.Dispatch<React.SetStateAction<LoginObject>>;
    }
  | undefined
>(undefined);

export const LoginProvider: FC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState({ isAd: false });

  return (
    <LoginContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginContext.Provider>
  );
};
