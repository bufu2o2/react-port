import React, {useEffect, useContext} from 'react';
import AppComp from './components/AppComp/AppComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Page Import ============================================================================
import Home from './components/Pages/Home';
import About from './components/Pages/About';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import Nav from './components/Nav/Nav';
import {PageName, PageContext} from './components/Contexts/PageContext';
import './App.css';

function App() {
  const page = useContext(PageContext);
  useEffect( () => {
    
    console.log('this is the page name in App   ', page)
  })


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
