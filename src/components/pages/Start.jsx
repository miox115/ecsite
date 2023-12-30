import React from 'react'
// import { Header } from "../components/Header"
// import { Information } from '../components/Information'
// import { Sns } from "../components/Sns"
// import { Manual1 } from '../components/Manual1'
// import { Manual2 } from '../components/Manual2'
// import { Manual3 } from '../components/Manual3'
// import { Question } from '../components/Question'
// import { Voice } from '../components/Voice'
// import { Footer } from "../components/Footer"

export const Start = () => {
  return (
    <div className="container">

      <Header />

      <section>
        <img src="./img/macron.jpg" alt="画像入れる" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <p class="flex justify-center">コースの特典</p>
        <p class="flex justify-center">説明書き</p>
        <p class="flex justify-center">説明書き</p>
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
