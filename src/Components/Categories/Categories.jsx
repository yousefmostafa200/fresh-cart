import React, { useEffect, useState } from 'react';
import style from './Categories.module.css';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function categoryClick(category) {
    setSelectedCategory(category);
  }

  function closeModal() {
    setSelectedCategory(null);
  }

  useEffect(function () {
    async function getCategories() {
      try {
        const { data } = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/categories`
        );

        console.log(data);
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  return (
    <>
      <h1 className='text-4xl text-center font-bold mb-8 text-gray-800'>
        Categories
      </h1>

      {categories.length ? (
        <div className='flex flex-wrap justify-center gap-8 mx-auto'>
          {categories.map((category) => (
            <div
              key={category._id}
              className='text-center md:w-1/4 p-2 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'
              onClick={() => categoryClick(category)}
            >
              <img
                src={category.image}
                alt={category.name}
                className='w-full h-80 object-cover rounded-t-lg '
              />
              <h3 className='font-semibold text-2xl mt-4 text-gray-900 '>
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center pt-20'>
          <Spinner />
        </div>
      )}

      <CategoriesDetails
        isOpen={!!selectedCategory}
        onClose={closeModal}
        category={selectedCategory}
      />
    </>
  );
}
