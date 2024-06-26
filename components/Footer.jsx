import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const services = [
    'Telegram Group Members',
    'Telegram Channel Subscribers',
    'Telegram Mass DM',
    'Telegram Views',
    'Telegram Comments & Shares',
  ];
  return (
    <div className="flex flex-col gap-y-8 bg-cyan-900 px-16 py-8">
      <div className=" flex justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-medium">Divinesmm</h1>
          <p className="max-w-[320px] text-sm text-slate-50">
            DivineSMM is your one-stop shop for skyrocketing your engagement and
            rankings!
          </p>
          <p className="max-w-[320px] text-sm text-slate-50">
            Our team of Telegram wizards are ready to craft a winning strategy
            that gets your brand booming. Say goodbye to crickets and hello to a
            thriving community!
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-medium">Services</h1>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <p key={service} className="max-w-[320px] text-sm text-slate-50">
                {service}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-medium">Contact info</h1>
          <div className="flex flex-col gap-3">
            <p className="max-w-[320px] text-sm text-slate-50">
              River side, California United States.
            </p>
            <p className="max-w-[320px] text-sm text-slate-50">+13205471704</p>
            <p className="max-w-[320px] text-sm text-slate-50">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <p className="max-w-[320px] text-sm text-slate-100">
          All Right Reserved by{' '}
          <Link href="https://divinesmm.com">divinesmm.com</Link> | © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
