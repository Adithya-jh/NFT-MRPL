import Image from 'next/image';
// import { Inter } from 'next/font/google'
import Banner from '../../Components/Banner';

export default function Home() {
  return (
    <div className="flex justify-center sm:px-4 p-12 ">
      <div className="w-full minmd:w-4/5">
        <Banner parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl" />
      </div>
    </div>
  );
}
