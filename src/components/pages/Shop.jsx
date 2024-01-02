import React from 'react'

import { Header } from "../Organisms/Header"
import { ShopList } from "../Organisms/ShopList"
import { Information } from '../Organisms/Information'
import { Set } from '../Organisms/Set'
import { Food } from '../Organisms/Food'
import { Candy } from '../Organisms/Candy'
import { Noodle } from '../Organisms/Noodle'
import { Dry } from '../Organisms/Dry'
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
