import React, { useState } from 'react';
import style from './ForgetPassword.module.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

export default function ForgetPassword() {
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(values) {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        values
      );
      navigate('/verify-code');
      console.log(data);

      setIsLoading(false);
    } catch (error) {
      setApiError(error.response.data.message);
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: handleSubmit,
  });
  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-xl'>
        <h1 className='text-3xl font-semibold text-center mb-6 text-emerald-700'>
          Please Enter Your Email
        </h1>
        <form onSubmit={formik.handleSubmit}>
          {/* EMAIL */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='email'
              name='email'
              id='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Email
            </label>
          </div>

          {!isLoading ? (
            <button
              type='submit'
              className='w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 transition'
            >
              Submit
            </button>
          ) : (
            <button
              type='button'
              className='w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 transition'
            >
              <i className='fas fa-spinner fa-spin'></i>
            </button>
          )}

          {apiError && (
            <p className='mt-4 text-sm text-red-600 text-center'>{apiError}</p>
          )}
        </form>
      </div>
    </div>
  );
}
