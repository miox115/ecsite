import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Organisms/LoginProvider";

export const useAuth = () => {
  const navigate = useNavigate();
  const { loginUser, setLoginUser } = useContext(LoginContext);

  const login = useCallback(
    (id: number) => {
      if (id === 1) {
        const isAd = id === 1 ? true : false;
        // ログイン者だけ閲覧できるようにtrue,falseの判定をしている
        setLoginUser(isAd);
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
