import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import BusinessPlan from '../components/BusinessPlan.gif';
import socialStrategy from '../components/Social_Strategy.gif';
import priceImg from '../assets/price.png';
import twenyFourImg from '../assets/247.png';
import deliveryImg from '../assets/delivery.png';

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

import Card from '@/components/Card';
import InfCard from '@/components/InfCard';
import OrderCard from '@/components/OrderCard';
import { icon } from '@fortawesome/fontawesome-svg-core';
import PanelCrad from '@/components/PanelCrad';

import { IoPlanetOutline } from 'react-icons/io5';
import { RiGroup2Line } from 'react-icons/ri';

export default function Home() {
  const services = [
    'Telegram Group Members',
    'Telegram Channel Subscribers',
    'Telegram Mass DM',
    'Telegram Views',
    'Telegram Comments & Shares',
  ];

  const infos = [
    { num: '1,948,809', title: 'Order Completed' },
    { num: '2,016', title: 'Active Services' },
    { num: '17,500', title: 'Paid To Affiliate user' },
    { num: '210,810', title: 'Active User' },
  ];
  const panelOne = [
    {
      title: 'What is SMM Panel?',
      icon: <GoQuestion size={50} className="min-w-[85px]" color="white" />,
      content:
        'SMM panel is a social media marketing panel that is designed to help boost social media accounts. The panel consists of experts who can provide guidance and advice on how to improve a social media presence. The panel has been found to be helpful for both small businesses and larger organizations.',
    },
    {
      title: 'Best SMM panel',
      icon: <IoEarthOutline size={50} className="min-w-[85px]" color="white" />,
      content: `DivineSMM is the go-to panel for reaching your target audience effectively. Our team of experts is dedicated and experienced in providing top-notch SMM services. We specialize in all things Telegram, offering a range of services to boost your presence and engagement. Join DivineSMM today and see the difference for yourself!`,
    },
    {
      title: 'Wholesale SMM Panel',
      icon: (
        <IoAnalyticsOutline size={50} className="min-w-[85px]" color="white" />
      ),
      content: `Moreover we are the wholesale SMM Panel service provider where you can buy Facebook, Instagram likes, shares, and posts. Buying social media items from our site is also quite reasonable. Our Panel supplies smart business experience with wholesale SMM panel services.`,
    },
  ];
  const panelTwo = [
    {
      title: 'Best SMM Reseller Panel',
      icon: <FaCartShopping size={50} className="min-w-[85px]" color="white" />,
      content:
        'In the SMM industry, DivineSMM is one of the top reseller SMM panels. We offer services to help you grow your Telegram channel. You can safely make payments using PayPal, PayTm, Visa, MasterCard, Payoneer, Webmoney, and all other popular payment methods.',
    },
    {
      title: 'Cheapest SMM panel',
      icon: <PiGaugeBold size={50} className="min-w-[85px]" color="white" />,
      content: `Discover the most affordable Telegram marketing services with DivineSMM! Our prices are unbeatable, and we guarantee to match any offer worldwide. If youre looking for cost-effective Telegram marketing, DivineSMM is your best choice. Join us and experience top-quality services without breaking the bank.`,
    },
    {
      title: 'Best SMM Panel India',
      icon: (
        <HiOutlineBuildingOffice2
          size={50}
          className="min-w-[85px]"
          color="white"
        />
      ),
      content: `
DivineSMM is the best SMM panel in India for Telegram. We offer excellent solutions for online marketing with a wide range of features to choose from. Our panel also provides outstanding customer support, which is very important if you need help with your campaigns.`,
    },
  ];

  const panelThree = [
    {
      title: 'Best to enhance buy Telegram followers.',
      icon: <RiGroup2Line size={45} className="min-w-[85px]" color="white" />,
      content: `In today's digital age, having a presence on Instagram is crucial for any business. DivineSMM offers top-notch services for Telegram, including buying followers. If your company isn't on Instagram yet, here's why you should be! Explore these blogs to discover the compelling reasons.`,
    },
    {
      title: 'SMM Panel USA',
      icon: <RiGroup2Line size={45} className="min-w-[85px]" color="white" />,
      content: `Welcome to DivineSMM, your premier destination for top-quality and affordable SMM panel services across the USA. Specializing in Telegram, we offer a range of powerful features including real-time tracking, 24/7 chat support, automated reporting, and more. Getting started with your SMM marketing journey has never been easier with DivineSMM!`,
    },
    {
      title: 'SMM Panel UAE',
      icon: (
        <IoPlanetOutline size={45} className="min-w-[85px]" color="white" />
      ),
      content: `
DivineSMM stands out as the top SMM Panel in the UAE, renowned for its exceptional Telegram services. Since its inception, DivineSMM has consistently delivered premium solutions to its clients. With a vast database of leads and contacts eager to promote their products and services, DivineSMM ensures unmatched quality and reliability in every campaign.`,
    },
  ];
  const panelFour = [
    {
      title: 'Buy Telegram channel Views',
      icon: <GoQuestion size={50} className="min-w-[85px]" color="white" />,
      content: `In today's digital age, having a presence on Instagram is crucial for any business. DivineSMM offers top-notch services for Telegram, including buying followers. If your company isn't on Instagram yet, here's why you should be! Explore these blogs to discover the compelling reasons.`,
    },
    {
      title: 'Reseller SMM Panel',
      icon: <IoEarthOutline size={50} className="min-w-[85px]" color="white" />,
      content: `DivineSMM offers a comprehensive suite of tools and platforms designed for effortless campaign management. It stands out as the ultimate Reseller Panel, where users can easily acquire Social Media Marketing Services tailored for Telegram. Whether you need to boost your Telegram channel's followers, increase engagement, or enhance visibility, DivineSMM provides everything from follower growth to likes and more.`,
    },
    {
      title: 'SMM Panel Clubhouse',
      icon: (
        <IoAnalyticsOutline size={50} className="min-w-[85px]" color="white" />
      ),
      content: `
DivineSMM is your go-to platform for boosting your Telegram presence, offering services like increasing Telegram followers and boosting room attendance.
At DivineSMM, Telegram becomes your stage for relaxed audio conversations with friends and fascinating individuals worldwide. It's your gateway to connecting, chatting, and expanding your Telegram community effortlessly.`,
    },
  ];
  return (
    <main className="main">
      <Header />
      <Image
        src={BusinessPlan}
        alt="gif"
        className="-mt-20 self-center mx-auto mb-16"
      />
      <div className="min-h-[50vh] bg-slate-100 flex items-center justify-center px-16 py-8">
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
          Looking for the cheapest way to boost your social media presence on
          Telegram? Look no further than{' '}
          <span className="font-bold text-cyan-600">DivineSMM!</span> Our
          affordable reseller panel is designed to help you achieve your goals
          faster than ever. Get started with{' '}
          <span className="font-bold text-cyan-600">DivineSMM</span> today and
          watch your Telegram presence grow!
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
        <div className="flex w-full justify-center gap-x-6 py-16">
          <div className="flex flex-col gap-y-4 text-left w-[50%]">
            <h2 className="text-2xl  text-cyan-600 font-medium">
              Best SMM Panel Site to Buy Telegram subscribers
            </h2>
            <p className="text-neutral-800 text-lg font-normal max-w-[600px]">
              Telegram is one of the most popular social media platforms and is
              quickly becoming a marketing powerhouse. With over 500 million
              active monthly users, Telegram is a great place to connect with
              your customers, followers, and fans. If {`you're`} a small
              business owner looking to boost your social media presence,
              consider using{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>s
              top-notch services for Telegram. {`It's`} a fantastic way to reach
              more people and grow your audience.
            </p>
            <p className="text-neutral-800 text-lg font-normal max-w-[600px]">
              At DivineSMM, we focus on enhancing your Telegram profile quality.
              Our expert team is dedicated to helping you boost your Telegram
              followers, likes, views, and more. Explore our blog to learn more
              about our top-notch SMM services and how they can benefit you.
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
                  <FaShippingFast size={40} className="w-[20px]" />
                </div>

                <p className="text-neutral-800 text-lg font-normal">
                  Super Fast Delivery
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center max-w-[800px]">
              <div className="flex gap-x-2 items-center w-[50%]">
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-cyan-800">
                  <RiDashboardHorizontalFill size={40} className="w-[20px]" />
                </div>

                <p className="text-neutral-800 text-lg font-normal">
                  Friendly Dashboard
                </p>
              </div>
              <div className="flex gap-x-2 items-center w-[50%]">
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-cyan-800">
                  <BiSupport size={40} className="w-[20px]" />
                </div>

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
      <div className="flex justify-center gap-6 flex-wrap items-center px-4 py-16 bg-[#f8f8f8] w-full">
        {infos.map((info) => (
          <InfCard key={info.title} num={info.num} title={info.title} />
        ))}
      </div>
      <div
        className="min-h-[80vh] bg-white flex flex-col gap-y-16 items-center p-16 text-center"
        id="services"
      >
        <h1 className="text-4xl text-neutral-800 font-bold">
          How to Order SMM Panel Services?
        </h1>
        <h2 className="text-2xl  text-cyan-600 font-medium">
          {` Here's`} how you can buy wholesale Telegram services from{' '}
          <span className="font-bold text-cyan-600">DivineSMM!</span>
        </h2>
        <h3 className="text-neutral-800 text-lg font-normal max-w-[900px] text-center">
          <span className="font-bold text-cyan-600">DivineSMM</span> Wholesale
          SMM panel is the perfect place to order top-quality Telegram marketing
          packages. We offer a wide range of services to boost your Telegram
          presence. Our packages are very affordable, so you can get a great
          deal on your order. Check us out and see how we can help you succeed
          on Telegram!
        </h3>
        <div className="w-full flex justify-center items-center gap-x-8 mt-8">
          <OrderCard
            num="1"
            title="Register & Log in"
            icon={
              <HiUserAdd
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content="First register or sign up using your mail address. Then verify and login to your dashboard."
          />

          <OrderCard
            num="2"
            title="Add funds"
            icon={
              <FaCreditCard
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content="Next, pick a preferable payment method and add funds to your account."
          />

          <OrderCard
            num="3"
            title="Select a service"
            icon={
              <FaCartShopping
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content="Select your required service and confirm order. You can buy multiple services at a time."
          />
          <OrderCard
            num="4"
            title="Enjoy results"
            icon={
              <BsFillEmojiKissFill
                size={45}
                className="min-w-[85px]"
                color="rgb(14 116 144 / var(--tw-bg-opacity))"
              />
            }
            content="Now, keep patience and see the results. I hope you will be happy to see the amazing results."
          />
        </div>
      </div>

      <div className="bg-white p-16 flex flex-col items-center  text-neutral-800">
        <div className="flex flex-col max-w-[900px] gap-y-8">
          <h2 className="text-neutral-800 text-2xl font-bold">
            Increase Your Social Media Reach with the Best SMM Panel in
            Bangladesh
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold text-cyan-600">DivineSMM</span> is the
              top <span className="font-bold">Telegram</span> SMM panel in
              Bangladesh, offering the best solutions to boost your{' '}
              <span className="font-bold">Telegram</span> presence. Our services
              are perfect for individuals wanting to grow their personal brand
              and businesses looking to expand their reach. We provide real and
              premium engagement, ensuring your{' '}
              <span className="font-bold">Telegram</span> accounts get genuine
              interactions that make a big difference. Trust us to be your
              number one choice for the best{' '}
              <span className="font-bold">Telegram</span> SMM panel in
              Bangladesh.
            </p>
            <p>
              At <span className="font-bold text-cyan-600">DivineSMM</span>, we
              are proud to be the top{' '}
              <span className="font-bold">Telegram</span> SMM panel in
              Bangladesh. We offer competitive prices without sacrificing
              quality. Our panel is easy to use, making your experience smooth
              and hassle-free. With features like instant delivery, 24/7
              customer support, and a variety of customizable packages, we aim
              to meet all your <span className="font-bold">Telegram</span>
              needs.
            </p>
            <p>
              Whether you want more followers, increase your engagement, or
              boost your presence on <span className="font-bold">Telegram</span>
              , our SMM panel is here to help. Take the first step towards your
              social media goals with the best SMM panel in Bangladesh -{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] p-16 min-h-[60vh] flex justify-center gap-x-8 items-center">
        {panelOne.map((panel) => (
          <PanelCrad
            key={panel.title}
            icon={panel.icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>
      <div className="bg-[#f5f5f5] p-16 min-h-[60vh] flex justify-center gap-x-8 items-center">
        {panelTwo.map((panel) => (
          <PanelCrad
            key={panel.title}
            icon={panel.icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div className="bg-white p-16 min-h-[60vh] flex justify-center gap-x-4 items-center text-neutral-800">
        <div className="flex flex-col gap-y-8 max-w-[600px] w-[50%]">
          <h2 className=" text-2xl font-bold">
            Cheapest Wholesale SMM Panel Provider in The World
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold text-cyan-600">DivineSMM</span> is the
              top choice for Telegram services worldwide. We offer the most
              affordable and user-friendly options, making it easy for anyone to
              boost their Telegram presence. Our panels are consistently rated
              as the best in the industry, ensuring you get the quality you
              deserve without breaking the bank.
            </p>
            <p>
              Our <span className="font-bold text-cyan-600">DivineSMM</span>{' '}
              panels are reliable and deliver accurate results, ensuring your
              data is valuable. Our team is passionate about providing the best
              Telegram services, and we’ll go above and beyond to make sure
              you’re satisfied with our service. Trust
              <span className="font-bold text-cyan-600">DivineSMM</span> for the
              best possible experience!
            </p>
            <p>
              With <span className="font-bold text-cyan-600">DivineSMM</span>,
              you can boost your Telegram presence effortlessly! Whether you
              need more followers, increased engagement, or better visibility,
              {`we've`} got you covered. Our services include growing your
              Telegram followers, enhancing engagement on your posts, and
              boosting your overall visibility. Let{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span> help
              you take your Telegram game to the next level!
            </p>
          </div>
        </div>
        <Image
          src={socialStrategy}
          alt="gif"
          className="self-center w-[50%] max-w-[600px]"
        />
      </div>

      <div
        className="min-h-[80vh] bg-[#eff3fe] flex flex-col gap-y-16 items-center p-16 text-center"
        id="services"
      >
        <h1 className="text-4xl text-neutral-800 font-bold">WHY CHOOSE US?</h1>
        <h2 className="text-2xl  text-cyan-600 font-medium">
          We are <span className="font-bold text-cyan-600">DivineSMM!</span>,
          the Best Social Media Marketing Panel for Telegram!
        </h2>
        <h3 className="text-neutral-800 text-lg font-normal max-w-[900px] text-center">
          At <span className="font-bold text-cyan-600">DivineSMM</span> ,{' '}
          {`we're`}
          the top choice for Telegram marketing. Our team has the experience and
          know-how to help your business thrive on Telegram. We offer expert
          advice on creating effective campaigns and tracking their success.
          Plus, we give you tips on improving your online presence and staying
          ahead of the competition. Let us help you make the most of Telegram
          for your business!
        </h3>
      </div>

      <div className="bg-white p-16 flex flex-col items-center  text-neutral-800">
        <div className="flex flex-col max-w-[1000px] gap-y-8">
          <h2 className="text-neutral-800 text-2xl font-bold">
            The Best SMM Panel in India for Social Media Marketing Success
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold text-cyan-600">DivineSMM</span> stands
              as the leading provider of top-notch social media marketing
              solutions tailored for Telegram users in India. Our extensive
              array of services ensures unparalleled success for your marketing
              campaigns. As the premier SMM panel in India,{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span> is
              dedicated to becoming your preferred choice by offering affordable
              and reliable solutions. We understand the significance of
              cost-efficiency, priding ourselves on being the most
              budget-friendly option available. Our competitive pricing
              guarantees maximum return on investment, whether {`you're`} an
              individual, small business owner, or digital marketing agency.
              Backed by a robust network and deep industry knowledge, we deliver
              customized services that precisely meet your needs, cementing our
              position as {`India's`} ultimate SMM panel.
            </p>
            <p>
              Introducing{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>, your
              go-to panel in India for boosting your presence on major social
              media platforms like Instagram, YouTube, and more. Our Telegram
              SMM services are designed to skyrocket your followers, boost
              engagement, and elevate your brand visibility on Instagram. For
              YouTube,{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>s
              dedicated panel in India helps you grow subscribers, increase
              video views, and establish a powerful online presence.
            </p>
            <p>
              Discover{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>, your
              ultimate platform for managing Telegram accounts and achieving
              remarkable results. Join our community of satisfied clients and
              unleash your social media potential with our exceptional support.
              Start today and experience how{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span> can
              elevate your Telegram presence to new heights!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] p-16 min-h-[60vh] flex justify-center gap-x-8 items-center">
        {panelThree.map((panel) => (
          <PanelCrad
            key={panel.title}
            icon={panel.icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div
        className="min-h-[50vh] bg-white flex flex-col gap-y-8 items-center p-16 text-center"
        id="services"
      >
        <h1 className="text-4xl text-neutral-800 font-bold">
          CLIENTS TESTIMONIALS
        </h1>
        <h2 className="text-2xl  text-cyan-600 font-medium">
          Our Happy Clients Like You!
        </h2>
        <h3 className="text-neutral-800 text-lg font-normal max-w-[900px] text-center">
          It is pleasure for us to help you with the branding campaign, product
          presentation, and advertisement running across Telegram.
        </h3>
      </div>
      <div className="bg-[#f5f5f5] p-16 min-h-[60vh] flex justify-center gap-x-8 items-center">
        {panelFour.map((panel) => (
          <PanelCrad
            key={panel.title}
            icon={panel.icon}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>

      <div className="bg-white p-16 flex flex-col items-center  text-neutral-800">
        <div className="flex flex-col max-w-[1000px] gap-y-8">
          <h2 className="text-neutral-800 text-2xl font-bold">
            Discover DivineSMM – Your Ultimate Telegram Marketing Hub in Korea
            and the Philippines!
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              Look no further for your trusted source in Telegram social media
              marketing services in Korea and the Philippines—DivineSMM. We
              specialize in providing tailored solutions to boost your
              business’s growth and success in these dynamic markets.
            </p>
            <p>
              Our team of experienced professionals understands the ins and outs
              of social media marketing, leveraging their expertise to deliver
              exceptional results that exceed your expectations. Whether you
              need help with Telegram, Instagram, Facebook, Twitter, or any
              other platform, rest assured, {`we've`} got you covered. With
              affordable pricing options and 24/7 customer support, {`we've`}{' '}
              made it easy for businesses of all sizes to access top-tier social
              media marketing services that produce real, measurable results.
            </p>
            <p>
              Discover{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>, your
              ultimate partner for unleashing your {`brand's`} full potential on
              Telegram. Our mission is clear: empower businesses like yours to
              thrive online by providing top-notch services. With{' '}
              <span className="font-bold text-cyan-600">DivineSMM</span>, you
              can establish a strong online presence and connect with a broader
              audience than ever before.{` Don't`} wait—start today and
              transform your social media strategy with the{' '}
              <span className="font-bold">
                leading SMM panel in Korea and the Philippines!
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="min-h-[50vh] bg-[#f5f5f5] flex flex-col gap-y-8 items-center p-16 text-center"
        id="services"
      >
        <h1 className="text-4xl text-neutral-800 font-bold">
          OUR PAYMENT METHODS
        </h1>
        <h2 className="text-2xl  text-cyan-600 font-medium">
          Payment Methods We Accept
        </h2>
        <h3 className="text-neutral-800 text-lg font-normal max-w-[900px] text-center">
          We accept most of the payment methods those are reliable for safe
          money transfer. In the below section, you can see some of our payments
          methods.
        </h3>
      </div>
    </main>
  );
}
