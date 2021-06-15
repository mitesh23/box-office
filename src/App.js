import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Starred from './Components/pages/Starred';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route path="/another">not found</Route>
      </Switch>
    </div>
  );
}

export default App;
