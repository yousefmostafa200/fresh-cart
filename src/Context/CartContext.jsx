import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { userContext } from './UserContext';

export const CartContext = createContext();

function CartProvider({ children }) {
  const { setUserID } = useContext(userContext);
  const [cart, setCart] = useState([]);

  const headers = { token: localStorage.getItem('userToken') };

  useEffect(() => {
    if (cart.data?.cartOwner) {
      setUserID(cart.data.cartOwner);
      localStorage.setItem('userID', cart.data.cartOwner);
    }
  }, [cart]);

  async function addProductToCart(productId) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        {
          headers,
        }
      );
      console.log(data);
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCart() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers,
        }
      );
      //   console.log(data);
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProductCount(productId, count) {
    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        {
          headers,
        }
      );
      console.log(data);
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProductFromCart(productId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,

        {
          headers,
        }
      );

      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkout(shippingAddress) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,
        { shippingAddress },
        {
          headers,
        }
      );
      console.log(data);
      window.location.href = data.session.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function clearCart() {
    try {
      await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      });
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        deleteProductFromCart,
        updateProductCount,
        addProductToCart,
        getCart,
        cart,
        setCart,
        checkout,

        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export function useCart() {
  const context = useContext(CartContext);
  if (context === 'undefined')
    throw new Error('you using the context outside the scope');

  return context;
}
