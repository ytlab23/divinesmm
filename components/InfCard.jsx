import React from 'react';
import { FaRegSquareCheck } from 'react-icons/fa6';

const InfCard = ({ num, title }) => {
  return (
    <div className="flex items-center gap-x-4 bg-white p-8 text-neutral-800 rounded-2xl min-w-[280px]">
      <div className="flex items-center justify-center w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#fcdfd7] rounded-full">
        <FaRegSquareCheck
          size={40}
          className="w-[25px]"
          color="rgb(14 116 144 / var(--tw-bg-opacity))"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="sm:text-3xl text-xl font-bold">{num}</h2>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default InfCard;
