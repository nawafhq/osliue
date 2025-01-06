"use client"

import React from 'react';
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
}) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  };

  return <Lottie options={defaultOptions} />;
};

export default LottieAnimation;