import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Video from './Video';
import Queue from './Queue';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/remote' component={Remote} />
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <div>
      <Video/>
      <Queue/>
    </div>
  );
}

const Remote = () => {
  return (
    <div>
      Hello There
    </div>
  );
}

export default App;