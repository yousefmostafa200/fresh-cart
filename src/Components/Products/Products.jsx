import React, { useEffect, useState } from 'react';
import style from './Products.module.css';
import axios from 'axios';
import RecentProducts from '../RecentProducts/RecentProducts';
import Spinner from '../Spinner/Spinner';
import Search from '../Search/Search';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  async function getProducts() {
    try {
      const { data } = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/products'
      );

      // console.log(data.data);
      setProducts(data.data);
      setFilteredProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(products);

  useEffect(function () {
    getProducts();
  }, []);

  function handleSubmit(input) {
    setSearchInput(input);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <>
      <Search onSubmit={handleSubmit} />
      {filteredProducts.length ? (
        <div className='flex flex-wrap'>
          {filteredProducts.map((product) => (
            <RecentProducts product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center pt-20'>
          <Spinner />
        </div>
      )}
    </>
  );
}
