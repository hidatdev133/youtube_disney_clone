import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header'
import Home from './components/Home';
import Detail from './components/Detail';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
