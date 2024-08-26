import axios from 'axios';
import style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';

function Register() {
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const { userData, setUserData } = useUser();
  const { setUserData } = useContext(userContext);

  async function handleSubmit(values) {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/signup',
        values
      );
      console.log(data);

      localStorage.setItem('userToken', data.token);
      navigate('/');
      setIsLoading(false);
      setUserData(data.token);
    } catch (error) {
      console.error('Error during API call:', error);

      // Add a fallback to handle cases where error.response might be undefined
      if (error.response && error.response.data) {
        setApiError(error.response.data.message);
      } else {
        setApiError('An unexpected error occurred.');
      }

      setIsLoading(false);
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'min length is 3')
      .max(15, 'max length must be 15')
      .required('name is required'),
    email: Yup.string().email('email invalid').required('email is required'),
    password: Yup.string()
      .matches(/^[A-Z]\w{5,10}$/, 'password invalid ex("Yousef123")')
      .required('password is required'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'password and rePassword must match')
      .required('repassword is required'),
    phone: Yup.string()
      .matches(/^(002)?01[0125][0-9]{8}$/, 'phone must be egyptian number')
      .required('phone is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className='max-w-md pt-10  mx-auto'>
        <h2 className='text-3xl py-5 font-semibold'>Register Now</h2>
        <form className='max-w-md' onSubmit={formik.handleSubmit}>
          {apiError && (
            <div
              className='px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400'
              role='alert'
            >
              {apiError}
            </div>
          )}
          {/* NAME */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='name'
              id='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='name'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Name
            </label>
          </div>
          {/* ALERT */}
          {formik.errors.name && formik.touched.name && (
            <div
              className='px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400'
              role='alert'
            >
              {formik.errors.name}
            </div>
          )}

          {/* EMAIL */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='email'
              name='email'
              id='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Email
            </label>
          </div>
          {/* ALERT */}
          {formik.errors.email && formik.touched.email && (
            <div
              className='px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400'
              role='alert'
            >
              {formik.errors.email}
            </div>
          )}

          {/* PASSWORD */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='password'
              id='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='password'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Password
            </label>
          </div>
          {/* ALERT */}
          {formik.errors.password && formik.touched.password && (
            <div
              className='px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400'
              role='alert'
            >
              {formik.errors.password}
            </div>
          )}

          {/* REPASSWORD */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='rePassword'
              id='rePassword'
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='rePassword'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your rePassword
            </label>
          </div>
          {/* ALERT */}
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div
              className='px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400'
              role='alert'
            >
              {formik.errors.rePassword}
            </div>
          )}

          {/* PHONE */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='phone'
              id='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:border-emerald-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='phone'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Your Phone
            </label>
          </div>
          {/* ALERT */}
          {formik.errors.phone && formik.touched.phone && (
            <div
              className='px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400'
              role='alert'
            >
              {formik.errors.phone}
            </div>
          )}

          {!isLoading ? (
            <button
              type='submit'
              className='text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
            >
              Submit
            </button>
          ) : (
            <button
              type='button'
              className='text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-1.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
            >
              <i className='fas fa-spinner fa-spin'></i>
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Register;
