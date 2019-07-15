import React, {} from 'react';
import AppComp from './components/AppComp/AppComp';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import {PageName} from './components/Contexts/PageContext';
import './App.css';

function App() {


  return (
 
  <div className="App">
    <Particles />
    <PageName>
      <AppComp />
    </PageName>  
  </div>
  );
}

export default App;
