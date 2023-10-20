import React from 'react'
import { HeaderComp, FooterComp } from '../Home/index';
import { MainProduct } from './index';

const ProductPage = () => {
    return (
        <>
                {<HeaderComp />}
                {<MainProduct />}
                {<FooterComp />}
        </>
    );
}

export default ProductPage;
