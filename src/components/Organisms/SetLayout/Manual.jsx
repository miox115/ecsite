import React from "react";

import MacronImg from "../../../img/img/macron.jpg";
// import PrimaryButton from "../Atoms/Button/PrimaryButton"

export const Manual = () => {
  return (
    <>
      <div className="flex w-3/4">
        <div className="w-1/2">
          <img src={MacronImg} alt="macron" />
        </div>
        <div className="w-1/2">
          <p className="flex justify-start pl-5">コースの特典</p>
          <p className="flex justify-start pl-5">お菓子＆麺のセット</p>
          <p className="flex justify-start pl-5">価格：<span>￥５,０００</span></p>
        </div>
      </div>
      <div className="w-1/4"></div>
    </>
  );
};
