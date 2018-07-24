import React, { Component } from 'react';
import Nav from './Header';
import About from './About';
import Food from './Food.js';
import Events from './Events.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Food />
        <About />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default App;
