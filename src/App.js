import React, {} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Page Import ============================================================================
import Home from './components/Pages/Home';

//BG Import ==========================================================================
import Particles from './components/Bg/Particles';

import './App.css';

function App() {


  return (
    <div className="App">
      <Router>
        <Particles>
        <Switch>
          <Route exact path = '/' component = { Home } key = { Home.name } />
        </Switch>
        </Particles>
      </Router>
    </div>
  );
}

export default App;
