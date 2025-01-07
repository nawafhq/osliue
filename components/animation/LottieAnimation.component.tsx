"use client"

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/public/lotties/tools-animation.json'

const LottieAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions}/>
    </div>
  );
};

export default LottieAnimation;