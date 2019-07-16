import React, {} from 'react';
import AppComp from './components/AppComp/AppComp';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import {PageName} from './components/Contexts/PageContext';
import {MenuOpen} from './components/Contexts/MenuContext';
import './App.css';
import SwipeableViews from 'react-swipeable-views';

function App() {


  return (
 
  <div className="App">
    <Particles />
    <PageName>
      <MenuOpen>
        <AppComp />
      </MenuOpen>
    </PageName>  
  </div>
  );
}

export default App;
