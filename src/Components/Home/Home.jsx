import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import axios from 'axios';
import RecentProducts from '../RecentProducts/RecentProducts';
import Spinner from '../Spinner/Spinner';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';
import Products from '../Products/Products';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const { data } = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/products'
      );

      // console.log(data.data);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getProducts();
  }, []);

  return (
    <>
      <MainSlider />
      <CategoriesSlider />

      <Products />

      {/* {products.length ? (
        <div className='flex flex-wrap'>
          {products.map((product, i) => (
            <RecentProducts product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center pt-20'>
          <Spinner />
        </div>
      )} */}
    </>
  );
}
