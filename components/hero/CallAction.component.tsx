import React from 'react'

export default function CallAction() {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-start w-full lg:p-4 p-0 gap-10 my-8'>
            <span className='flex flex-col justify-start lg:items-start items-center gap-2 text-[#F2EEE3] lg:w-1/2 w-full'>
                <h1 className="font-bold lg:text-6xl text-4xl text-center lg:text-left">
                    {'Design No Limit'}
                    <br />
                    {'Create No Rules'}
                </h1>
                <p className='font-medium lg:text-left text-center'>Unlock your creative potential with our intuitive design platform, built for professionals like you.</p>
                <button className='py-3 px-6 rounded-full lg:mt-10 mt-2 bg-[#F2EEE3] text-black font-bold hover:bg-[#ddd9d0]'>Create Account</button>
            </span>
            <div className='flex flex-col justify-start items-center gap-4 lg:w-1/2 w-full'>
                <img alt='Call Action Background' width={2000} height={2000} src='/bg-hero.svg' className='h-full w-full object-contain' />
            </div>
        </div>
    );
};