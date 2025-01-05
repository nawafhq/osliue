import React from 'react'
import HeaderComponent from '../header/Header.component';
import CallAction from './CallAction.component';

export default function HeroComponent() {
  return (
    <div className='flex flex-col items-center gap-4 p-6 m-8 bg-[#2AAD5F] rounded-3xl'>
      <HeaderComponent />
      <CallAction />
    </div>
  );
};