import React from "react";

import { NewsButton } from "../Atoms/Button/NewsButton";

export const News = () => {
  return (
    <>
      <div>
        <h1>News</h1>
      </div>

      <div className="col-12">
        <dl className="border-b-2 m-2">
          <dt className="m-2">
            <span className="p-2 font-bold">2023/7/18</span>
            <NewsButton />
          </dt>
          <dd className="m-2">
            <a href="#">開発中の商品を販売中！</a>
          </dd>
        </dl>

        <dl className="border-b-2">
          <dt className="m-2">
            <span className="p-2">2023/6/25</span>
            <span>プレリリース</span>
          </dt>
          <dd className="m-2">
            <a href="#">イベントの開催が決定！</a>
          </dd>
        </dl>

        <dl className="border-b-2">
          <dt className="m-2">
            <span className="p-2">2023/5/20</span>
            <span>プレリリース</span>
          </dt>
          <dd className="m-2">
            <a href="#">人気急上昇のあの商品を通販で販売決定！</a>
          </dd>
        </dl>

        <dl className="border-b-2">
          <dt className="m-2">
            <span className="p-2">2023/4/7</span>
            <span>お知らせ</span>
          </dt>
          <dd className="m-2">
            <a href="#">休暇いたします！</a>
          </dd>
        </dl>
      </div>
    </>
  );
};
