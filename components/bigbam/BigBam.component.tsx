import React from 'react';

export default function BigBamComponent() {
  return (
    <div className="bg-cover bg-center h-screen w-full max-w-[1500px] mx-auto rounded-3xl" style={{ backgroundImage: 'url(/images/big-bg.jpg)' }}>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold">Your Content Here</h1>
      </div>
    </div>
  );
};
