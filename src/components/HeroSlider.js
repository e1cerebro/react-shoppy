import React, { Fragment } from "react";
import image1 from "../img/slider1.jpg";
import image2 from "../img/slider2.jpg";
import image3 from "../img/slider3.jpg";

const HeroSlider = () => {
  return (
    <Fragment>
      {" "}
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={image1} className='d-block w-100' alt='Slider 1' />
            <div className='carousel-caption d-none d-md-block'>
              <h2>First slide label</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={image2} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={image3} className='d-block w-100' alt='...' />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </Fragment>
  );
};

export default HeroSlider;
