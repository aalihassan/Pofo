import React from 'react';
import './SlidersSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlidersSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div className="sliderssection">
      <div className="sliderssectioncontent">
        <h1 className="slidersSectionText">Gorgeous Header and Menu Styles</h1>
        <p className="sidersSectionParagraph">
          Pick the best header style wisely from the pool of beautiful <br />
          navigation styles collection.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-01.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-02.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-03.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-04.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-05.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-06.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-07.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-08.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-09.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-10.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-11.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-12.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-13.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-menu-options-img-14.jpg"
            className="sliders-img"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlidersSection;
