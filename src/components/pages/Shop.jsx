import React from 'react'

import { Header } from "../Organisms/Header"
import { ShopList } from "../Organisms/ShopLayout/ShopList"
import { Information } from '../Organisms/Information'
import { Set } from '../Organisms/ShopLayout/Set'
import { Food } from '../Organisms/ShopLayout/Food'
import { Candy } from '../Organisms/ShopLayout/Candy'
import { Noodle } from '../Organisms/ShopLayout/Noodle'
import { Dry } from '../Organisms/ShopLayout/Dry'
import { Footer } from "../Organisms/Footer"

export const Shop = () => {
  return (
    <div>

      <Header />

      <ShopList />

      <Information />

      <Set />

      <Food />

      <Candy />

      <Noodle />

      <Dry />

      <Footer />

    </div >
  )
}
