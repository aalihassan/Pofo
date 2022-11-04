import React from 'react';
import './SliderSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderSection() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: 'center',
          centerMode: true,
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: 'center',
          centerPadding: '10px',
          centerMode: true,
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slidersection">
      <div className="slidersectioncontent">
        <h1 className="sliderSectionText">
          Elegant and Impressive Portfolio Pages
        </h1>
        <p className="siderSectionParagraph">
          Not just the homepage, we have designed many different beautiful{' '}
          <br />
          portfolio single pages to achieve your different needs.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-05.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-06.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-07.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-08.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-01.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-02.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-03.jpg"
            className="slider-img"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://www.themezaa.com/html/pofo/images/pofo-portfolio-layout-img-04.jpg"
            className="slider-img"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderSection;
