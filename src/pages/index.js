import Image from 'next/image';
// import { Inter } from 'next/font/google'
import Banner from '../../Components/Banner';
import CreatorCard from '../../Components/CreatorCard';

import images from '../../assets';

import { useRef, useEffect, useState } from 'react';
import { makeId } from '../../utils/makeId';

export default function Home() {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);
  return (
    <div className="flex justify-center sm:px-4 p-12 ">
      <div className="w-full minmd:w-4/5 ">
        <Banner
          banner="Discover, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        />

        <div>
          <h1
            className="font-poppins dark:text-white text-nft-black-1 text-2xl
           minlg:text-4xl font-semibold ml-4 xs:ml-0"
          >
            Best Creators
          </h1>

          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => {
                return (
                  <CreatorCard
                    key={i}
                    rank={i}
                    CreatorImage={images[`creator${i}`]}
                    CreatorName={`0x${makeId(3)}...${makeId(4)}`}
                    CreatorEths={10 - i * 0.5}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
