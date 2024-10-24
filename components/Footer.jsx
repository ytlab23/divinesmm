import Link from 'next/link';
import React from 'react';

import initTranslations from '../app/i18n';

const Footer = async ({ locale }) => {
  const { t: tFooter } = await initTranslations(locale, ['footer']);
  const services = JSON.parse(tFooter('footer-services'));
  return (
    <div
      className="flex flex-col gap-y-8 bg-cyan-900 px-4 sm:px-16 py-8"
      id="contact"
    >
      <div className=" flex flex-col sm:flex-row justify-between gap-8">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-medium">Divinesmm</h1>
          <p className="max-w-[320px] text-sm text-slate-50">
            {/* DivineSMM is your one-stop shop for skyrocketing your engagement and
            rankings! */}
            {tFooter('content-one')}
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-medium">
            {tFooter('footer-service-title')}
          </h1>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <p key={service} className="max-w-[320px] text-sm text-slate-50">
                {service}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-medium">
            {tFooter('footer-contact-title')}
          </h1>
          <div className="flex flex-col gap-3">
            <p className="max-w-[320px] text-sm text-slate-50">
              River side, California United States.
            </p>
            <p className="max-w-[320px] text-sm text-slate-50">
              {tFooter('footer-contact-24')}
            </p>
            <p className="max-w-[320px] text-sm text-slate-50">
              support@divinesmm.com
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <p className="max-w-[520px] text-sm text-slate-100">
          All Right Reserved by{' '}
          <Link href="https://divinesmm.com">divinesmm.com</Link> | The #1
          Telegram SMM Panel | © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
