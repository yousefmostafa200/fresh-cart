import React, { useContext, useEffect, useState } from 'react';
import style from './Wishlist.module.css';
import { WishlistContext } from '../../Context/WishlistContext';
import { CartContext, useCart } from '../../Context/CartContext';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Wishlist() {
  const { wishlist, deleteProductFromWishlist, getWishlist } =
    useContext(WishlistContext);
  const { addProductToCart } = useContext(CartContext);

  useEffect(
    function () {
      getWishlist();
    },
    [getWishlist]
  );

  console.log(wishlist.data);

  // const notify = () =>
  //   toast(`${product.title.split(' ').slice(0, 2).join(' ')} added to cart 🎉`);

  return (
    <>
      <h1 className='text-3xl mb-6'>Wishlist</h1>

      {!wishlist ? (
        <Spinner />
      ) : wishlist.data?.length === 0 ? (
        <div className='container mx-auto p-20 my-8 bg-slate-100 text-center'>
          <h2 className='text-3xl'>Wishlist is empty, Start Shopping</h2>
        </div>
      ) : (
        <div className='relative w-full md:w-3/4 shadow-md sm:rounded-lg mx-auto'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-4 py-3'>
                  <span className='sr-only'>Image</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  Product
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlist.data?.map((product, i) => (
                <tr key={i} className='bg-white border-b hover:bg-gray-50'>
                  <td className='p-4 w-24 md:w-36'>
                    <img
                      src={product.imageCover}
                      className='w-full h-full object-cover rounded-lg'
                      alt={product.title}
                    />
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900'>
                    {product.title}
                  </td>
                  <td className='px-6 py-4 font-semibold text-gray-900'>
                    {product.price} EGP
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex flex-col gap-2'>
                      <button
                        className='font-medium py-2 px-4 rounded-md text-white bg-red-600 hover:bg-red-700 duration-300'
                        onClick={() => {
                          deleteProductFromWishlist(product._id);
                          getWishlist();
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className='font-medium py-2 px-4 rounded-md bg-green-600 text-white hover:bg-green-700 duration-300'
                        onClick={() => {
                          addProductToCart(product.id);
                          toast(
                            `${product.title
                              .split(' ')
                              .slice(0, 2)
                              .join(' ')} added to cart 🎉`
                          );
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
