export default function ProductsCarouselSectionHeader({
  title,
  lang,
}: {
  title: string;
  lang: 'en' | 'ar';
}) {
  return (
    <header className="w-1/2 lg:w-auto px-4 pt-8 lg:grid lg:grid-cols-3 lg:px-0 2xl:grid-cols-4">
      <div className="text-lg rtl:text-xl uppercase opacity-50 dark:opacity-80 lg:col-start-2 xl:px-4 lg:px-8 leading-[1.1] mb-1">
        {title}
      </div>
      <a
        href="#"
        className="text-sm xl:px-4 lg:col-start-2 lg:px-8 uppercase rtl:text-base font-display rtl:font-display-ar"
      >
        <div>{lang == 'en' ? 'Shop ALL' : 'تسوق الكل'}</div>
      </a>
    </header>
  );
}
