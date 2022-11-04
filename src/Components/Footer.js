import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className="footer">
        <p>You are at the right step now</p>
        <h1>
          Purchase The Pofo and <br /> Make Your Life Easier
        </h1>
        <button className="purchase">Purchase Pofo</button>
      </div>
      <div className="footer-copyright">
        <img
          src="http://www.themezaa.com/html/pofo/images/themezaa@2x.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
