import React from 'react';
import { useState, useMemo, useCallback, useContext } from 'react';

import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Button } from '../../Components/Button';
import images from '../../assets';

const create_Nft = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const { theme } = useTheme();

  const fileStyle = useMemo(
    () =>
      'dark:bg-nft-black-1  bg-white border dark:border-red border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed',
    []
  );

  // const fileStyle2 = useMemo(
  //   () =>
  //     `'dark:bg-nft-black-1 bg-white border dark:border-red border-nft-gray-2 flex flex-row pt-5 pb-5 pr-5 items-center rounded-sm border-dashed'
  //     ${isDragActive && 'border-file-active'}
  //     ${isDragAccept && 'border-file-accept'}
  //     ${isDragReject && 'border-file-reject'}
  //     `,
  //   [isDragActive, isDragAccept, isDragReject]
  // );

  const onDrop = useCallback(() => {
    //upload image to ipfs
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/*',
    // style: fileStyle,
    maxSize: 5000000,
  });

  const fileStyle2 = useMemo(
    () =>
      `'dark:bg-black bg-white border dark:border-red border-nft-gray-2 flex flex-row pt-5 pb-5 pr-5 items-center rounded-sm border-dashed' 
      ${isDragActive && 'border-file-active'}
      ${isDragAccept && 'border-file-accept'}
      ${isDragReject && 'border-file-reject'}
      `,
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <div className="flex justify-start align-middle sm:px-4 p-16">
      <div className="w-full">
        <h1 className="font-poppins dark:text-white mt-6 text-nft-black-1 text-xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          CREATE YOUR OWN NFT
        </h1>

        <div className="mt-3">
          <div className="mt-16">
            <p className="font-poppins dark:text-white mt-6 text-nft-black-1 font-semibold text-lg">
              UPLOAD FILE
            </p>
            <div className="relative mt-6 pb-5 pt-5 h-500 border border-dashed">
              <div
                {...getRootProps()}
                // className={fileStyle2}
                className="dark:bg-nft-black-1  dark:border-white border-nft-gray-2 p-5 flex flex-row items-center rounded-sm border-dashed"
              >
                <input {...getInputProps()} />
                <div className="flex justify-center mt-6 mb-6 pt-6 items-center  text-center w-full h-[100%]">
                  <p className="font-poppins z-2 light:text-black font-semibold text-lg">
                    JPG,PNG,GIF,SVG,WEBM,MP3,MP4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create_Nft;
