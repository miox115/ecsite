import React from "react";

import { Header } from "../Organisms/Header";
import { Sns } from "../Organisms/Sns";
import { Picky } from "../Organisms/SetLayout/Picky";
import { Question } from "../Organisms/SetLayout/Question";
import { Voice } from "../Organisms/SetLayout/Voice";
import { Footer } from "../Organisms/Footer";
import { Manual } from "../Organisms/SetLayout/Manual";

export const Set = () => {
  return (
    <div className="container">
      <Header />

      <Manual />

      <Picky />

      <Sns />

      <Question />

      <Voice />

      <Footer />
    </div>
  );
};
