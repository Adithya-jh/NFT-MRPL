import React from 'react';
import { useState, useMemo, useCallback, useContext } from 'react';
import { NFTContext } from '../../context/NFTContext';

import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import Button from '../../Components/Button';
import images from '../../assets';

import Input from '../../Components/Input';

const create_Nft = () => {
  const { uploadToIPFS, createNFT } = useContext(NFTContext);
  const [fileUrl, setFileUrl] = useState(null);
  const { theme } = useTheme();

  const router = useRouter();

  const fileStyle = useMemo(
    () =>
      'dark:bg-nft-black-1 bg-white border dark:border-red border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed',
    []
  );

  const [formInput, setFormInput] = useState({
    price: '',
    name: '',
    description: '',
  });

  // const fileStyle2 = useMemo(
  //   () =>
  //     `'dark:bg-nft-black-1 bg-white border dark:border-red border-nft-gray-2 flex flex-row pt-5 pb-5 pr-5 items-center rounded-sm border-dashed'
  //     ${isDragActive && 'border-file-active'}
  //     ${isDragAccept && 'border-file-accept'}
  //     ${isDragReject && 'border-file-reject'}
  //     `,
  //   [isDragActive, isDragAccept, isDragReject]
  // );

  const onDrop = useCallback(async (acceptedFile) => {
    //upload image to ipfs
    const url = await uploadToIPFS(acceptedFile[0]);
    console.log(url);
    setFileUrl(url);
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
    <div className="flex  sm:px-4 p-16">
      <div className="w-full align-middle justify-center">
        <h1 className="font-poppins dark:text-white mt-6 text-nft-black-1 text-xl minlg:text-4xl font-semibold  xs:ml-0">
          Create your own NFT
        </h1>

        <div className="mt-16">
          <p className="font-poppins dark:text-white mt-6 text-nft-black-1 font-semibold text-lg">
            Upload File
          </p>
          <div className="relative mt-6 pb-5 pt-5 h-500 border border-dashed">
            <div
              {...getRootProps()}
              // className={fileStyle2}
              className="dark:bg-nft-black-1  dark:border-white border-black flex flex-row items-center rounded-sm border-dashed"
            >
              <input {...getInputProps()} />
              <div className="flex justify-center mt-5 mb-6 pt-6 items-center flex-col  text-center w-full h-[100%]">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  JPG,PNG,GIF,SVG,WEBM,MP3,MP4
                </p>

                <div className="mt-6 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    className={theme === 'light' && 'filter invert'}
                    alt="uplaod"
                  />
                </div>

                <p className="font-poppins mt-6 dark:text-white text-nft-black-1 font-semibold text-sm">
                  Drag and Drop Files
                </p>
                <p className="font-poppins mt-3 dark:text-white text-nft-black-1 font-semibold text-sm">
                  or Browse media on your device
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <Image
                    src={fileUrl}
                    width={100}
                    height={100}
                    alt="imgUploaded"
                  />
                </div>
              </aside>
            )}
          </div>
        </div>
        <Input
          InputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) =>
            setFormInput({ ...formInput, name: e.target.value })
          }
        />
        <Input
          InputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={(e) =>
            setFormInput({ ...formInput, description: e.target.value })
          }
        />
        <Input
          InputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) =>
            setFormInput({ ...formInput, price: e.target.value })
          }
        />

        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create NFT"
            className="rounded-xl"
            handleClick={() => createNFT(formInput, fileUrl)}
          />
        </div>
      </div>
    </div>
  );
};

export default create_Nft;
