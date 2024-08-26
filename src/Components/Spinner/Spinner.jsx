import React, { useState } from 'react';
import style from './Spinner.module.css';
import { Bars } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <>
      <div className='flex justify-center'>
        <Bars
          height='100'
          width='100'
          color='#4fa94d'
          ariaLabel='bars-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    </>
  );
}
