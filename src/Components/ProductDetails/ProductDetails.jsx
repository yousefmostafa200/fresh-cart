import React, { useEffect, useState } from 'react';
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../Context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { addProductToCart } = useCart();

  const [product, setProduct] = useState({});

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

  async function getProductDetails(id) {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );

      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    function () {
      getProductDetails(id);
    },
    [id]
  );

  const notify = () =>
    toast(`${product.title.split(' ').slice(0, 2).join(' ')} added to cart 🎉`);

  return (
    <>
      <h1 className='text-5xl mt-16 md:mt-6'>
        {product.title?.split(' ').slice(0, 2).join(' ')} Details
      </h1>
      <div className='flex items-center py-10 mx-auto'>
        <div className='md:w-1/4 w-1/2 p-4'>
          {product.images?.length > 1 ? (
            <Slider {...settings}>
              {product.images?.map((img, i) => (
                <img src={img} className='w-full' key={i} />
              ))}
            </Slider>
          ) : (
            <img src={product.images} className='w-full' />
          )}
        </div>
        <div className='w-1/2 pl-12'>
          <h2>{product.title}</h2>
          <p className='my-6 text-gray-600'>{product.description}</p>
          <h3 className=''>{product.category?.name}</h3>
          <div className='flex justify-between my-2'>
            <h3>{product.price} EGP</h3>
            <h3>
              <i className='fas fa-star rating-color'></i>
              {product.ratingsAverage}
            </h3>
          </div>
          <button
            className='btn px-6 py-3 bg-main text-white rounded-md mx-auto mt-4'
            onClick={() => {
              addProductToCart(product.id);
              notify();
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <RelatedProducts product={product} />
    </>
  );
}
