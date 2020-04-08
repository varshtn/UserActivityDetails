import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import UserDetailsComponent from './components/UserDetailsComponent';
import FooterComponent from './components/FooterComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route exact path="/">
            <UserDetailsComponent />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
