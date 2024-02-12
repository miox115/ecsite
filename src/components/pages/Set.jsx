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
      <div className="flex">
        <div className="w-4/5">
          <Manual />

          <Picky />

          <Sns />

          <Question />

          <Voice />
        </div>

        <div className="w-1/5">
          <Byu />
        </div>
      </div>

      <Footer />
    </div>
  );
};
