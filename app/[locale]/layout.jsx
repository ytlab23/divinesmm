import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';

import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  // Initialize translations for the 'metaInfo' namespace
  const { t: tmetaInfo } = await initTranslations(locale, ['metaInfo']);

  // Return metadata based on the translations
  return {
    title: tmetaInfo('meta-title'),
    description: tmetaInfo('meta-desc'),
  };
}

const i18nNamespaces = ['nav'];

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const metadata = await generateMetadata({ params: { locale } });

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} flex flex-col h-[100vh] justify-between`}
      >
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Navbar />
        </TranslationsProvider>

        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
