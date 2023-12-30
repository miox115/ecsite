import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul class="flex justify-end">
        <li><Link to="/" class="m-2">ホーム</Link></li>
        <li><Link to="/Start" class="m-2">セット販売</Link></li>
        <li><Link to="/Shop" class="m-2">ショップ</Link></li>
      </ul>
    </>
  )
}