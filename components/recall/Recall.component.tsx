"use client"

import React from 'react'
import LottieAnimation from '../animation/LottieAnimation.component'

export default function RecallComponent() {
    return (
        <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-4 w-full max-w-[1500px] mx-auto my-8'>
            <LottieAnimation />
            <span className='flex flex-col justify-start lg:items-start items-center gap-2 lg:w-1/2 w-full'>
                <h1 className="font-bold lg:text-6xl text-4xl text-center lg:text-left">Tools Help Achieve Your Goals</h1>
                <p className='font-medium lg:text-left text-center'>Whether you’re looking to streamline your workflow or enhance your productivity, our tools are designed to help you achieve your goals with ease and efficiency.</p>
                <button className="mt-10 text-xl text-black font-bold flex flex-row justify-start items-center gap-4 group">
                    <p>See Prices</p>
                    <i className="ri-arrow-right-long-line transition-transform duration-300 transform translate-x-0 group-hover:translate-x-4 opacity-0 group-hover:opacity-100"></i>
                </button>
            </span>
        </div>
    )
}