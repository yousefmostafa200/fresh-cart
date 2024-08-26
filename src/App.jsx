import { useState } from 'react';

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Products from './Components/Products/Products.jsx';
import Categories from './Components/Categories/Categories.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';
import AllOrders from './Components/AllOrders/AllOrders.jsx';
import Brands from './Components/Brands/Brands.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Notfound from './Components/Notfound/Notfound.jsx';
import { UserProvider } from './Context/UserContext.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import VerifyCode from './Components/VerifyCode/VerifyCode';
import ResetPassword from './Components/ResetPassword/ResetPassword.jsx';

import CartProvider from './Context/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WishlistProvider from './Context/WishlistContext.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';

let routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products',
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: 'productdetails/:id',
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: 'categories',
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: 'allorders',
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: 'brands',
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },

      {
        path: 'wishlist',
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'verify-code', element: <VerifyCode /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <WishlistProvider>
        <CartProvider>
          <RouterProvider router={routers}></RouterProvider>;
          <ToastContainer />
        </CartProvider>
      </WishlistProvider>
    </UserProvider>
  );
}

export default App;
