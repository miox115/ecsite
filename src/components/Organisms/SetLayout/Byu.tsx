import { PrimaryButton } from "../../Atoms/Button/PrimaryButton";

export const Byu = () => {
  return (
    <div className="fixed">
      <p>こちらでお買い求めのほうがお買い得です。</p>
      <div className="border border-sky-500 hover:border-4">
        <p>コース</p>
        <p>
          小計<span>￥３０００</span>
        </p>
        <p>さらにお得になります。</p>
        <p>初回50%OFF</p>
      </div>
      <div className="box-content">ポイントの事前購入でお得です。</div>

      <PrimaryButton onClick={undefined} />
      <PrimaryButton onClick={undefined} />
    </div>
  );
};
