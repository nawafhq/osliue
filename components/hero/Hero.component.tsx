import React from 'react'
import HeaderComponent from '../header/Header.component';
import CallAction from './CallAction.component';

export default function HeroComponent() {
  return (
    <div className='flex flex-col items-center gap-4 p-6 bg-[#2AAD5F] rounded-3xl w-full max-w-[1500px] mx-auto'>
      <HeaderComponent />
      <CallAction />
    </div>
  );
};