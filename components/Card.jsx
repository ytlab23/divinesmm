import React from 'react';
import Image from 'next/image';

const Card = ({ img, title, content }) => {
  return (
    <div className="bg-white max-w-[400px] text-center border rounded-2xl flex flex-col gap-y-8 justify-center items-center p-6 text-black">
      <Image src={img} alt="price" className="max-w-[80px]" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Card;
