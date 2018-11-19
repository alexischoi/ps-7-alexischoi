import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Data } from './Data';
import { About } from './About';
import { Home } from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="container">
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/projects">Data</Link>
                { ' ' }
                <Link to="/about">About</Link>
                <Route exact path="/" component={ Home } />
                <Route path="/projects" component={ Data } />
                <Route path="/about" component={ About } />
              </div>
            </Router>
            );
    }
}

export default App;