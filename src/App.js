import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Video from './Video';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Queue from './Queue';
import firebase from './firebase';

import './App.css';

require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      searchQuery: '',
      stack: []
    }
  }

  componentDidMount() {
    const stackRef = firebase.database().ref('stack');
    stackRef.on('value', (snapshot) => {
      let stack = snapshot.val();
      let newStack = [];
      console.log(snapshot.val());
      for (let item in stack) {
        newStack.push({
          id: item,
          name: stack[item].name,
          vidId: stack[item].vidId
        });
      }
      this.setState({
        stack: newStack
      });
    });
  }


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

class Remote extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      searchQuery: '',
      searchResults: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=15&order=relevance&type=video&videoEmbeddable=true&key=AIzaSyDUjfeLpw6NsFoQ-xAOrWx7nO9Aj0aglhw&q=${this.state.searchQuery}`)
    .then(results => {
      return results.json();
    })
    .then(
      data => {
        this.setState({
          searchResults: [...data.items]
        });
    })
  }

  render(){
    return (
    <div>
      <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <SearchResults searchResults={this.state.searchResults}/>
    </div>
    )};
}

export default App;