import React from 'react'
import { Header } from "../components/Header"
import { Information } from "../components/Information"
import { News } from "../components/News"
import { Sns } from "../components/Sns"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <div className="container">

      <Header />

      <section>
        <div className='slider-wrap'>
          <img src="../../../public/img/macron.jpg" alt="画像入れる" />
          <button type='button'>ボタン入れる</button>
        </div>
      </section>

      <section>
        <div>
          <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
          <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
          <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
          <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
        </div>
        <a className="btn" href="#">ボタン入れる</a>
      </section>

      <Information />

      <section>
        <div>
          <p>TV放映中</p>
          <div className="col-12">
            <iframe src="https://dummyimage.com/200x/200/fff" frameborder="0"><img src="https://dummyimage.com/200x/200/fff" alt="" /></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>大切なものが入っています</h1>
          <a href="#"><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></a>
          <div className="col-12">
            <a href="#"><picture><img src="https://dummyimage.com/50x/50/fff" alt="icon" /></picture></a>
            <a href="#"><picture><img src="https://dummyimage.com/50x/50/fff" alt="icon" /></picture></a>
            <a href="#"><picture><img src="https://dummyimage.com/50x/50/fff" alt="icon" /></picture></a>
          </div>
          <p>※売上ランキングで登場</p>
          <a className="btn" href="#">ボタン入れる</a>
        </div>
      </section>

      <section>
        <div>
          <h3>栄養素の一覧表</h3>
          <p>1日あたりの摂取量</p>
          <h2>XXにはそれぞれに必要な栄養素がぎゅっと詰まっています</h2>
        </div>

        <div>
          <img src="https://dummyimage.com/200/400/fff" alt="" />
          <p>測定値</p>
          <p>基準値は1日分の基準値を100とした時の数値です</p>
        </div>

        <div>
          <img src="https://dummyimage.com/50/50/fff" alt="" />
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>NEWS</h2>
            <a href="#"><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></a>
          </div>

          <News />


          <div>
            <a className="btn" href="#" >ニースを読む</a>
            <img src="https://dummyimage.com/50/50/fff" alt="" />
          </div>

        </div>
      </section>

      <Sns />

      <section>
        <div className="row">
          <h2>推奨されています</h2>
          <picture><img src="https://dummyimage.com/100/100/fff" alt="" /></picture>
        </div>

        <div className='col-6'>
          <p>教授推奨</p>
          <p>博士課程終了。各種出版</p>
        </div>
        <a className="btn" href="#">ボタン入れる</a>
      </section>

      <section>
        <a className="btn" href="#" >ボタンを入れる</a>
      </section>

      <section>
        <p>説明書きをする</p>
      </section>

      <Footer />

    </div >
  )
}
