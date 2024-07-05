import Link from 'next/link';
import React from 'react';
import LanguageChanger from './LanguageChanger';

const Navbar = () => {
  return (
    <div className="w-full bg-inherit fixed z-20 top-0 left-0 flex flex-wrap gap-4 sm:flex-nowrap justify-between items-center py-4 px-8 sm:px-16">
      <div className="logo">
        <Link href="/" className="font-bold text-2xl">
          divinesmm
        </Link>
        <LanguageChanger />
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
