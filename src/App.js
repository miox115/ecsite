import React from 'react';
import './App.css';
import { HeaderComp ,FooterComp, SectionOne } from './components';

function App() {
  return (
    <>
      {<HeaderComp />}
      {<SectionOne />}      
      {<FooterComp />}
    </>
  );
}

export default App;
