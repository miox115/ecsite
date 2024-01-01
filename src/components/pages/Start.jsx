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
import { Manual } from '../Organisms/Manual'

export const Start = () => {
  return (
    <div className="container">

      <Header />

      <Manual />

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
