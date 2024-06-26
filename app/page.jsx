import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import BusinessPlan from '../components/BusinessPlan.gif';
import priceImg from '../assets/price.png';
import twenyFourImg from '../assets/247.png';
import deliveryImg from '../assets/delivery.png';

import { PiTelegramLogoThin } from 'react-icons/pi';
import { FaTags } from 'react-icons/fa';

import Card from '@/components/Card';

export default function Home() {
  const services = [
    'Telegram Group Members',
    'Telegram Channel Subscribers',
    'Telegram Mass DM',
    'Telegram Views',
    'Telegram Comments & Shares',
  ];
  return (
    <main className="main">
      <Header />
      <Image
        src={BusinessPlan}
        alt="gif"
        className="-mt-20 self-center mx-auto mb-16"
      />
      <div className="min-h-[80vh] bg-slate-100 flex items-center justify-center px-16 py-8">
        <div className="w-full flex justify-between items-center gap-x-4">
          <Card
            img={priceImg}
            title="Cheapest Price"
            content="Our Prices most reasonable in the market, starting from at 0.001$."
          />
          <Card
            img={twenyFourImg}
            title="24/7 Customer Support"
            content="We're here 24/7 to help make your event a success, replying to your tickets 24/7."
          />
          <Card
            img={deliveryImg}
            title="Fast Delivery"
            content="Our Delivery is fast, and it can take minutes or seconds to fulfil orders!"
          />
        </div>
      </div>
      <div
        className="min-h-[80vh] bg-white flex flex-col gap-y-16 items-center px-16 py-12 text-center"
        id="services"
      >
        <h1 className="text-4xl text-neutral-800 font-bold">Our Sevices</h1>
        <h2 className="text-2xl  text-cyan-600 font-medium">
          Cheapest SMM Panel for Telegram
        </h2>
        <h3 className="text-neutral-800 text-lg font-normal max-w-[900px] text-center">
          Want to skyrocket your Telegram presence and leave the competition in
          the dust? <span className="font-bold text-cyan-600">DivineSMM</span>{' '}
          is your one-stop shop for growth! Our{' '}
          <span className="font-bold">super-affordable</span> reseller panel is
          packed with features to help you get there faster than ever. No more
          waiting around -{' '}
          <span className="font-bold text-cyan-600">DivineSMM</span> puts you in
          the driver's seat to take your Telegram to the next level!
        </h3>
        <div className="flex gap-x-6">
          {services.map((service) => (
            <p
              key={service}
              className="max-w-[320px] text-lg font-medium cursor-pointer text-white text-center px-6 py-3 bg-cyan-700 rounded-full"
            >
              {service}
            </p>
          ))}
        </div>
        <div className="flex w-full justify-center gap-x-6 py-8">
          <div className="flex flex-col gap-y-4 text-left w-[50%]">
            <h2 className="text-2xl  text-cyan-600 font-medium">
              Best SMM Panel Site to Buy Telegram subscribers
            </h2>
            <p className="text-neutral-800 text-lg font-normal max-w-[600px]">
              Instagram is one of the most popular social media sites and it is
              quickly becoming a marketing powerhouse. With over 500 million
              active monthly users, Instagram is a great place to connect with
              your customers, followers, and fans. If you're a small business
              owner, and you're looking for a way to increase your social media
              presence, then you should try SMMVALY's best SMM panel services
              once.
            </p>
            <p className="text-neutral-800 text-lg font-normal max-w-[600px]">
              We specialize in improving the quality of your profiles, and our
              expert SMM Panel team will work with you to help you increase the
              number of Instagram followers, likes, views, and more. Read our
              Blogs to acquire more knowledge about SMM services.
            </p>
            <div className="flex justify-between items-center max-w-[800px]">
              <div className="flex gap-x-2 items-center w-[50%]">
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-cyan-800">
                  <FaTags size={40} className="w-[20px]" />
                </div>
                <p className="text-neutral-800 text-lg font-normal">
                  Affordable Prices
                </p>
              </div>
              <div className="flex gap-x-2 items-center w-[50%]">
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-cyan-800">
                  <FaTags size={40} className="w-[20px]" />
                </div>
                {/* <div>logo</div> */}
                <p className="text-neutral-800 text-lg font-normal">
                  Super Fast Delivery
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center max-w-[800px]">
              <div className="flex gap-x-2 items-center w-[50%]">
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-cyan-800">
                  <FaTags size={40} className="w-[20px]" />
                </div>
                {/* <div>logo</div> */}
                <p className="text-neutral-800 text-lg font-normal">
                  Friendly Dashboard
                </p>
              </div>
              <div className="flex gap-x-2 items-center w-[50%]">
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-cyan-800">
                  <FaTags size={40} className="w-[20px]" />
                </div>
                {/* <div>logo</div> */}
                <p className="text-neutral-800 text-lg font-normal">
                  24/7 customer support
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <div className="tab_icon_ss ig_icon_bg">
              <div className="icon">
                {/* <Image
                  src={telegramImg}
                  alt="telegram"
                  className="max-w-[120px]"
                /> */}
                {/* <FaTelegram size={120} color="white" /> */}
                <PiTelegramLogoThin size={120} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
