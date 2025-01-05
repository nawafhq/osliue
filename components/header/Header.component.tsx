import React from 'react'

export default function HeaderComponent() {
  return (
    <div className='flex flex-row justify-between items-center w-full'>
      <div className='flex flex-row justify-start items-center gap-6 p-2 pr-6 bg-[#F2EEE3] rounded-full border border-gray-200 shadow-md'>
        <a href='/'>
          <img alt='Logo' width={1080} height={1080} src='/logo.svg' className='w-10 h-10 object-contain' />
        </a>
        <a>
          <h1 className='font-bold hover:underline'>Create Account</h1>
        </a>
        <a>
          <h1 className='font-bold hover:underline'>Contact</h1>
        </a>
      </div>
      <div className='flex flex-row justify-start items-center gap-6 p-1 pr-6 bg-[#F2EEE3] rounded-full border border-gray-200 shadow-md'>
        <a>
          <h1 className='font-bold hover:underline bg-black rounded-full p-3 text-white'>About</h1>
        </a>
        <a>
          <h1 className='font-bold hover:underline'>Prices</h1>
        </a>
        <a>
          <h1 className='font-bold hover:underline'>Solutions</h1>
        </a>
      </div>
    </div>
  );
};