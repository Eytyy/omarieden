export function EditorialHeader({
  title,
  slug,
  lang,
}: {
  title: string;
  slug: string;
  lang: 'en' | 'ar';
}) {
  return (
    <header className="p-4 lg:p-8 flex flex-col gap-1">
      <a
        href="/"
        className="text-xs rtl:text-sm lg:text-sm rtl:lg:text-base uppercase text-gray-500 hover:underline"
      >
        {lang === 'en' ? 'Editorial' : 'المجلة التحريرية'}
      </a>
      <h2 className="text-2xl rtl:text-3xl rtl:lg:text-5xl  lg:text-4xl leading-tight">{title}</h2>
      <a
        href={slug}
        className="text-sm uppercase hover:underline font-display rtl:font-display-ar rtl:text-base"
      >
        {lang === 'en' ? 'Explore the Edit' : 'استكشف التحرير'}
      </a>
    </header>
  );
}
