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

  const fileStyle = useMemo(() => '', []);

  const onDrop = () => {
    //upload image to ipfs
  };

  const {
    getRootProps,
    getInputedProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });

  return (
    <div className="flex justify-start align-middle sm:px-4 p-16">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white mt-6 text-nft-black-1 text-xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          CREATE YOUR OWN NFT
        </h1>

        <div className="mt-16">
          <p className="font-poppins dark:text-white mt-6 text-nft-black-1 font-semibold text-lg">
            UPLOAD FILE
          </p>
          <div className={fileStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default create_Nft;
