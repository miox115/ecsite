import MacronImg from "../../../img/img/macron.jpg";
import { PrimaryButton } from "../../Atoms/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const HomeMain = () => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/Shop");
  };

  return (
    <div className="text-center">
      <section className="flex justify-center">
        <div className="text-center">
          <img src={MacronImg} alt="Macron" />
          <PrimaryButton onClick={onClickHandle} />
        </div>
      </section>
    </div>
  );
};
