import React from "react";

import { Header } from "../Organisms/Header";
import { Information } from "../Organisms/Information";
import { Sns } from "../Organisms/Sns";
import { Manual1 } from "../Organisms/SetLayout/Manual1";
import { Question } from "../Organisms/SetLayout/Question";
import { Voice } from "../Organisms/SetLayout/Voice";
import { Footer } from "../Organisms/Footer";
import { Manual } from "../Organisms/SetLayout/Manual";

export const Set = () => {
  return (
    <div className="container">
      <Header />

      <Manual />

      <Information />

      <div className="flex justify-center">
        <picture>
          <img src="https://dummyimage.com/250x/250/fff" alt="goods" />
        </picture>
      </div>

      <Sns />

      <Manual1 />

      <Question />

      <Voice />

      <Footer />
    </div>
  );
};
