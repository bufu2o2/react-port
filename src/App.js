import React, {} from 'react';
import AppComp from './components/AppComp/AppComp';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import {PageName} from './components/Contexts/PageContext';
import {MenuOpen} from './components/Contexts/MenuContext';
import {SwipeR} from './components/Contexts/SwipeRContext';
import {SwipeL} from './components/Contexts/SwipeLContext';
import {SwipeD} from './components/Contexts/SwipeDContext';
import './App.css';


function App() {


  return (
 
  <div className="App">
    <Particles />
    <SwipeR>
    <PageName>
      <SwipeL><SwipeD>
      <MenuOpen>
        <AppComp />
      </MenuOpen>
      </SwipeD></SwipeL>
    </PageName>  
    </SwipeR>
  </div>
  );
}

export default App;
