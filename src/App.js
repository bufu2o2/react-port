import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Page Import ============================================================================
import Home from './components/Pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = { Home } key = { Home.name } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
