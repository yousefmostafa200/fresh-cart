import React, { useState } from 'react';
import style from './Search.module.css';

export default function Search({ onSubmit }) {
  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
    onSubmit(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <>
      <form
        className='flex justify-center w-full mb-7'
        onSubmit={handleFormSubmit}
      >
        <label
          htmlFor='search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only'
        >
          Search
        </label>
        <div className='relative w-3/4'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='search'
            className='block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none duration-300'
            placeholder='Search'
            required
            value={input}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  );
}
