import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Springfield Recreation Contact List</h2>
        </div>
        <p className="App-intro">
          To get on the list, enter your information below!
        </p>
      </div>
    );
  }
}

export default App;
