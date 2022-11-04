import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav className="main-nav">
        <div className="logo">
          <Link href="/">
            <img
              src="http://www.themezaa.com/html/pofo/images/logo-white@2x.png"
              className="img-logo"
              alt=""
            />
          </Link>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <Link href="#">Demos</Link>
            </li>
            <li>
              <Link href="#">Protfolio</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Documentation</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <button className="buy-now">
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
