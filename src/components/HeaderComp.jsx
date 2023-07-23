import React from 'react'
import '../css/HeaderComp.css';

const HeaderComp = () => {
  return (
    <div className="container">
      <div className="nav">
        <a href="/">
        <img src="https://dummyimage.com/100x50/000/fff" alt="ec_site"/>
        </a>
         <ul className="nav_header">
           <li><a href="https://dummyimage.com/30x30/000/fff">test</a></li>
           <li><a href="https://dummyimage.com/30x30/000/fff">test</a></li>
           <li><a href="https://dummyimage.com/30x30/000/fff">test</a></li>
         </ul>
      </div>
    </div>
  )
}

export default HeaderComp