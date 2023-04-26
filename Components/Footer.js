import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading, items }) => {
  <div>
    <h3>{heading}</h3>
    {items.map((item, index) => {
      <p key={index}>{item}</p>;
    })}
  </div>;
};

export const Footer = () => {
  const { theme } = useTheme();
  const items = ['Explore', 'How it Works', 'Contact Us'];
  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className=" w-full  minmd:w-4/5 flex flex-row md:flex-col sm:p-4 p-16 ">
        <div className="flexStart flex-1 flex-col ">
          <div className="flexCenter cursor-pointer">
            <Image ge src={images.logo02} width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              CryptoK
            </p>
          </div>
          <div className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            GET THE LATEST UPDATES
          </div>

          <div
            className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border
          dark:border-nft-black-2 border-nft-gray-2 rounded-md
          "
          >
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white
               text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
            />
            <div className="flex-initial ">
              <Button btnName="Email Me" classStyles="rounded-md" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
            {/* <FooterLinks
              heading="Cryptokat"
              items={['Explore', 'How it Works', 'Contact Us']}
            /> */}

            <div className="flex flex-col">
              <h3>Cryptokat</h3>
              {/* {items.map((item, index) => {
              <p key={index}>{item}</p>;
            })} */}

              <div className="flex flex-col">
                <p>Explore</p>
                <p>How it Works</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16 ">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7 ">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            CRYPTOKET, INC. ALL RIGHTS RESERVED
          </p>

          <div className="flex flex-row sm:mt-4">
            {
              // [
              //   images.instagram,
              //   images.twitter,
              //   images.telegram,
              //   images.discord,
              // ].map((image, index) => {
              //   <div className="mx-2 cursor-pointer" key={index}>
              //     <Image
              //       src={image}
              //       width={24}
              //       height={24}
              //       alt="socials"
              //       className={theme === 'light' && 'filter invert'}
              //     />
              //   </div>;
              // })

              <div className="mx-4 cursor-pointer flex flex-row">
                <Image
                  src={images.instagram}
                  width={24}
                  height={24}
                  alt="socials"
                  className={
                    (theme === 'light' && 'filter invert mx-2') || 'mx-2'
                  }
                />
                <Image
                  src={images.twitter}
                  width={24}
                  height={24}
                  alt="social"
                  className={
                    (theme === 'light' && 'filter invert mx-2') || 'mx-2'
                  }
                />

                <Image
                  src={images.telegram}
                  width={24}
                  height={24}
                  alt="socials"
                  className={
                    (theme === 'light' && 'filter invert mx-2') || 'mx-2'
                  }
                />

                <Image
                  src={images.discord}
                  width={24}
                  height={24}
                  alt="socials"
                  className={
                    (theme === 'light' && 'filter invert mx-2') || 'mx-2'
                  }
                />
              </div>
            }
          </div>

          {/* <div className="flex flex-row sm:mt-4">
            <div className="flex flex-col mx-2 cursor-pointer">
              <Image
                src={images.instagram}
                width={24}
                height={24}
                alt="socials"
                className={theme === 'light' && 'filter invert'}
              />
              <Image
                src={images.twitter}
                width={24}
                height={24}
                alt="socials"
                className={theme === 'light' && 'filter invert'}
              />
              <Image
                src={images.telegram}
                width={24}
                height={24}
                alt="socials"
                className={theme === 'light' && 'filter invert'}
              />
              <Image
                src={images.discord}
                width={24}
                height={24}
                alt="socials"
                className={theme === 'light' && 'filter invert'}
              />
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
