import React from 'react'

const MainSection = () => {
  return (

    <div className="container">
      <section>
        <div className="row">
          <div className="col-12">
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
            <div><picture><img src="https://dummyimage.com/250x/250/fff" alt="goods" /></picture></div>
          </div>
          <a className="btn" href="#" >商品を見る</a>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>TV放映中</p>
            </div>
            <div className="col-12">
              <iframe src="https://dummyimage.com/200x/200/fff" frameborder="0"><img src="https://dummyimage.com/200x/200/fff" alt="" /></iframe>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>TV放映中</p>
            </div>
            <div className="col-12">
              <iframe src="https://dummyimage.com/200x/200/fff" frameborder="0"><img src="https://dummyimage.com/200x/200/fff" alt="" /></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>

  )
}

export default MainSection