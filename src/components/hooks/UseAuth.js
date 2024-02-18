import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UseLoginContext } from "../hooks/UseLoginContext";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setLoginUser } = UseLoginContext();

  const login = useCallback(
    (id) => {
      if (id === "1") {
        const isAd = id === "1" ? true : false;
        // ログイン者だけ閲覧できるようにtrue,falseの判定をしている
        setLoginUser({ ...id, isAd });
        navigate("/Cart");
        console.log(isAd);
      } else {
        alert("ユーザーが見つかりません");
      }
      // .catch(()=>alert("ログインできません"))
    },
    [navigate, setLoginUser]
  );
  return { login, setLoginUser };
};
