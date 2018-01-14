import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import About from "./About";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Crunchbase </h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/list">List</NavLink></li>
            <li><NavLink exact to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/list" component={List}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
