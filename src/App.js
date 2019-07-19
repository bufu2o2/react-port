import React, {} from 'react';
import AppComp from './components/AppComp/AppComp';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import {PageName} from './components/Contexts/PageContext';
import {MenuOpen} from './components/Contexts/MenuContext';
import {SwipeR} from './components/Contexts/SwipeRContext';
import {SwipeL} from './components/Contexts/SwipeLContext';
import {SwipeD} from './components/Contexts/SwipeDContext';
import {Modal} from './components/Contexts/ModalContext';
import './App.css';


function App() {


  return (
 
  <div className="App">
    <Particles />
    <SwipeR>
    <PageName>
      <Modal>
      <SwipeL><SwipeD>
      <MenuOpen>
        <AppComp />
      </MenuOpen>
      </SwipeD></SwipeL>
      </Modal>
    </PageName>  
    </SwipeR>
  </div>
  );
}

export default App;
