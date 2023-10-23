import React from 'react'
import { Header } from "../components/Header"
import { Information } from '../components/Information'
import { Set } from '../components/Set'
import { Footer } from "../components/Footer"
import { Connection1 } from '../components/Connection1'
import { Connection3 } from '../components/Connection3'
import { Connection4 } from '../components/Connection4'
import { Connection5 } from '../components/Connection5'

export const Product = () => {
  return (
    <div className="container">

      <Header />

      <section>
        <div>
          <img src="https://dummyimage.com/200x/50/fff" alt="top" />
          <img src="https://dummyimage.com/200x/50/fff" alt="top" />
          <img src="https://dummyimage.com/200x/50/fff" alt="top" />
          <img src="https://dummyimage.com/200x/50/fff" alt="top" />
          <img src="https://dummyimage.com/200x/50/fff" alt="top" />
        </div>
      </section>

      <Information />

      <Set />

      <Connection1 />

      <Connection2 />

      <Connection3 />

      <Connection4 />

      <Connection5 />


      <section>
        <p>説明書きをする</p>
      </section>

      <Footer />
    </div >
  )
}
