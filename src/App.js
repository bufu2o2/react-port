import React, {} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Page Import ============================================================================
import Home from './components/Pages/Home';

//Other Import ==========================================================================
import Particles from './components/Bg/Particles';
import Nav from './components/Nav/Nav';

import './App.css';

function App() {


  return (
    <div className="App">
      <Particles />
      <Nav />
      
      <Router>
        
        <Switch>
          <Route exact path = '/' component = { Home } key = { Home.name } />
          <Route exact path = '/react-port/' component = { Home } key = { Home.name } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
