import React from 'react'

import { Header } from "../Organisms/Header"
import { Information } from "../Organisms/Information"
import { Sns } from "../Organisms/Sns"
import { Manual1 } from '../Organisms/Manual1'
import { Manual2 } from '../Organisms/Manual2'
import { Manual3 } from '../Organisms/Manual3'
import { Question } from '../Organisms/Question'
import { Voice } from '../Organisms/Voice'
import { Footer } from "../Organisms/Footer"

export const Start = () => {
  return (
    <div className="container">

      <Header />

      <section>
        <img src="./img/macron.jpg" alt="画像入れる" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <p className="flex justify-center">コースの特典</p>
        <p className="flex justify-center">説明書き</p>
        <p className="flex justify-center">説明書き</p>
      </section>

      <Information />

      <section>
        <div>
          <picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture>
        </div>
      </section>

      <Sns />

      <Manual1 />

      <Manual2 />

      <Manual3 />

      <Question />

      <Voice />

      <Footer />

    </div >
  )
}
