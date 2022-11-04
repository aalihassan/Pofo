import React from 'react';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <div className="layout-container">
        <div className="layout-content">
          <h1>Unlimited Page Layouts</h1>
          <p>
            Pofo gives you full freedom to use single column full <br /> width,
            left or right and dual sidebars easily in your page.
          </p>
        </div>

        <div className="layout-row">
          <div className="col-3">
            <img
              src="http://www.themezaa.com/html/pofo/images/pofo-layoutbox-img01.png"
              alt=""
            />
            <p className="layout-design">Full Width</p>
          </div>
          <div className="col-3 mt-col">
            <img
              src="http://www.themezaa.com/html/pofo/images/pofo-layoutbox-img02.png"
              alt=""
            />
            <p className="layout-design">Left Sidebar</p>
          </div>
          <div className="col-3 mt-col">
            <img
              src="http://www.themezaa.com/html/pofo/images/pofo-layoutbox-img03.png"
              alt=""
            />
            <p className="layout-design">Dual Sidebar</p>
          </div>
          <div className="col-3 mt-col">
            <img
              src="http://www.themezaa.com/html/pofo/images/pofo-layoutbox-img04.png"
              alt=""
            />
            <p className="layout-design">Right Sidebar</p>
          </div>
        </div>

        <img
          src="http://www.themezaa.com/html/pofo/images/pofo-layout-img02.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Layout;
