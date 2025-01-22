import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-[#FFEBB8] min-h-[900] px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto grid grid-cols-2 items-center">
        {/* Text Section */}
        <div className="text-left space-y-4">
          <h1 className="font-poppins font-semibold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Rocket single<br />seater
          </h1>
         
          <Link
            href="/shop"
            className="inline-block text-base sm:text-lg font-medium text-gray-800 underline underline-offset-4 decoration-2 hover:text-gray-600 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/pic/Rocket.png"
            alt="Rocket Sofa"
            width={500}
            height={500}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
