import React from 'react';
import './CreativeBlogs.css';

function CreativeBlogs() {
  return (
    <div className="creativeBlogs">
      <div className="creativeBlogscontent">
        <h1>Creative Blog Style</h1>
        <p>
          Professional blog layouts with many different listing styles and{' '}
          <br />
          various post formats like image, gallery, slider, video, audio and{' '}
          <br />
          quote.
        </p>
      </div>
      <img
        src="http://www.themezaa.com/html/pofo/images/pofo-creativeblog-style.png"
        alt=""
      />
      <button className="blogstyles">Explore Blog Styles</button>
    </div>
  );
}

export default CreativeBlogs;
