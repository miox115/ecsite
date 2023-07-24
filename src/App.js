import React from 'react';
import './App.css';
import { HeaderComp ,FooterComp, MainSection,} from './components';

function App() {
  return (
    <>
      {<HeaderComp />}
      {<MainSection />}      
      {<FooterComp />}
    </>
  );
}

export default App;
