import React from 'react';

export default function Banner({ parentStyles, banner, childStyles }) {
  return (
    <div
      className="relative w-full flex items-center z-0 overflow-hidden nft-gradient 
      justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
    >
      <p className="font-bold  md:text-4xl sm:text-2xl xs:text-xl text-left text-5xl font-poppins leading-70">
        {banner}
      </p>

      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
      <div className="absolute w-72 h-72 sm:w-56 sm:h-56  rounded-full white-bg -bottom-24 -right-14 -z-5" />
    </div>
  );
}
