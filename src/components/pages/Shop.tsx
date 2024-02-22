import { Header } from "../Organisms/Header";
import { ShopList } from "../Organisms/ShopLayout/ShopList";
import { Information } from "../Organisms/Information";
import { SetList } from "../Organisms/ShopLayout/SetList";
import { Food } from "../Organisms/ShopLayout/Food";
import { Candy } from "../Organisms/ShopLayout/Candy";
import { Noodle } from "../Organisms/ShopLayout/Noodle";
import { Dry } from "../Organisms/ShopLayout/Dry";
import { Footer } from "../Organisms/Footer";

export const Shop = () => {
  return (
    <>
      <Header />

      <ShopList />

      <Information />

      <SetList />

      <Food />

      <Candy />

      <Noodle />

      <Dry />

      <Footer />
    </>
  );
};
