import React from "react";
import MacronImg from "../../../img/img/macron.jpg";
import { PrimaryButton } from "../../Atoms/Button/PrimaryButton";

export const HomeMain = () => {
  return (
    <div className="text-center">
      <section className="flex justify-center">
        <div className="text-center">
          <img src={MacronImg} alt="" />
          <PrimaryButton />
        </div>
      </section>
    </div>
  );
};
