import React from 'react'
// import home from '../../../public/img/home.png'

export const HeaderComp = () => {

  return (
    <div className="container">
      <div className="nav">
        {/* <a href="/"><img src={home} alt="ec_site" /></a> */}
        <ul class="flex">
          <li><a href="/">ホーム</a></li>
          <li><a href="/Product">商品</a></li>
          <li><a href="/Shop">ショップ</a></li>
        </ul>
      </div>
    </div>
  )
}