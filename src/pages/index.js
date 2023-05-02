import Image from 'next/image';
// import { Inter } from 'next/font/google'
import Banner from '../../Components/Banner';
import CreatorCard from '../../Components/CreatorCard';
import NFTCard from '../../Components/NFTCard';

import images from '../../assets';

import { useRef, useEffect, useState } from 'react';
import { makeId } from '../../utils/makeId';
import { useTheme } from 'next-themes';

export default function Home() {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);
  const { theme, setTheme } = useTheme();
  const [hideButton, setHideButton] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  };

  useEffect(() => {
    isScrollable();

    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });
  return (
    <div className="flex justify-center sm:px-4 p-12 w-full">
      <div className="w-full  minmd:w-4/5">
        <Banner
          banner="Discover, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        />

        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            BEST CREATORS
          </h1>
          {/* 
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-full overflow-x-scroll no-scrollbar select-none"
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

              <>
                <div
                  onClick={() => {}}
                  className="absolute w-8 h-16 minlg:w-12 minlg:h-12 top-65 cursor-pointer left-0"
                >
                  <Image
                    src={images.left}
                    alt="left"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>

                <div
                  onClick={() => {}}
                  className="absolute w-8 h-16 minlg:w-12 minlg:h-12 top-65 cursor-pointer right-0"
                >
                  <Image
                    src={images.right}
                    alt="left"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
              </>
            </div>
          </div> */}

          <div
            className="relative flex flex-1 max-w-full  mt-3"
            ref={parentRef}
          >
            <div
              className="flex flex-row w-max overflow-x-scroll scrollbar-hide select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="flex-shrink-0">
                  <CreatorCard
                    rank={i}
                    CreatorImage={images[`creator${i}`]}
                    CreatorName={`0x${makeId(3)}...${makeId(4)}`}
                    CreatorEths={10 - i * 0.5}
                  />
                </div>
              ))}

              {!hideButton && (
                <>
                  <div
                    onClick={() => handleScroll('left')}
                    className="absolute w-8 h-16 minlg:w-12 minlg:h-12 top-65 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      alt="left"
                      className={theme === 'light' ? 'filter invert' : ''}
                    />
                  </div>

                  <div
                    onClick={() => handleScroll('right')}
                    className="relative w-8 h-16 minlg:w-12 minlg:h-12 top-65 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      alt="right"
                      className={theme === 'light' ? 'filter invert' : ''}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Created NFTs */}
        <div className="relative mt-6 w-[100%]">
          <div className="flex justify-between  mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">
              HOT BIDS
            </h1>

            <div>Search Bar</div>
          </div>
          <div className="mt-4 w-[100%] justify-start flex flex-wrap md:justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return (
                <NFTCard
                  key={`nft-${i}`}
                  nft={{
                    i,
                    name: `Nifty Nft ${i}`,
                    seller: `0x${makeId(3)}...${makeId(4)}`,
                    owner: `0x${makeId(3)}...${makeId(4)}`,
                    description: 'Cool NFT on Sale',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
