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

const TestimonialSlider = (props) => {
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
  const testimonialLists = JSON.parse(props.lists);
  const testimonialImages = [
    testimonialOne,
    testimonialTwo,
    testimonialThree,
    testimonialFour,
  ];
  return (
    <div className="slider-container max-w-[100%]">
      <Slider {...settings}>
        {testimonialLists.map((item, indx) => {
          return (
            <div
              className="flex flex-col items-center justify-center max-w-[450px]  gap-y-8 py-4 px-8 bg-white order-box2 rounded-2xl "
              key={indx}
            >
              <Image
                src={testimonialImages[indx]}
                alt="testimonial"
                className=" self-center m-auto w-[70px] h-[70px] rounded-full"
              />
              <h1 className="mt-4 font-bold text-xl">{item.name}</h1>
              <p className="">{item.job}</p>
              <p className="mt-2 ">⭐ ⭐ ⭐ ⭐ ⭐</p>
              <p className="mt-2 text-sm">{item.message}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
