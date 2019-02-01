import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin.js';
import Project from '../Project/Project.js';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <Router>
        <header>
        <Link to="/">Project</Link>
        <br/>
        <Link to="/Admin">Admin</Link>
        </header>
      </Router>
      </div>
    );
  }
}

export default App;
