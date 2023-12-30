import React from 'react'
import { FaGithub } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center ">
                <div className="m-4">
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="miox" /></a>
                    <p>miox,inc.</p>
                </div>
                <div className="flex m-4">
                    <h3 className="text-6xl"> <FaGithub /> </h3>
                    <h3 className="text-6xl"> <FaGithub /> </h3>
                    <h3 className="text-6xl"> <FaGithub /> </h3>
                </div>
                <div className="flex justify-center m-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        お問い合わせ
                    </button>
                </div>
                <div classNama="m-4">
                    <summary>
                        <p>会社情報</p>
                    </summary>
                    <li className='footer_link'><a href="#">会社概要</a></li>
                    <li className='footer_link'><a href="#">製造</a></li>
                    <li className='footer_link'><a href="#">取材</a></li>
                </div>
                <div className="m-4">
                    <summary>
                        <p>ＩＲ</p>
                    </summary>
                    <li className='footer_link'><a href="#">トップ</a></li>
                    <li className='footer_link'><a href="#">ニュース</a></li>
                </div>
            </div>
            <div className="m-4">
                <p className="flex justify-center">miox,inc</p>
            </div>
        </footer>
    )
}
