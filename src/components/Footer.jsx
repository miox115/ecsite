import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="miox" /></a>
                    <p>miox,inc.</p>
                </div>

                <div>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="Twitter" /></a>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="Instagram" /></a>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="Line" /></a>
                </div>

                <div>
                    <a className="btn" href="#" >お問い合わせ</a>
                </div>

                <div>
                    <p>会社情報</p>
                    <ul className='footer_items'>
                        <li className='footer_link'><a href="#">会社概要</a></li>
                        <li className='footer_link'><a href="#">製造</a></li>
                        <li className='footer_link'><a href="#">取材</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <p>miox,inc</p>
            </div>
        </footer>
    )
}
