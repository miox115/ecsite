import React from 'react'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Product = () => {
  return (
    <div className="container">

      <Header />

      <section>
        <div className='slider-wrap'>
          <button className='slick-prev' type='button'>
            ::before
          </button>

          <div className='slick-slide'>
            <img src="https://dummyimage.com/250x/250/fff" alt="top" />
          </div>


          <button className='slick-next' type='button'>
            ::before
          </button>

        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-12">
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
          </div>
        </div>
        <div className="col-12">
          <a className="btn" href="#">商品を見る</a>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>TV放映中</p>
            </div>
            <div className="col-12">
              <iframe src="https://dummyimage.com/200x/200/fff" frameborder="0"><img src="https://dummyimage.com/200x/200/fff" alt="" /></iframe>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>大切なものが入っています</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <a href="#"><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></a>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <a href="#"><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></a>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <a href="#"><picture><img src="https://dummyimage.com/50x/50/fff" alt="icon" /></picture></a>
              <a href="#"><picture><img src="https://dummyimage.com/50x/50/fff" alt="icon" /></picture></a>
              <a href="#"><picture><img src="https://dummyimage.com/50x/50/fff" alt="icon" /></picture></a>
            </div>
          </div>

          <div className="row">
            <p>※売上ランキングで登場</p>
          </div>

          <div className="row">

          </div>
          <a className="btn" href="#" >体験する</a>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-12">
            <h2>XXにはそれぞれに必要な栄養素がぎゅっと詰まっています</h2>
            <h3>栄養素の一覧表</h3>
            <p>1日あたりの摂取量</p>
          </div>
        </div>
        <div className="col-12">
          <picture>
            <img src="https://dummyimage.com/200/400/fff" alt="" />
            <p>測定値</p>
          </picture>
          <p>基準値は1日分の基準値を100とした時の数値です</p>
        </div>
        <div className="col-12">
          <picture>
            <img src="https://dummyimage.com/50/50/fff" alt="" />
          </picture>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>NEWS</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <a href="#"><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></a>
            </div>
          </div>


          <div className="row">
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
          </div>

          <div className="row">
            <div className="col-12">
              <a className="btn" href="#" >ニースを読む</a>
            </div>
          </div>
          <div className="col-12">
            <picture>
              <img src="https://dummyimage.com/50/50/fff" alt="" />
            </picture>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-12">
            <h2>推奨されています</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-6'>
            <picture><img src="https://dummyimage.com/100/100/fff" alt="" /></picture>
          </div>
          <div className='col-6'>
            <p>教授推奨</p>
            <p>博士課程終了。各種出版</p>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <a className="btn" href="#" >ラインナップを見る</a>
        </div>
      </section>

      <Footer />

    </div >
  )
}
