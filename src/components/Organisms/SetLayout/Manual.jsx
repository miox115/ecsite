import React from "react";

import MacronImg from "../../../img/img/macron.jpg";
// import PrimaryButton from "../Atoms/Button/PrimaryButton"

export const Manual = () => {
  return (
    <div>
      <img src={MacronImg} alt="macron" />
      {/* <PrimaryButton /> */}
      {/* <PrimaryButton /> */}
      <p className="flex justify-center">コースの特典</p>
      <p className="flex justify-center">説明書き</p>
      <p className="flex justify-center">説明書き</p>
    </div>
  );
};
