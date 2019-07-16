import React, {} from 'react';
import AppComp from './components/AppComp/AppComp';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import {PageName} from './components/Contexts/PageContext';
import {MenuSide} from './components/Contexts/MenuContext';
import './App.css';

function App() {


  return (
 
  <div className="App">
    <Particles />
    <PageName>
      <MenuSide>
        <AppComp />
      </MenuSide>
    </PageName>  
  </div>
  );
}

export default App;
