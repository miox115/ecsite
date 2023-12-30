import React from 'react'

import { Header } from "../Organisms/Header"
import { Information } from '../Organisms/Information'
import { Set } from '../Organisms/Set'
import { Connection1 } from '../Organisms/Connection1'
import { Connection2 } from '../Organisms/Connection2'
import { Connection3 } from '../Organisms/Connection3'
import { Connection4 } from '../Organisms/Connection4'
import { Connection5 } from '../Organisms/Connection5'
import { Footer } from "../Organisms/Footer"

export const Shop = () => {
  return (
    <div>

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
