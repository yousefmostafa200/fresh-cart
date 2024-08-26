import React, { useEffect, useState } from 'react';
import style from './CategoriesSlider.module.css';
import Slider from 'react-slick';
import axios from 'axios';

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);

  async function getRecentCategories() {
    try {
      const { data } = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/categories'
      );
      // console.log('categ', data);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getRecentCategories();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {categories?.map((category, i) => (
          <div key={i} className='mb-14'>
            <img src={category.image} className='w-full h-[200px] py-4' />
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </>
  );
}
