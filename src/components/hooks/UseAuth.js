import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoginProvider } from "../Organisms/CartLayout/LoginProvider";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setLoginUser } = LoginProvider();

  const login = useCallback(
    (id) => {
      if (id === "1") {
        const isAd = id === "1" ? true : false;
        // ログイン者だけ閲覧できるようにtrue,falseの判定をしている
        setLoginUser({ id, isAd })
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
