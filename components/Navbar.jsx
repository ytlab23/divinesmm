import Link from 'next/link';
import React from 'react';
import LanguageChanger from './LanguageChanger';
import Image from 'next/image';

import logo from '../assets/logo2.png';

const Navbar = () => {
  return (
    <div className="w-full bg-inherit fixed z-20 top-0 left-0 flex flex-wrap gap-4 sm:flex-nowrap justify-between items-center py-4 px-8 sm:px-16">
      <div className="logo  flex gap-x-4 items-center">
        <Link href="/">
          <Image src={logo} className="w-[60px] h-[60px]" alt="logo" />
        </Link>

        <div>
          <Link href="/" className="font-bold text-2xl">
            divinesmm
          </Link>
          <LanguageChanger />
        </div>
      </div>
      <div className="flex items-center sm:gap-x-8 gap-x-6">
        <Link className=" text-sm sm:texbase" href="#services">
          Services
        </Link>
        <Link className=" text-sm sm:texbase" href="#how-to-order">
          How to Order
        </Link>
        <Link className=" text-sm sm:texbase" href="#why-us">
          Why us
        </Link>
        <Link className=" text-sm sm:texbase" href="#contact">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
