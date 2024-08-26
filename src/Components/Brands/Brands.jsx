import React, { useEffect, useState } from 'react';
import style from './Brands.module.css';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import BrandDetails from '../BrandDetails/BrandDetails';

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  function brandClick(brand) {
    setSelectedBrand(brand);
  }

  function closeModal() {
    setSelectedBrand(null);
  }

  useEffect(function () {
    async function getBrands() {
      try {
        const { data } = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/brands`
        );

        console.log(data);
        setBrands(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBrands();
  }, []);

  return (
    <>
      <h1 className='text-4xl text-center font-bold mb-8 text-gray-800'>
        Brands
      </h1>

      {brands.length ? (
        <div className='flex flex-wrap justify-center gap-8 mx-auto'>
          {brands.map((brand) => (
            <div
              key={brand._id}
              className='text-center md:w-1/4 p-4 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'
              onClick={() => brandClick(brand)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className='w-full h-48 object-cover rounded-t-lg '
              />
              <h3 className='font-semibold text-2xl mt-4 text-gray-900 '>
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center pt-20'>
          <Spinner />
        </div>
      )}

      <BrandDetails
        isOpen={!!selectedBrand}
        onClose={closeModal}
        brand={selectedBrand}
      />
    </>
  );
}
