import React, { useContext, useEffect, useState } from 'react';
import style from './AllOrders.module.css';

import { CartContext } from '../../Context/CartContext';
import axios from 'axios';
import { userContext } from '../../Context/UserContext';
import OrderDetails from '../OrderDetails/OrderDetails';

export default function AllOrders() {
  const { clearCart } = useContext(CartContext);
  const { userID } = useContext(userContext);
  const [orders, setOrders] = useState([]);

  useEffect(
    function () {
      async function getOrders() {
        if (userID) {
          try {
            const { data } = await axios.get(
              `https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`
            );

            console.log(data);
            setOrders(data);
          } catch (error) {
            console.log(error);
          }
        }
      }
      getOrders();
    },
    [userID]
  );

  useEffect(function () {
    clearCart();
  }, []);

  return (
    <>
      <h1 className='text-3xl text-center font-medium my-4'>AllOrders</h1>
      {orders.map((order, i) => (
        <OrderDetails key={i} order={order} />
      ))}
    </>
  );
}
