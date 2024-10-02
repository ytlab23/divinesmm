import initTranslations from '../app/i18n';

const Header = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['Header']);
  return (
    <div className="min-h-[90vh] flex flex-col px-4 py-8 gap-y-16 justify-center items-center text-center">
      <h1 className="sm:text-5xl text-3xl font-bold">{t('title')}</h1>
      <h2
        className="sm:text-2xl text-lg sm:w-[90%] max-w-[1200px]"
        dangerouslySetInnerHTML={{ __html: t('content') }}
      />
    </div>
  );
};

export default Header;
