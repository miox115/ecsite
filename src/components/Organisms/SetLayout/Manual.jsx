
import MacronImg from "../../../img/img/macron.jpg";

export const Manual = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <img src={MacronImg} alt="macron" />
        </div>
        <div className="w-1/2">
          <p className="flex justify-start pl-8">コースの特典</p>
          <p className="flex justify-start pl-8">お菓子＆麺のセット</p>
          <p className="flex justify-start pl-8">
            価格：<span>￥５,０００</span>
          </p>
        </div>
      </div>
    </>
  );
};
