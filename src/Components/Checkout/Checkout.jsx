import React, { useContext, useState } from 'react';
import style from './Checkout.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CartContext } from '../../Context/CartContext';
export default function Checkout() {
  const { checkout } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: '',
    },

    onSubmit: checkout,
  });
  return (
    <>
      <div className='max-w-md pt-10  mx-auto'>
        <h2 className='text-3xl py-5 font-semibold'>Checkout</h2>
        <form className='max-w-md' onSubmit={formik.handleSubmit}>
          {/* EMAIL */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='details'
              id='details'
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='details'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Details
            </label>
          </div>

          {/* CITY */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='city'
              id='city'
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='details'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your City
            </label>
          </div>

          {/* PHONE */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='tele'
              name='phone'
              id='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='password'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Phone
            </label>
          </div>

          <button
            type='submit'
            className='text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
          >
            Checkout
          </button>
        </form>
      </div>
    </>
  );
}
