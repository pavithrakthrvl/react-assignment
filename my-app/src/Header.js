import React, { Component } from 'react';
import stew01 from './img/stew-01.jpg';
import logo from './img/logo.png';

class Nav extends Component {
  render() {
    return (
      <header className="container-fluid">
        <nav className="navigation">
          <img src={logo} alt="logo" className="logo" />
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#shop">SHOP</a></li>
                <li><a href="#events">EVENTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
        <div className="header-img">
            <img src={stew01} alt="main-img" className="img-fluid"/>
            <div className="img-overlay">
            <div className="centered">
          <h1>KULA</h1>
          <p className="para" >EAT IN SWAHALI</p>
          <input type="button" className="button" value="VIEW PRODUCTS" />
        </div>
            </div>
        </div>
        
        
      </header>
    );
  }
}

export default Nav;