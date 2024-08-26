import React, { useContext, useEffect, useState } from 'react';
import style from './RecentProducts.module.css';
import { Link } from 'react-router-dom';
import { CartContext, useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WishlistContext } from '../../Context/WishlistContext';

export default function RecentProducts({ product }) {
  // const { addProductToCart } = useContext(CartContext);
  const { addProductToWishlist, deleteProductFromWishlist, getWishlist } =
    useContext(WishlistContext);
  const { addProductToCart } = useCart();

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    async function checkWishlist() {
      const wishlist = await getWishlist();
      const isInWishlist = wishlist?.some((item) => item._id === product.id);
      setIsWishlisted(isInWishlist);
    }
    checkWishlist();
  }, [product.id, getWishlist]);

  function handleWishlistClick() {
    if (isWishlisted) {
      deleteProductFromWishlist(product.id);
      setIsWishlisted(false);
    } else {
      addProductToWishlist(product.id);
      setIsWishlisted(true);
    }
  }

  const notify = () =>
    toast(`${product.title.split(' ').slice(0, 2).join(' ')} added to cart 🎉`);

  return (
    <>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
        <div className='bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out'>
          <Link to={`/productdetails/${product.id}`}>
            <img
              src={product.imageCover}
              className='w-full h-48 object-cover'
              alt={product.title}
            />
            <div className='p-4'>
              <h2 className='text-sm text-gray-500'>{product.category.name}</h2>
              <h3 className='text-lg font-medium text-gray-800 mb-2'>
                {product.title.split(' ').slice(0, 2).join(' ')}
              </h3>
              <div className='flex justify-between items-center'>
                <h4 className='text-xl font-bold text-main'>
                  {product.price} EGP
                </h4>
                <div className='flex items-center text-yellow-500'>
                  <i className='fas fa-star mr-1'></i>
                  <span>{product.ratingsAverage}</span>
                </div>
              </div>
            </div>
          </Link>

          <div className='px-4 pb-4 flex justify-between items-center'>
            <button
              onClick={() => {
                addProductToCart(product.id);
                notify();
              }}
              className=' w-3/4 bg-main text-white rounded-md py-1.5 text-center hover:bg-blue-700 transition duration-300 ease-in-out'
            >
              Add To Cart
            </button>
            <button
              onClick={handleWishlistClick}
              className={`fa-xl rounded-md px-2 ${
                isWishlisted ? 'text-red-700' : 'text-gray-400'
              } hover:text-red-700 transition duration-300 ease-in-out`}
            >
              <i className='fa-solid fa-heart'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
