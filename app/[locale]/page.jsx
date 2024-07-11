import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import BusinessPlan from '../../components/BusinessPlan.gif';
import socialStrategy from '../../components/Social_Strategy.gif';
import priceImg from '../../assets/price.png';
import twenyFourImg from '../../assets/247.png';
import deliveryImg from '../../assets/delivery.png';

import { PiTelegramLogoThin } from 'react-icons/pi';
import { FaTags } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { HiUserAdd } from 'react-icons/hi';
import { FaCreditCard } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { BsFillEmojiKissFill } from 'react-icons/bs';
import { GoQuestion } from 'react-icons/go';
import { IoEarthOutline } from 'react-icons/io5';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { PiGaugeBold } from 'react-icons/pi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { CiCircleCheck } from 'react-icons/ci';

import Card from '@/components/Card';
import InfCard from '@/components/InfCard';
import OrderCard from '@/components/OrderCard';

import PanelCrad from '@/components/PanelCrad';

import { IoPlanetOutline } from 'react-icons/io5';
import { RiGroup2Line } from 'react-icons/ri';
import TestimonialSlider from '@/components/Slider';

import paymentsImg from '../../assets/payments.png';

import initTranslations from '../i18n';

export default async function Home({ params: { locale } }) {
  const { t: tServices } = await initTranslations(locale, ['services']);
  const { t: tHowtoOrder } = await initTranslations(locale, ['howToOrder']);
  const { t: tWhyChooseUs } = await initTranslations(locale, ['whyChooseUs']);
  const { t: tTestimonial } = await initTranslations(locale, ['testimonial']);
  const { t: tPayment } = await initTranslations(locale, ['payment']);
  const { t: tCardDatas } = await initTranslations(locale, ['cardDatas']);

  const aboutInfoImgs = [priceImg, twenyFourImg, deliveryImg];

  const services = [
    'Telegram Group Members',
    'Telegram Channel Subscribers',
    'Telegram Mass DM',
    'Telegram Views',
    'Telegram Comments & Shares',
  ];

  const panelOne = [
    {
      icon: <GoQuestion size={50} className="min-w-[85px]" color="white" />,
    },
    {
      icon: <IoEarthOutline size={50} className="min-w-[85px]" color="white" />,
    },
    {
      icon: (
        <IoAnalyticsOutline size={50} className="min-w-[85px]" color="white" />
      ),
    },
  ];
  const panelTwo = [
    {
      icon: <FaCartShopping size={50} className="min-w-[85px]" color="white" />,
    },
    {
      icon: <PiGaugeBold size={50} className="min-w-[85px]" color="white" />,
    },
    {
      icon: (
        <HiOutlineBuildingOffice2
          size={50}
          className="min-w-[85px]"
          color="white"
        />
      ),
    },
  ];

  const panelThree = [
    {
      icon: <RiGroup2Line size={45} className="min-w-[85px]" color="white" />,
    },
    {
      icon: <RiGroup2Line size={45} className="min-w-[85px]" color="white" />,
    },
    {
      icon: (
        <IoPlanetOutline size={45} className="min-w-[85px]" color="white" />
      ),
    },
  ];
  const panelFour = [
    {
      icon: <GoQuestion size={50} className="min-w-[85px]" color="white" />,
    },
    {
      icon: <IoEarthOutline size={50} className="min-w-[85px]" color="white" />,
    },
    {
      icon: (
        <IoAnalyticsOutline size={50} className="min-w-[85px]" color="white" />
      ),
    },
  ];

  const paneFive = JSON.parse(tCardDatas('panelFive'));

  return (
    <main className="main">
      <Header locale={locale} />
      <Image
        src={BusinessPlan}
        alt="gif"
        className="-mt-20 self-center mx-auto mb-16"
      />
      <div className="min-h-[50vh] bg-slate-100 flex items-center justify-center sm:px-16 px-8 py-8">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          {JSON.parse(tCardDatas('aboutInfos')).map((about, indx) => (
            <Card
              key={about.title}
              img={aboutInfoImgs[indx]}
              title={about.title}
              content={about.content}
            />
          ))}
        </div>
      </div>

      <div
        className="min-h-[80vh] bg-white flex flex-col sm:gap-y-16 gap-y-8 items-center sm:px-16 px-8 py-12 text-center"
        id="services"
      >
        <h1 className="sm:text-4xl text-2xl text-neutral-800 font-bold">
          {tServices('title')}
        </h1>
        <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
          {tServices('secondary-title')}
        </h2>
        <h3 className="text-neutral-800 sm:text-lg text-base font-normal max-w-[900px] text-center">
          {tServices('content')}
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          {services.map((service) => (
            <p
              key={service}
              className="min-w-[280px] max-w-[320px] sm:text-lg text-sm font-medium cursor-pointer text-white text-center px-6 py-3 bg-cyan-700 rounded-xl sm:rounded-full"
            >
              {service}
            </p>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 py-16">
          <div className="flex flex-col gap-y-4 text-left lg:w-[50%]">
            <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
              {tServices('detail-title')}
            </h2>
            <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
              {tServices('detail-content-1')}
            </p>
            <p className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[600px]">
              {tServices('detail-content-2')}
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

      <div className="flex justify-center gap-6 flex-wrap items-center px-4 py-16 bg-[#f8f8f8] w-full">
        {JSON.parse(tCardDatas('infos')).map((info) => (
          <InfCard key={info.title} num={info.num} title={info.title} />
        ))}
      </div>

      <div
        className="min-h-[80vh] bg-white flex flex-col gap-y-16 items-center py-16 px-8 sm:p-16  text-center"
        id="how-to-order"
      >
        <h1 className="sm:text-4xl text-2xl text-neutral-800 font-bold">
          {tHowtoOrder('title')}
        </h1>
        <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
          {tHowtoOrder('secondary-title')}
        </h2>
        <h3 className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[900px] text-center">
          {tHowtoOrder('content')}
        </h3>

        <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-8 mt-8">
          <OrderCard
            num="1"
            title={paneFive[0].title}
            icon={
              <HiUserAdd
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content={paneFive[0].content}
          />

          <OrderCard
            num="2"
            title={paneFive[1].title}
            icon={
              <FaCreditCard
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content={paneFive[1].content}
          />

          <OrderCard
            num="3"
            title={paneFive[2].title}
            icon={
              <FaCartShopping
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content={paneFive[2].content}
          />
          <OrderCard
            num="4"
            title={paneFive[3].title}
            icon={
              <BsFillEmojiKissFill
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content={paneFive[3].content}
          />
        </div>
      </div>

      <div className="bg-white px-8 py-16 sm:p-16 flex flex-col items-center  text-neutral-800">
        <div className="flex flex-col max-w-[900px] gap-y-8">
          <h2 className="text-neutral-800  text-lg sm:text-2xl font-bold">
            {tHowtoOrder('detail-title')}
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm sm:text-base">
              {tHowtoOrder('detail-content-1')}
            </p>
            <p className="text-sm sm:text-base">
              {tHowtoOrder('detail-content-2')}
            </p>
            <p className="text-sm sm:text-base">
              {tHowtoOrder('detail-content-3')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-8 py-16 sm:p-16 min-h-[60vh] flex flex-col lg:flex-row  justify-center gap-8 items-center">
        {JSON.parse(tCardDatas('panelOne')).map((panel, indx) => (
          <PanelCrad
            key={panel.title}
            icon={panelOne[indx].icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div className="bg-[#f5f5f5] px-8 py-16 sm:p-16 min-h-[60vh] flex flex-col lg:flex-row  justify-center gap-8 items-center">
        {JSON.parse(tCardDatas('panelTwo')).map((panel, indx) => (
          <PanelCrad
            key={panel.title}
            icon={panelTwo[indx].icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div className="bg-white px-8 py-16 sm:p-16 min-h-[60vh] flex flex-col lg:flex-row justify-center gap-4 items-center text-neutral-800">
        <div className="flex flex-col gap-y-8 max-w-[600px] lg:w-[50%]">
          <h2 className="sm:text-2xl text-lg font-bold">
            {tHowtoOrder('detail-2-title')}
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm sm:text-base">
              {tHowtoOrder('detail-2-content-1')}
            </p>
            <p className="text-sm sm:text-base">
              {tHowtoOrder('detail-2-content-2')}
            </p>
            <p className="text-sm sm:text-base">
              {tHowtoOrder('detail-2-content-3')}
            </p>
          </div>
        </div>
        <Image
          src={socialStrategy}
          alt="gif"
          className="self-center lg:w-[50%] w-[100%] max-w-[500px]"
        />
      </div>

      <div
        className="min-h-[80vh] bg-[#eff3fe] flex flex-col gap-y-16 items-center px-8 py-16 sm:p-16 text-center"
        id="why-us"
      >
        <h1 className="sm:text-4xl text-2xl text-neutral-800 font-bold">
          {tWhyChooseUs('title')}
        </h1>
        <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
          {tWhyChooseUs('secondary-title')}
        </h2>
        <h3 className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[900px] text-center">
          {tWhyChooseUs('content')}
        </h3>
        <div className="w-full flex  gap-y-6 flex-col justify-center max-w-[900px]">
          <h2 className="sm:text-xl text-base  text-neutral-800 font-medium text-left">
            <span className="font-bold text-cyan-600">DivineSMM!</span> is the
            {`world's`} most affordable SMM panel service provider for Telegram.
          </h2>
          <div className="flex flex-col gap-y-3 self-start">
            {JSON.parse(tCardDatas('serviceProvider')).map((service) => (
              <p
                key={service}
                className="sm:text-lg text-sm flex items-center font-base text-neutral-800 text-left"
              >
                <CiCircleCheck className="min-w-[40px]" /> {service}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-8 py-16 sm:p-16 flex flex-col items-center  text-neutral-800">
        <div className="flex flex-col max-w-[1000px] gap-y-8">
          <h2 className="text-neutral-800 text-lg sm:text-2xl font-bold">
            {tWhyChooseUs('detail-title')}
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm sm:text-base">
              {tWhyChooseUs('detail-content-1')}
            </p>
            <p className="text-sm sm:text-base">
              {tWhyChooseUs('detail-content-2')}
            </p>
            <p className="text-sm sm:text-base">
              {tWhyChooseUs('detail-content-3')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-8 py-16 sm:p-16 min-h-[60vh] flex flex-col lg:flex-row justify-center gap-8 items-center">
        {JSON.parse(tCardDatas('panelThree')).map((panel, indx) => (
          <PanelCrad
            key={panel.title}
            icon={panelThree[indx].icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div
        className="min-h-[50vh] bg-white flex flex-col gap-y-8 items-center px-8 py-16 sm:p-16 text-center"
        id="services"
      >
        <h1 className="sm:text-4xl text-2xl text-neutral-800 font-bold">
          {tTestimonial('title')}
        </h1>
        <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
          {tTestimonial('secondary-title')}
        </h2>
        <h3 className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[900px] text-center">
          {tTestimonial('content')}
        </h3>
        <div className="testimonial text-neutral-800 overflow-hidden max-w-[100%] flex justify-center items-center">
          <TestimonialSlider />
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-8 py-16 sm:p-16 min-h-[60vh] flex flex-col lg:flex-row justify-center gap-8 items-center">
        {JSON.parse(tCardDatas('aboutInfos')).map((panel, indx) => (
          <PanelCrad
            key={panel.title}
            icon={panelFour[indx].icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div className="bg-white px-8 py-16 sm:p-16 flex flex-col items-center  text-neutral-800">
        <div className="flex flex-col max-w-[1000px] gap-y-8">
          <h2 className="text-neutral-800 text-2xl font-bold">
            {tTestimonial('detail-title')}
          </h2>
          <div className="flex flex-col gap-2">
            <p>{tTestimonial('detail-content-1')}</p>
            <p>{tTestimonial('detail-content-2')}</p>
            <p>{tTestimonial('detail-content-3')}</p>
          </div>
        </div>
      </div>

      <div
        className="min-h-[50vh] bg-[#f5f5f5] flex flex-col gap-y-8 items-center px-8 py-16 sm:p-16 text-center"
        id="services"
      >
        <h1 className="sm:text-4xl text-2xl text-neutral-800 font-bold">
          {tPayment('title')}
        </h1>
        <h2 className="sm:text-2xl text-lg  text-cyan-600 font-medium">
          {tPayment('secondary-title')}
        </h2>
        <h3 className="text-neutral-800 sm:text-lg text-sm font-normal max-w-[900px] text-center">
          {tPayment('content')}
        </h3>
        <Image
          src={paymentsImg}
          alt="Visa/Master/Credit Card,Crypto Currency,payeer,perfectmoney,payoneer,jazzcash/easypaisa, Gcash,Paytm, Bkash, Nagad, Webmoney, Ali Pay, wise, western union"
        />
      </div>
    </main>
  );
}
