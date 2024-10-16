'use client';
import React, { useState } from 'react';
import { FaTags } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import { PiTelegramLogoThin } from 'react-icons/pi';

const Services = (props) => {
  const serviceTypes = JSON.parse(props.serviceTypes);
  const services = [
    'Telegram Group Members',
    'Telegram Channel Subscribers',
    'Telegram Mass DM',
    'Telegram Views',
    'Telegram Comments',
    'Telegram Shares',
  ];

  const [context, setContext] = useState(serviceTypes[0]);

  return (
    <>
      <div className="flex gap-6 flex-wrap justify-center">
        {services.map((service) => (
          <p
            key={service}
            onClick={() => {
              const serviceTypes = JSON.parse(props.serviceTypes);

              console.log('serviceTypes', serviceTypes);

              // Then use the parsed array directly in the switch statement
              switch (service) {
                case 'Telegram Group Members':
                  setContext(serviceTypes[0]); // No need to call JSON.parse again
                  break;
                case 'Telegram Channel Subscribers':
                  setContext(serviceTypes[1]);
                  break;
                case 'Telegram Mass DM':
                  setContext(serviceTypes[2]);
                  break;
                case 'Telegram Views':
                  setContext(serviceTypes[3]);
                  break;
                case 'Telegram Comments':
                  setContext(serviceTypes[4]);
                  break;
                case 'Telegram Shares':
                  setContext(serviceTypes[5]);
                  break;
              }
            }}
            className="min-w-[280px] max-w-[320px] sm:text-lg text-sm font-medium cursor-pointer text-white text-center px-6 py-3 bg-cyan-700 rounded-xl sm:rounded-full"
          >
            {service}
          </p>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center gap-6 py-16">
        <div className="flex flex-col gap-y-4 text-left lg:w-[50%]">
          <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
            {/* {tServices('detail-title')} */}
            {context.detailTitle}
          </h2>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            {/* {tServices('detail-content-1')} */}
            {context.detailContent}
          </p>
          <div className="flex justify-between items-center max-w-[800px]">
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <FaTags size={40} className="w-[20px]" />
              </div>
              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                Affordable Prices
              </p>
            </div>
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <FaShippingFast size={40} className="w-[20px]" />
              </div>

              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                Super Fast Delivery
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center max-w-[800px]">
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <RiDashboardHorizontalFill size={40} className="w-[20px]" />
              </div>

              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                Friendly Dashboard
              </p>
            </div>
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <BiSupport size={40} className="w-[20px]" />
              </div>

              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                24/7 customer support
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%] self-center w-[100%]">
          <div className="tab_icon_ss ig_icon_bg">
            <div className="icon">
              <PiTelegramLogoThin size={120} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-black p-2 font-bold">GET STARTED!</h2>
      <div className="flex flex-col lg:flex-row gap-4 text-left justify-between lg:w-[85%]">
        <div className="flex flex-col gap-3">
          <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
            {props.detailTitle}
          </h2>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            {props.detail2Content1}
          </p>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            {props.detail2Content2}
          </p>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            {props.detail2Content3}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center max-w-[800px]">
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <FaTags size={40} className="w-[20px]" />
              </div>
              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                Affordable Prices
              </p>
            </div>
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <FaShippingFast size={40} className="w-[20px]" />
              </div>

              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                Super Fast Delivery
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center max-w-[800px]">
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <RiDashboardHorizontalFill size={40} className="w-[20px]" />
              </div>

              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                Friendly Dashboard
              </p>
            </div>
            <div className="flex gap-x-2 items-center w-[50%]">
              <div className="flex justify-center items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-full bg-cyan-800">
                <BiSupport size={40} className="w-[20px]" />
              </div>

              <p className="text-neutral-800 sm:text-lg text-sm font-normal">
                24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-black p-2 font-bold">ORDER NOW!</h2>
    </>
  );
};

export default Services;
