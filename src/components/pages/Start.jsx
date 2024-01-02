import React from 'react'

import { Header } from "../Organisms/Header"
import { Information } from "../Organisms/Information"
import { Sns } from "../Organisms/Sns"
import { Manual1 } from '../Organisms/Manual1'
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

      <div>
        <picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture>
      </div>

      <Sns />

      <Manual1 />

      <Question />

      <Voice />

      <Footer />

    </div >
  )
}
