import React, { useEffect, useState } from 'react';
import style from './BrandDetails.module.css';

export default function BrandDetails({ isOpen, onClose, brand }) {
  useEffect(
    function () {
      function handleEscape(e) {
        if (e.key === 'Escape') {
          onClose();
        }
      }

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='relative bg-white rounded-lg shadow-lg w-full max-w-lg'>
        <button
          className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
          onClick={onClose}
        >
          <i className='fas fa-times text-2xl'></i>
        </button>
        <div className='p-6'>
          <img
            src={brand.image}
            alt={brand.name}
            className='w-full h-64 object-cover rounded-md'
          />
          <h3 className='text-2xl font-semibold mt-4'>{brand.name}</h3>
        </div>
      </div>
    </div>
  );
}
