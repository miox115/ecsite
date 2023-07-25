import React from 'react'
import { HeaderComp, FooterComp } from '../Home/index';
import { MainShop } from './index';

const ShopPage = () => {
    return (
        <>
            {<HeaderComp />}
            {<MainShop />}
            {<FooterComp />}
        </>
    );
}

export default ShopPage;