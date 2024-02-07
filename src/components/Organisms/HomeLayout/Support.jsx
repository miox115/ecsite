import React from "react";
import { PrimaryButton } from "../../Atoms/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const Support = () => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/");
  };
  return (
    <div className="text-center">
      <h2>推奨されています</h2>
      <div className="flex justify-center m-2">
        <img src="https://dummyimage.com/800x200/000/fff" alt="" />
      </div>
      <p>教授推奨</p>
      <p>博士課程終了。各種出版</p>
      <PrimaryButton onClick={onClickHandle} />
    </div>
  );
};
