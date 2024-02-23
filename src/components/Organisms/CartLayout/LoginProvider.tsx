import React, { Dispatch, FC, SetStateAction, createContext, useState } from "react";

type LoginObject = {
  isAd: boolean;
}

type Props = {
  children: React.ReactNode;
};

export const LoginContext = createContext<{
  loginUser: LoginObject,
  setLoginUser: Dispatch<SetStateAction<LoginObject>>;
}
  | undefined>(undefined)
  ;

export const LoginProvider: FC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState({ isAd: false });

  return (
    <LoginContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginContext.Provider>
  );
};
