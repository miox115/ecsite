import React from 'react'

import { Header } from "../Organisms/Header"
import { Information } from "../Organisms/Information"
import { News } from "../Organisms/News"
import { Sns } from "../Organisms/Sns"
import { Footer } from "../Organisms/Footer"

import { PrimaryButton } from '../Atoms/PrimaryButton'

export const Home = () => {
  return (
    <>

      <Header />

      <section className="flex justify-center">
        <div className="text-center">
          <img src="./img/macron.jpg" alt="" />
          <PrimaryButton />
        </div>
      </section>

      <section className="text-center">
        <div className="p-2">
          <div><img src="./img/macron.jpg" alt="" /></div>
          <div><img src="./img/macron.jpg" alt="" /></div>
          <div><img src="./img/macron.jpg" alt="" /></div>
          <div><img src="./img/macron.jpg" alt="" /></div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </section>

      <Information />

      <section>
        <div className="text-center">
          <p>TV放映中</p>
          <div>
            <source src="./img/video.mp4" type="video/mp4" />
          </div>
        </div>
      </section>

      <section>
        <div className="text-center">
          <h1>大切なものが入っています</h1>
          <img src="https://dummyimage.com/250x/250/fff" alt="goods" />
          <div className="flex">
            <img src="https://dummyimage.com/50x/50/fff" alt="icon" />
            <img src="https://dummyimage.com/50x/50/fff" alt="icon" />
            <img src="https://dummyimage.com/50x/50/fff" alt="icon" />
          </div>
          <p>※売上ランキングで登場</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </section>

      <section className="text-center">
        <h3>栄養素の一覧表</h3>
        <p>1日あたりの摂取量</p>
        <h2>XXにはそれぞれに必要な栄養素がぎゅっと詰まっています</h2>
        <img src="https://dummyimage.com/200/400/fff" alt="" />
        <p>測定値</p>
        <p>基準値は1日分の基準値を100とした時の数値です</p>

        <p>....</p>

      </section>

      <section className="text-center">
        <h2>NEWS</h2>
        <img src="https://dummyimage.com/250x/250/fff" alt="goods" />

        <News />

        <div>
          <a classNameName="btn" href="#" >ニースを読む</a>
          <img src="https://dummyimage.com/50/50/fff" alt="" />
        </div>

      </section>

      <Sns />

      <section className="text-center">
        <h2>推奨されています</h2>
        <img src="https://dummyimage.com/100/100/fff" alt="" />
        <p>教授推奨</p>
        <p>博士課程終了。各種出版</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <section>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </section>
      </section>

      <section className="text-center">
        <p>説明書きをする</p>
      </section>

      <Footer />

    </ >
  )
}
