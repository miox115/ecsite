import React from 'react'
import {FooterComp, HeaderComp, MainSection} from './index';

const HomePage = () => {
    return (
        <>
            {<HeaderComp />}
            {<MainSection />}
            {<FooterComp />}
        </>
    );
}

export default HomePage;