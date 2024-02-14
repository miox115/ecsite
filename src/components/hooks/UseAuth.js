import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useCallback((id) => {
    if ((id === 1)) {
      navigate("/Cart");
    } else {
      alert("ユーザーが見つかりません");
    }
    // .catch(()=>alert("ログインできません"))
  }, [navigate]);
  return { login };
};
