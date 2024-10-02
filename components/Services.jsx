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
    'Telegram Comments',
    'Telegram Shares',
  ];
  const subscribers = {
    detailTitle: 'Channel Subscribers',
    detailContent:
      'Want to increase your channel subscriber count without waiting for years? Our Telegram SMM Panel uses advanced targeting systems to deliver real and active accounts that are truly interested in your niche. This way, you can create a loyal follower base on the platform within no time. Unlike other panels, we have a network of service providers from all parts of the world who can offer local subscribers from the target language itself. Remember, with more targeted subscribers, your channel reaches a wider audience who are interested in your content.',
  };
  const members = {
    detailTitle: 'Telegram Group Members',
    detailContent:
      'Why settle for less group members if you can join the league of top channels? Divine Telegram SMM Panel will help you build an active community quickly from scratch. More members mean more discussions, which creates a firm reputation for your group on the platform. As a result, new members will organically find and join your group over time. And we focus not just on the numbers. We will analyze the type of content of your group and try to add members who are most interested in the specific content to maximize the engagement rate. This natural growth cycle that ensures a high level of engagement will repeat without any interventions from your side. ',
  };
  const dms = {
    detailTitle: 'Mass DMs',
    detailContent:
      'Are you tired of manually sending direct messages to users for DM campaigns? Telegram is the social media platform with one of the highest engagement rates. Using them effectively, can bring in tons of leads and sales for your business. Reach thousands of users daily with just a single click on our cheap Telegram SMM Panel services. We ensure that your promotional messages reach your target audience directly without technical issues. Our automated system will save your valuable time and effort so that you can focus on what matters the most -content.',
  };
  const views = {
    detailTitle: 'Telegram Views',
    detailContent:
      'It could be painful to see lower post views despite a large number of subscribers. Well, we can fix it within seconds. Our Telegram SMM panel guarantee a significant increase in views to make your posts stand out. This makes the Telegram algorithm push your content to more users which will help you get the organic reach that you deserve. And guess what? More views create more trust among the subscribers. You can convert them into sales figures more easily.',
  };
  const comments = {
    detailTitle: 'Telegram Comments',
    detailContent:
      'Comments sections play a crucial role in making a platform lively, whether Telegram or any other social media. Our Telegram SMM panel service provides real and meaningful comments that spark discussions to add value to your content. We have an in-house team to craft comments that are relevant to your posts like thought-provoking questions, creative point-of-views, etc. Such encouraging conversations could trigger more members to join the conversation and build a sense of community among your followers to make your channel more active.',
  };

  const shares = {
    detailTitle: 'Telegram Shares',
    detailContent:
      'Double up your reach with the Divine Telegram SMM panel. We will make your messages shared by real users to give exposure to a wider audience beyond your core members. These shares are strategically scheduled at the peak times for maximum visibility. As a result, more and more members will join your group or channel organically. Moreover, you can use this higher share counts as a social proof to build brand loyalty and trust.',
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
                case 'Telegram Comments':
                  setContext(comments);
                  break;
                case 'Telegram Shares':
                  setContext(shares);
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
            Best SMM Panel to Buy Telegram Subscribers
          </h2>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            Nowadays, the number of users who have a monetization approach
            towards social media platforms is rising. Growing your subscriber
            base is crucial for getting more paid collaborations and the trust
            you need to sell a service. With a larger audience, you can
            effectively monetize your channel through ads, sponsored posts, or
            even promoting products directly.
          </p>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            <a href="https://divinesmm.com/">Divine Telegram SMM Panel</a> can
            help you achieve this affordably. We will provide authentic and
            active users who are genuinely interested in the niche of your
            channel. That means you can focus more on providing high-quality
            content and developing your brand. As a result, you can create a
            consistent flow of income with minimum marketing costs.
          </p>
          <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
            Maximize your Return on Investment (ROI) and grow your channel
            without breaking the bank. Get started now!
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
