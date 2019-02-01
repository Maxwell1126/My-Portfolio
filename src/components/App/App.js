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
        <div>
        <header>
        <Link to="/">Project</Link>
        <br/>
        <Link to="/Admin">Admin</Link>
        </header>
        <Route extact path="/" component={Project} />
        <Route extact path="/Admin" component={Admin} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
