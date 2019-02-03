import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route,} from 'react-router-dom';
import Admin from '../Admin/Admin.js';
import Project from '../Project/Project.js';
import 'typeface-roboto';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <header>    
        <br/>
        </header>
        <Route exact path="/" component={Project} />
        <Route exact path="/Admin" component={Admin} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
