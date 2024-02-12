
import { PrimaryButton } from "../../Atoms/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import Doctor from "../../../img/img/doctor.jpg";

export const Support = () => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/");
  };
  return (
    <div className="text-center m-4">
      <h2 className="text-2xl">推奨されています</h2>
      <div className="flex justify-center m-2">
        <img src={Doctor} alt="Doctor" />
      </div>
      <p className="text-sm p-4">教授推奨</p>
      <p className="p-4">博士課程終了。各種出版</p>
      <PrimaryButton onClick={onClickHandle} />
    </div>
  );
};
