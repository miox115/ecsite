import { NewsButton } from "../Atoms/Button/NewsButton";

export const News = () => {
  return (
    <div className="m-auto w-3/5">
      <div className="col-12">
        <dl className="flex border-b-2 m-2">
          <span className="p-2 font-bold">2023/ 7/18</span>
          <NewsButton title="プレリリース" />
          <a href="/News">開発中の商品を販売中！</a>
        </dl>

        <dl className="flex border-b-2 m-2">
          <span className="p-2 font-bold">2023/ 6/25</span>
          <NewsButton title="お知らせ" />
          <a href="/News">イベントの開催が決定！</a>
        </dl>

        <dl className="flex border-b-2 m-2">
          <span className="p-2 font-bold">2023/ 5/20</span>
          <NewsButton title="お知らせ" />
          <a href="/News">人気急上昇のあの商品を通販で販売決定！</a>
        </dl>

        <dl className="flex border-b-2 m-2">
          <span className="p-2 font-bold">2023/ 4/ 7</span>
          <NewsButton title="プレリリース" />
          <a href="/News">休暇いたします！</a>
        </dl>
      </div>
    </div>
  );
};
