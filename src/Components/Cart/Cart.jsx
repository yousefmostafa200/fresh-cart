import React, { useContext, useEffect, useState } from 'react';
import style from './Cart.module.css';
import { CartContext, useCart } from '../../Context/CartContext';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

export default function Cart() {
  // const { getCart, cart,updateProductCount,deleteProductFromCart } = useCart();
  const { getCart, cart, updateProductCount, deleteProductFromCart } =
    useContext(CartContext);

  useEffect(function () {
    getCart();
  }, []);

  return (
    <>
      <h1 className='text-3xl mb-6'>Cart</h1>

      {!cart ? (
        <Spinner />
      ) : cart.data?.products.length === 0 ? (
        <div className='container mx-auto p-20 my-8 bg-slate-100 text-center'>
          <h2 className='text-3xl'>Cart is empty, Start Shopping</h2>
        </div>
      ) : (
        <>
          <div className='relative w-full md:w-3/4 shadow-md md:rounded-lg mx-auto overflow-x-auto'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='w-1/6 px-4 py-3'>
                    <span className='sr-only'>Image</span>
                  </th>
                  <th scope='col' className='w-2/6 px-6 py-3'>
                    Product
                  </th>
                  <th scope='col' className='w-1/6 px-4 py-3'>
                    Qty
                  </th>
                  <th scope='col' className='w-1/6 px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='w-1/6 px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.data?.products?.map((product) => (
                  <tr
                    key={product.product?.id}
                    className='bg-white border-b hover:bg-gray-50'
                  >
                    <td className='p-4'>
                      <img
                        src={product.product.imageCover}
                        className='w-full h-24 md:h-[150px] object-cover'
                      />
                    </td>
                    <td className='px-2 py-4 font-semibold text-gray-900'>
                      {product.product.title}
                    </td>
                    <td className='py-4'>
                      <div className='flex items-center'>
                        <button
                          className='inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'
                          type='button'
                          onClick={() =>
                            product.count <= 1
                              ? ''
                              : updateProductCount(
                                  product.product.id,
                                  product.count - 1
                                )
                          }
                        >
                          <span className='sr-only'>Decrease Quantity</span>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 2'
                          >
                            <path
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M1 1h16'
                            />
                          </svg>
                        </button>
                        <div>
                          <span>{product.count}</span>
                        </div>
                        <button
                          className='inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'
                          type='button'
                          onClick={() =>
                            updateProductCount(
                              product.product.id,
                              product.count + 1
                            )
                          }
                        >
                          <span className='sr-only'>Increase Quantity</span>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 18'
                          >
                            <path
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 1v16M1 9h16'
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-900'>
                      {product.price} EGP
                    </td>
                    <td className='px-6 py-4'>
                      <button
                        className='font-medium text-red-600 hover:underline'
                        onClick={() => {
                          deleteProductFromCart(product.product.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='flex justify-between px-8 py-6 text-2xl'>
              <span>Total Price</span>
              <span>
                <strong>{cart.data?.totalCartPrice}</strong>
              </span>
            </div>
          </div>
          <div className='mt-8 md:ml-24 lg:ml-40  duration-300 text-center md:text-left'>
            <Link to='/checkout'>
              <button className='text-white bg-green-700 py-3 px-6 rounded-md hover:bg-green-800 inline-block'>
                Check Out
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
