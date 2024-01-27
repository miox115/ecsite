import React from "react";
import { FaGithub } from "react-icons/fa";

import { RequestButton } from "../Atoms/Button/RequestButton";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center m-4">
        <div className="m-4">
          <a href="#">
            <img src="https://dummyimage.com/30x30/000/fff" alt="miox" />
          </a>
          <p>miox,inc.</p>
        </div>
        <div className="flex m-4">
          <h3 className="text-6xl">
            {" "}
            <FaGithub />{" "}
          </h3>
          <h3 className="text-6xl">
            {" "}
            <FaGithub />{" "}
          </h3>
          <h3 className="text-6xl">
            {" "}
            <FaGithub />{" "}
          </h3>
        </div>

        <RequestButton className="m-4">ログイン</RequestButton>

        <div classNama="m-4">
          <li>
            <a href="#">会社情報</a>
          </li>
          <li>
            <a href="#">会社概要</a>
          </li>
          <li>
            <a href="#">製造</a>
          </li>
          <li>
            <a href="#">取材</a>
          </li>
        </div>
        <div className="m-4">
          <li>
            <a href="#">IR</a>
          </li>
          <li>
            <a href="#">トップ</a>
          </li>
          <li>
            <a href="#">ニュース</a>
          </li>
        </div>
      </div>
      <div className="m-4">
        <p className="flex justify-center">miox,inc</p>
      </div>
    </footer>
  );
};
