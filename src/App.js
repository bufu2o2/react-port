import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Page Import ============================================================================
import Home from './components/Pages/Home';

//BG Import ==========================================================================
import Particles from './components/Bg/Particles';

import './App.css';

function App() {

  // let loaded = {};
  // function addScript(url) {
  //   if (!loaded[url]) {
  //     let s = document.createElement('script');
  //     s.src = url;
  //     document.head.appendChild(s);
  //     loaded[url] = true;
  //   }
  // }



  // useEffect( () => {
  //   addScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js');
  // }, [])


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
