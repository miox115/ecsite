import React from "react";

import { Header } from "../Organisms/Header";
import { HomeMain } from "../Organisms/HomeLayout/HomeMain";
import { Information } from "../Organisms/Information";
import { FirstPromote } from "../Organisms/HomeLayout/FirstPromote";
import { SecondPromote } from "../Organisms/HomeLayout/SecondPromote";
import { News } from "../Organisms/News";
import { Sns } from "../Organisms/Sns";
import { Support } from "../Organisms/HomeLayout/Support";
import { Footer } from "../Organisms/Footer";

export const Home = () => {
  return (
    <>
      <Header />

      <HomeMain />

      <Information />

      <FirstPromote />

      <SecondPromote />

      <News />

      <Sns />

      <Support />

      <Footer />
    </>
  );
};
