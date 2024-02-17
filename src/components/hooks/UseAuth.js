import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UseLoginContext } from "../hooks/UseLoginContext";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setLoginUser } = UseLoginContext();

  const login = useCallback(
    (id) => {
      if (id === "1") {
        setLoginUser(id);
        navigate("/Cart");
      } else {
        alert("ユーザーが見つかりません");
      }
      // .catch(()=>alert("ログインできません"))
    },
    [navigate, setLoginUser]
  );
  return { login, setLoginUser };
};
