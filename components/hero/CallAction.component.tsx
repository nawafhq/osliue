import React from 'react'

export default function CallAction() {
    return (
        <div className='flex flex-row justify-between items-start w-full p-4 gap-10 my-8'>
            <span className='flex flex-col justify-start items-start gap-2 text-white'>
                <h1 className="font-bold text-4xl">
                    {'Design Without Limits'}
                    <br />
                    {'Create Without Boundaries'}
                </h1>
                <p className='font-medium'>Unlock your creative potential with our intuitive design platform, built for professionals like you. Start your free trial today and bring your ideas to life.</p>
                <button className='py-3 px-6 rounded-full bg-white text-black hover:bg-gray-100 mt-8'>Create Account</button>
            </span>
            <img alt='Call Action Background' width={2000} height={2000} src='/images/hero-bg.png' className='h-full w-1/2 object-contain' />
        </div>
    );
};