import React from 'react';
import animationData from '@/public/lotties/tools-animation.json';
import LottieAnimation from '../animations/LottieAnimation';

export default function BriefComponent() {
    return (
        <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-4 w-full max-w-[1500px] mx-auto'>
            <span className='flex flex-col gap-4 justify-start lg:items-start items-center'>
                <h1 className="font-bold lg:text-6xl text-4xl text-center lg:text-left">
                    All Tools Needed In One Workspace
                </h1>
                <p className='font-medium lg:text-left text-center'>Effortlessly access a complete set of design tools in a single workspace. From vector editing to prototyping, collaborate in real-time, and streamline your creative process with everything you need at your fingertips.</p>
                <a
                    href='/'
                    className='group flex flex-row justify-start items-center gap-2 transition-all duration-200 mt-12'
                >
                    <p className='text-xl font-bold group-hover:underline duration-200'>Explore Now</p>
                    <i className="ri-arrow-right-long-line text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                </a>
            </span>
            <LottieAnimation animationData={animationData} loop autoplay />
        </div>
    );
}
