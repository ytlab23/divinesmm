'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import testimonialOne from '../assets/testimonial1.png';
import testimonialTwo from '../assets/testimonial2.png';
import testimonialThree from '../assets/testimonial3.png';
import testimonialFour from '../assets/testimonial4.png';

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '15px',
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container max-w-[100%]">
      <Slider {...settings}>
        <div className="flex flex-col items-center justify-center max-w-[450px]  gap-y-8 py-4 px-8 bg-white order-box2 rounded-2xl ">
          <Image
            src={testimonialOne}
            alt="testimonial"
            className=" self-center m-auto w-[70px] h-[70px] rounded-full"
          />
          <h1 className="mt-4 font-bold text-xl">Adam Smith</h1>
          <p className="">Businessman</p>
          <p className="mt-2 ">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p className="mt-2 text-sm">
            Wow! This is amazing. I have been purchasing Telegram group members
            for over a year and never got a delay! SmmValy did a great job
            always!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[450px]  gap-y-8 py-4 px-8 bg-white order-box2 rounded-2xl ">
          <Image
            src={testimonialTwo}
            alt="testimonial"
            className=" self-center m-auto w-[70px] h-[70px] rounded-full"
          />
          <h1 className="mt-4 font-bold text-xl">Samantha</h1>
          <p className="">Instagram Model</p>
          <p className="mt-2 ">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p className="mt-2 text-sm">
            Order 10000 Telegram Followers and Got my followers as promised in
            time! Happy to Purchased from SmmValy. We will Continue with them
            for our future purchase.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[450px]  gap-y-8 py-4 px-8 bg-white order-box2 rounded-2xl ">
          <Image
            src={testimonialThree}
            alt="testimonial"
            className=" self-center m-auto w-[70px] h-[70px] rounded-full"
          />
          <h1 className="mt-4 font-bold text-xl">Samantha</h1>
          <p className="">Instagram Model</p>
          <p className="mt-2 ">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p className="mt-2 text-sm">
            Purchased 2000 Telegram subscibers for our company and worked
            indeed! Support team is also in time always.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[450px]  gap-y-8 py-4 px-8 bg-white order-box2 rounded-2xl ">
          <Image
            src={testimonialFour}
            alt="testimonial"
            className=" self-center m-auto w-[70px] h-[70px] rounded-full"
          />
          <h1 className="mt-4 font-bold text-xl">Samantha</h1>
          <p className="">Instagram Model</p>
          <p className="mt-2 ">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p className="mt-2 text-sm">
            I Just love the services, instant delivered my Telegram views order
            and the Telegram Page subscribers! I am buying from them long time
            and love to buy more in future.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
