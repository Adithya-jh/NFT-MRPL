import Image from 'next/image';
// import { Inter } from 'next/font/google'
import Banner from '../../Components/Banner';

export default function Home() {
  return (
    <div className="flex justify-center sm:px-4 p-12 ">
      <div className="w-full minmd:w-4/5 ">
        <Banner
          banner="Discover, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        />
      </div>
    </div>
  );
}
