import React from 'react'

export const ShopList = () => {
    return (
        <>
            <p>商品一覧表</p>
            <wrapper className="flex flex-wrap">
                <a href="#"><span className='bg-slate-400'>食</span></a>
                <a href="#"><span>菓</span></a>
                <a href="#"><span>麺</span></a>
                <a href="#"><span>乾</span></a>
                <a href="#"><span>詰</span></a>
            </wrapper>
        </>
    )
}
