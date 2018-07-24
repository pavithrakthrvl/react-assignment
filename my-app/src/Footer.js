import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <div class="row text-center">
                <ul class="social-ul">
                    <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f fa-lg"></i></a></li>
                    <li><a href="https://twitter.com/"><i class="fab fa-instagram fa-lg"></i></a></li>
                    <li><a href="https://www.instagram.com"><i class="fab fa-twitter fa-lg"></i></a> </li>
                </ul>
            </div>
        </div>
    );
    }
}

export default Footer;