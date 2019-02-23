import React, { Component } from 'react';
import PhoneBookHome from './components/PhoneBookHome';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhoneBookHome />
      </div>
    );
  }
}

export default App;
