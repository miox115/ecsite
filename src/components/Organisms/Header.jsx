import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul className="flex justify-end m-4">
        <li>
          <Link to="/" className="m-2">
            ホーム
          </Link>
        </li>
        <li>
          <Link to="/Set" className="m-2">
            セット販売
          </Link>
        </li>
        <li>
          <Link to="/Shop" className="m-2">
            ショップ
          </Link>
        </li>
        <li>
          <Link to="/Login" className="m-2">
            ログイン
          </Link>
        </li>
      </ul>
    </>
  );
};
