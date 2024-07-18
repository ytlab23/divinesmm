'use client';
import React, { useState } from 'react';
import { FaTags } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import { PiTelegramLogoThin } from 'react-icons/pi';

const Services = ({}) => {
  const services = [
    'Telegram Group Members',
    'Telegram Channel Subscribers',
    'Telegram Mass DM',
    'Telegram Views',
    'Telegram Comments & Shares',
  ];
  const subscribers = {
    detailTitle: 'Best SMM Panel Site to Buy Telegram subscribers',
    detailContent:
      "Telegram is one of the most popular social media platforms and is quickly becoming a marketing powerhouse. With over 900 million active monthly users, Telegram is a great place to connect with your customers, followers, and fans. If you're a small business owner looking to boost your social media presence, consider using DivineSMMs top-notch services for Telegram. It's a fantastic way to reach more people and grow your audience.",
    detailContent2:
      'At DivineSMM, we focus on enhancing your Telegram profile quality. Our expert team is dedicated to helping you boost your Telegram followers, likes, views, and more. Explore our blog to learn more about our top-notch SMM services and how they can benefit you.',
  };
  const members = {
    detailTitle: 'Best SMM Panel Site to Buy Group Members',
    detailContent:
      'Telegram is a versatile social media platform that has rapidly become a marketing powerhouse. With over 500 million active monthly users, it offers a unique opportunity to connect with customers, followers, and fans. For small business owners looking to enhance their social media presence, increasing Telegram group members is an effective strategy.',
    detailContent2:
      'At DivineSMM, we specialize in helping you grow your Telegram groups. Our expert team is dedicated to providing high-quality services that boost your group members, engagement, and overall group activity. By expanding your Telegram group, you can reach a larger audience, foster community engagement, and drive more traffic to your business.',
  };
  const dms = {
    detailTitle: 'Best SMM Panel Site to Buy Mass DM',
    detailContent:
      "Telegram is a powerful social media platform that has quickly become a favorite for marketers. With over 500 million active monthly users, it's an excellent space to connect with your audience directly. For small business owners looking to improve their marketing strategies, utilizing Telegram Mass DM (Direct Messaging) can be incredibly effective.",
    detailContent2:
      'At DivineSMM, we offer top-notch Telegram Mass DM services designed to help you reach your target audience more efficiently. Our expert team is dedicated to crafting personalized messages that resonate with your audience, ensuring higher engagement and conversion rates. By sending mass DMs on Telegram, you can directly promote your products, share updates, and engage with your customers on a personal level.',
  };
  const views = {
    detailTitle: 'Best SMM Panel Site to Buy Views',
    detailContent:
      "Telegram is a dynamic social media platform that has rapidly become essential for marketers. With over 500 million active monthly users, it's a prime space to share content and connect with your audience. For small business owners looking to enhance their social media presence, boosting Telegram views is a crucial strategy.",
    detailContent2: `At DivineSMM, we specialize in helping you increase your Telegram views. Our expert team is dedicated to providing high-quality services that ensure your content reaches a broader audience. By enhancing your Telegram views, you can improve your content's visibility, attract more followers, and drive greater engagement.`,
  };
  const comments = {
    detailTitle: 'Best SMM Panel Site to Buy Comments & Shares',
    detailContent:
      'Telegram is a versatile social media platform that has quickly become a marketing favorite. With over 500 million active monthly users, it offers an excellent opportunity to engage with your audience. For small business owners looking to enhance their social media presence, increasing Telegram comments and shares is a highly effective strategy.',
    detailContent2:
      'At DivineSMM, we specialize in helping you boost your Telegram comments and shares. Our expert team is dedicated to providing high-quality services that enhance audience interaction and content dissemination. By increasing comments and shares on your Telegram posts, you can foster community engagement, improve content visibility, and drive greater organic reach.',
  };

  const [context, setContext] = useState(subscribers);

  return (
    <>
      <div className="flex gap-6 flex-wrap justify-center">
        {services.map((service) => (
          <p
            key={service}
            onClick={() => {
              switch (service) {
                case 'Telegram Group Members':
                  setContext(members);
                  break;
                case 'Telegram Channel Subscribers':
                  setContext(subscribers);
                  break;
                case 'Telegram Mass DM':
                  setContext(dms);
                  break;
                case 'Telegram Views':
                  setContext(views);
                  break;
                case 'Telegram Comments & Shares':
                  setContext(comments);
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
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            {/* {tServices('detail-content-2')} */}
            {context.detailContent2}
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
    </>
  );
};

export default Services;
