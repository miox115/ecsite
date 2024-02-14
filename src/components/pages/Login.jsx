import { useState } from "react";
import { LoginButton } from "../Atoms/Button/LoginButton";
import { Header } from "../Organisms/Header";
import { useAuth } from "../hooks/UseAuth";

export const Login = () => {
  const { login } = useAuth();

  const onClickLogin = () => {
    login(userId);
    //カスタムフックから取得したloginとTextBoxに入力したuserIdを引数にすることでIdが一致したときに画面の遷移ができるようになる。
  };

  const [userId, setUserId] = useState("");

  const onChangeUserId = (e) => {
    return setUserId(e.target.value);
  };

  return (
    <>
      <Header />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ログイン
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                メールアドレス
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  パスワード
                </label>
              </div>
              <div className="mt-2">
                <input
                  id={userId}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onClick={onClickLogin}
                  onChange={onChangeUserId}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
          <LoginButton />
        </div>
      </div>
    </>
  );
};
