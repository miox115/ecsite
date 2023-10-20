import React from 'react'
import { FooterComp, HeaderComp, MainSection, } from './index';
import { News } from '../News/index';

const HomePage = () => {
    return (
        <>
            {<HeaderComp />}
            {<MainSection />}
            {<News />}
            {<FooterComp />}
        </>
    );
}

export default HomePage;