import React from 'react';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is home page
      </Route>

      <Route exact path="/starred">
        this is a starred page
      </Route>

      <Route path="/another">this is anoher</Route>
    </Switch>
  );
}

export default App;
