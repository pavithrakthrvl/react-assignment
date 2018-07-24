import React, { Component } from 'react';
import chapati from './img/chapati.jpg';
import mandazi from './img/mandazi-01.jpg';
import stew01 from './img/stew.jpg';

class Food extends Component {
    render() {
      return (
        <div className="container row-size">
            <h2 className="sub-headings"> Our Eatery </h2>
            <div className="row">
                <div className="col-md-4 food-items">
                    {/* <p className="eatry"> Chapati </p> */}
                    <img src={chapati} alt="chapati" className="food-imgs" />
                    <div className="text-block">
                        <p> Chapati </p>
                    </div>
                </div>
                <div className="col-md-4 food-items">
                    <img src={stew01} alt="chapati" className="food-imgs" />
                    <div className="text-block">
                        <p> Sukuma Stew </p>
                    </div>
                </div>
                <div className="col-md-4 food-items">
                {/* <p className="eatry"> Mandazi </p> */}
                    <img src={mandazi} alt="chapati" className="food-imgs" />
                    <div className="text-block">
                        <p> Mandazi </p>
                    </div>
                </div>
            </div>
            <div className="btn-space">
                <input type="button" className="button" value="SUBSCRIBE PRODUCTS" />
            </div>
        </div>
    );
}
}

export default Food;