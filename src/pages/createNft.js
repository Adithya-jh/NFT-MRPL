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
      'dark:bg-nft-black-1 p-5 bg-red border dark:border-red border-nft-gray-2 flex flex-col items-centerrounded-sm border-dashed',
    []
  );

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

  return (
    <div className="flex justify-start align-middle sm:px-4 p-16">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white mt-6 text-nft-black-1 text-xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          CREATE YOUR OWN NFT
        </h1>

        <div className="mt-3">
          <div className="mt-16">
            <p className="font-poppins dark:text-white mt-6 text-nft-black-1 font-semibold text-lg">
              UPLOAD FILE
            </p>
            <div className="relative mt-6 w-full p-5 h-500">
              <div
                {...getRootProps()}
                className={fileStyle}
                // className="dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed"
              >
                <input {...getInputProps()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create_Nft;
