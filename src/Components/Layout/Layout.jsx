import React, { useContext, useEffect, useState } from 'react';
import style from './Layout.module.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { userContext } from '../../Context/UserContext.jsx';

export default function Layout() {
  const { setUserData } = useContext(userContext);

  useEffect(function () {
    if (localStorage.getItem('userToken')) {
      setUserData(localStorage.getItem('userToken'));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className='container md:pt-12 md:mt-10 mt-14'>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
