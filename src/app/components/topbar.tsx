"use client";

import Image from 'next/image'
import Advertisement from './advertisement';
import React from 'react';
import Navbar from './navbar';
import brand from '@/app/assets/ylc_logo.svg';

const Topbar: React.FC = () => {

  return (
    <header>
      <div 
        style={{
          backgroundColor: '#000', 
          color: '#FFF', 
        }} 
          className="hidden lg:flex padded-wrapper gap-4 py-4"
        >
        <span className='text-sm'>Sunday, 20th February 2022</span>
        <a href='/signin' className='text-sm'>Sign In/Join</a>
      </div>
      <div className="padded-wrapper hidden lg:flex justify-between items-center ">
        <Image src={brand} alt="brand" width={318} height={75} />
        <Advertisement width={728} height={90} src='' redirectUrl='' alt='ad'/>
      </div>

      <Navbar />
    </header>
  )
}

export default Topbar;