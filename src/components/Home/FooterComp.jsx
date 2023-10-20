import React from 'react'

const FooterComp = () => {
    return (
        <div className="footer">
            <div className="row">

            </div>

            <div className="row">
                <div className="col-12">
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="miox" /></a>
                    <p>miox,inc.</p>
                </div>
                <div className="footer_sns">
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="Twitter" /></a>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="Instagram" /></a>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="Line" /></a>
                </div>
                <div className="col-12">
                    <a className="btn" href="#" >お問い合わせ</a>
                </div>
                
                <div className="col-12">
                    <p>会社情報</p>
                    <i className='fas'>
                        ::before
                    </i>
                    <ul className='footer_items'>
                        <li className='footer_link'><a href="#">会社概要</a></li>
                        <li className='footer_link'><a href="#">製造</a></li>
                        <li className='footer_link'><a href="#">取材</a></li>
                        <i className='fas'>
                            ::before
                        </i>
                    </ul>
                </div>
                <div className="col-12">
                    <p>IR</p>
                    <i className='fas'>
                        ::before
                    </i>
                    <ul className='footer_items'>
                        <li className='footer_link'><a href="#">トップ</a></li>
                        <li className='footer_link'><a href="#">ニュース</a></li>
                        <i className='fas'>
                            ::before
                        </i>
                    </ul>
                </div>
            </div>


            <div className="row">
                <p>miox,inc</p>
            </div>
        </div>
    )
}

export default FooterComp