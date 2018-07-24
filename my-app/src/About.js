import React, { Component } from 'react';
import market from './img/farmer-market.jpg';

class About extends Component {
    render() {
      return (
          <div className="container row-size">

            <div className="row">
                <div className="col-md-6 market-sec">
                <h2 className="sub-headings"> Farmers Market </h2>
                <p className="text">We source our produce and majority of our ingredients from BC local farmers.Don't Kula Alone - 
                In this fast paced era Kula wants to encourage people to enjoy food together. Let's Kula Together </p>
                <div className="btn-space">
                    <input type="button" className="button" value="SUBSCRIBE PRODUCTS" />
                </div>
                </div>
                <div className="col-md-6 market-sec">
                    <img src={market} alt="main-img" className="market-imgs"/>
                </div>
            </div>
           
          </div>
    );
    }
}

export default About;