import React, { useState } from 'react';
import style from './MainSlider.module.css';
import Slider from 'react-slick';

import slide1 from '../../assets/images/slider-image-1.jpeg';
import slide2 from '../../assets/images/slider-image-2.jpeg';
import slide3 from '../../assets/images/slider-image-3.jpeg';

export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autospeed: 1000,
  };

  return (
    <>
      <div className='flex pt-5'>
        <div className='w-3/4'>
          <Slider {...settings}>
            <img src={slide1} className='w-full h-[400px]' />
            <img src={slide2} className='w-full h-[400px]' />
            <img src={slide3} className='w-full h-[400px]' />
          </Slider>
        </div>
        <div className='w-1/4'>
          <img src={slide1} className='w-full h-[200px] ' />
          <img src={slide3} className='w-full h-[200px] ' />
        </div>
      </div>
    </>
  );
}
