import React, { useContext, useState } from 'react';
import style from './Navbar.module.css';
import logo from '../../assets/images/freshcart-logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, setUserData } = useContext(userContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  // console.log(userData);

  function logout() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  return (
    <>
      <nav className='bg-zinc-100 shadow-md fixed top-0 inset-x-0 md:py-6 py-4  z-50 md:px-6 px-3'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/'>
            <img src={logo} width={120} alt='Logo' />
          </Link>

          <ul className='hidden md:flex space-x-6 text-gray-600'>
            <li>
              <NavLink
                to='/'
                className='hover:text-main hover:text-slate-600 transition duration-300 ease-in-out'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='cart'
                className='hover:text-main hover:text-slate-600 transition duration-300 ease-in-out'
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to='wishlist'
                className='hover:text-main hover:text-slate-600 transition duration-300 ease-in-out'
              >
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink
                to='products'
                className='hover:text-main hover:text-slate-600 transition duration-300 ease-in-out'
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to='categories'
                className='hover:text-main hover:text-slate-600 transition duration-300 ease-in-out'
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to='brands'
                className='hover:text-main hover:text-slate-600 transition duration-300 ease-in-out'
              >
                Brands
              </NavLink>
            </li>
          </ul>

          {/* User and Social Links */}
          <div className='hidden md:flex items-center space-x-4 text-gray-600'>
            {userData ? (
              <>
                <div className='relative'>
                  <NavLink to='cart'>
                    <i className='text-main fa-2xl fa-solid fa-cart-shopping'></i>
                  </NavLink>
                  <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5'>
                    {cart ? cart.numOfCartItems : '0'}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className='hover:text-main transition duration-300 ease-in-out'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to='login'
                  className='hover:text-main transition duration-300 ease-in-out'
                >
                  Login
                </NavLink>
                <NavLink
                  to='register'
                  className='hover:text-main transition duration-300 ease-in-out'
                >
                  Register
                </NavLink>
              </>
            )}
            <div className='flex space-x-2 text-gray-600'>
              <i className='fab fa-facebook-f hover:text-blue-600 transition duration-300 ease-in-out'></i>
              <i className='fab fa-linkedin-in hover:text-blue-700 transition duration-300 ease-in-out'></i>
              <i className='fab fa-youtube hover:text-red-600 transition duration-300 ease-in-out'></i>
              <i className='fab fa-twitter hover:text-blue-500 transition duration-300 ease-in-out'></i>
              <i className='fab fa-instagram hover:text-pink-700 transition duration-300 ease-in-out'></i>
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 focus:outline-none'
            >
              <i className={`fa-solid fa-bars fa-2xl`}></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className='md:hidden bg-zinc-100 shadow-md'>
            <ul className='flex flex-col space-y-4 p-4 text-left text-gray-600'>
              <li>
                <NavLink
                  to='/'
                  className='hover:text-main hover:underline transition duration-300 ease-in-out'
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='cart'
                  className='hover:text-main hover:underline transition duration-300 ease-in-out'
                  onClick={() => setIsOpen(false)}
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='wishlist'
                  className='hover:text-main hover:underline transition duration-300 ease-in-out'
                  onClick={() => setIsOpen(false)}
                >
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='products'
                  className='hover:text-main hover:underline transition duration-300 ease-in-out'
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='categories'
                  className='hover:text-main hover:underline transition duration-300 ease-in-out'
                  onClick={() => setIsOpen(false)}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='brands'
                  className='hover:text-main hover:underline transition duration-300 ease-in-out'
                  onClick={() => setIsOpen(false)}
                >
                  Brands
                </NavLink>
              </li>
              <li>
                {userData ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className='hover:text-main transition duration-300 ease-in-out'
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <NavLink
                      to='login'
                      className='hover:text-main transition duration-300 ease-in-out'
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to='register'
                      className='hover:text-main transition duration-300 ease-in-out'
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
