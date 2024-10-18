import initTranslations from '../app/i18n';

const Header = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['Header']);
  return (
    <div className="min-h-[90vh] mt-2 flex flex-col px-4 py-8 gap-y-16 justify-center items-center text-center">
      <h1 className="sm:text-5xl text-3xl font-bold">{t('title')}</h1>
      <h2
        className="sm:text-2xl text-lg sm:w-[90%] max-w-[1200px]"
        dangerouslySetInnerHTML={{ __html: t('content') }}
      />
      <a
        href=" https://panel.divinesmm.com/"
        className="sm:text-2xl text-lg mt-1 font-bold max-w-[340px] mx-auto text-center text-white p-2 rounded-md border border-white"
      >
        GET STARTED!
      </a>
    </div>
  );
};

export default Header;
