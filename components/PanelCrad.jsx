import React from 'react';

const PanelCrad = ({ icon, title, content }) => {
  return (
    <div className="order-box flex flex-col rounded-2xl max-w-[380px] relative items-center justify-center text-center px-4 py-8 gap-y-6 bg-white text-neutral-800">
      <div className="bg-cyan-600 rounded-full w-[120px] h-[120px] flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default PanelCrad;
