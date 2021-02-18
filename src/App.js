import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './header.js';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import DetailPage from './DetailPage.js';




export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage}
            />
            <Route
              path="/search"
              exact
              component={SearchPage}
            />
            <Route
              path="/search/:pokemonName"
              exact
              component={DetailPage}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

