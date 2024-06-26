import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-inherit fixed z-20 top-0 left-0 flex justify-between items-center py-4 px-16">
      <div className="logo">
        <Link href="/" className="font-bold text-2xl">
          divinesmm
        </Link>
      </div>
      <div className="flex items-center gap-x-8">
        <Link className="" href="#services">
          Services
        </Link>
        <Link className="" href="/">
          Terms
        </Link>
        <Link className="" href="/">
          FAQS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
