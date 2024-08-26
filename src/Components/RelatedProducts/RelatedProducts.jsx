import React, { useEffect, useState } from 'react';
import style from './RelatedProducts.module.css';
import Slider from 'react-slick/lib/slider';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

export default function RelatedProducts({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = product.category?._id;

  async function getRelatedProducts(id) {
    if (!id) return;
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?category=${id}`
      );

      console.log(data.data);
      setRelatedProducts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    function () {
      getRelatedProducts(id);
    },
    [id]
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Slider {...settings}>
          {relatedProducts?.map((product, i) => (
            <div key={i} className='p-4 '>
              <Link to={`/productdetails/${product.id}`}>
                <img
                  src={product.imageCover}
                  className='w-full h-[200px] mx-3'
                />
                <h3 className='pl-3 pt-3'>
                  {product.title.split(' ').slice(0, 3).join(' ')}
                </h3>
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}
