import React from 'react'

export const News = () => {
  return (
    <>
      <div>
        <h1>News</h1>
      </div>

      <div className="col-12">
        <dl>
          <dt><span>2023/7/18</span><span className="btn" href="#">お知らせ</span></dt>
          <dd><a href="#">開発中の商品を販売中！</a></dd>
        </dl>
        <dl>
          <dt><span>2023/6/25</span><span className="btn" href="#">プレリリース</span></dt>
          <dd><a href="#">イベントの開催が決定！</a></dd>
        </dl>
        <dl>
          <dt><span>2023/5/20</span><span className="btn" href="#">プレリリース</span></dt>
          <dd><a href="#">人気急上昇のあの商品を通販で販売決定！</a></dd>
        </dl>
        <dl>
          <dt><span>2023/4/7</span><span className="btn" href="#">お知らせ</span></dt>
          <dd><a href="#">休暇いたします！</a></dd>
        </dl>
      </div>
    </>
  )
}
