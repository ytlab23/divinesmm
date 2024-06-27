import React from 'react';

const OrderCard = ({ title, content, icon, num }) => {
  return (
    <div className="order-box flex flex-col rounded-2xl max-w-[280px] relative items-center justify-center text-center px-4 py-8 gap-y-6 bg-white text-neutral-800">
      <h1 className="flex justify-center items-center w-[70px] h-[70px] rounded-full text-2xl bg-cyan-600 -mt-14 text-white font-bold">
        {num}
      </h1>
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default OrderCard;
