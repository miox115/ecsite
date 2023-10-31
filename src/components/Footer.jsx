import React from 'react'
import { FaGithub } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <a href="#"><img src="https://dummyimage.com/30x30/000/fff" alt="miox" /></a>
                    <p>miox,inc.</p>
                </div>

                <div class="flex">
                    <h3 class="text-6xl"> <FaGithub /> </h3>
                    <h3 class="text-6xl"> <FaGithub /> </h3>
                    <h3 class="text-6xl"> <FaGithub /> </h3>
                </div>

                <div class="flex justify-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        お問い合わせ
                    </button>
                </div>

                <div>
                    <details>
                        <summary>
                            <p>会社情報</p>
                        </summary>
                        <li class='footer_link'><a href="#">会社概要</a></li>
                        <li class='footer_link'><a href="#">製造</a></li>
                        <li class='footer_link'><a href="#">取材</a></li>
                    </details>
                </div>

                <div>
                    <details>
                        <summary>
                            <p>ＩＲ</p>
                        </summary>
                        <li class='footer_link'><a href="#">トップ</a></li>
                        <li class='footer_link'><a href="#">ニュース</a></li>
                    </details>
                </div>

            </div>
            <div>
                <p class="flex justify-center">miox,inc</p>
            </div>
        </footer>
    )
}
