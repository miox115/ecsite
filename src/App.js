import React from 'react';
import './App.css';
import { HeaderComp ,FooterComp, SectionOne, SectionTwo, SectionThree} from './components';

function App() {
  return (
    <>
      {<HeaderComp />}
      {<SectionOne />}      
      {<SectionTwo />}
      {<SectionThree />}
      {<FooterComp />}
    </>
  );
}

export default App;
