import React from 'react'

export const ShopList = () => {
    return (
        <>
            <p>商品一覧表</p>
            <wrapper className="grid grid-cols-2">
                <a href="#"><span className='bg-slate-400 w-40 m-4'>食</span></a>
                <a href="#"><span className='bg-slate-400 m-4'>菓</span></a>
                <a href="#"><span className='bg-slate-400 m-4'>麺</span></a>
                <a href="#"><span className='bg-slate-400 m-4'>乾</span></a>
                <a href="#"><span className='bg-slate-400 m-4'>詰</span></a>
            </wrapper>
        </>
    )
}
