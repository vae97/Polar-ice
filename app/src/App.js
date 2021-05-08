import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landings from '../src/Landing'

function App() {

  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landings} />
      </Switch>
  </Router>
  );
}

export default App;
