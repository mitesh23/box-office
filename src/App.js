import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/pages/Home';
import Starred from './Components/pages/Starred';

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route path="/another">this is anoher</Route>
      </Switch>
    </div>
  );
}

export default App;
