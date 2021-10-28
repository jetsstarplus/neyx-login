import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/" exact>
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
