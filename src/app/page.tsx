import React from 'react';
import Image from 'next/image';

export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 text-center">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image 
            src="/saltydose.png" 
            alt="Salty Dose Logo" 
            width={300} 
            height={300} 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
          />
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">Under Construction</h1>
          <p className="text-2xl sm:text-3xl font-normal tracking-tight text-gray-700">but worth the wait!</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-12 mb-8 text-center">
        <p className="text-lg sm:text-xl text-gray-800 tracking-tight font-medium">#NoMoreSecret</p>
      </div>
    </div>
  );
}
