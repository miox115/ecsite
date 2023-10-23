import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <ul class="flex">
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/Start">セット販売</Link></li>
          <li><Link to="/Shop">ショップ</Link></li>
        </ul>
      </header>
    </>
  )
}