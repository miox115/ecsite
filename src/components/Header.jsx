import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <section>
        <ul class="flex">
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/Product">商品</Link></li>
          <li><Link to="/Shop">ショップ</Link></li>
        </ul>
      </section>
    </>
  )
}