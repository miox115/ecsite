import React from "react";

import { Header } from "../Organisms/Header";
import { Manual } from "../Organisms/SetLayout/Manual";
import { Byu } from "../Organisms/SetLayout/Byu";
import { Picky } from "../Organisms/SetLayout/Picky";
import { Sns } from "../Organisms/Sns";
import { Question } from "../Organisms/SetLayout/Question";
import { Voice } from "../Organisms/SetLayout/Voice";
import { Footer } from "../Organisms/Footer";

export const Set = () => {
  return (
    <div className="container">
      <Header />

      <Manual />

      <Byu />

      <Picky />

      <Sns />

      <Question />

      <Voice />

      <Footer />
    </div>
  );
};
