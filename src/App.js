import React, { Component } from 'react';
import Routes from './routes'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
