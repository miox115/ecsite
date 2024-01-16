import React from 'react'

import { Header } from "../Organisms/Header"
import { Information } from "../Organisms/Information"
import { Sns } from "../Organisms/Sns"
import { Manual1 } from '../Organisms/StartLayout/Manual1'
import { Question } from '../Organisms/StartLayout/Question'
import { Voice } from '../Organisms/StartLayout/Voice'
import { Footer } from "../Organisms/Footer"
import { Manual } from '../Organisms/StartLayout/Manual'

export const Start = () => {
  return (
    <div className="container">

      <Header />

      <Manual />

      <Information />

      <div className='flex justify-center'>
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
