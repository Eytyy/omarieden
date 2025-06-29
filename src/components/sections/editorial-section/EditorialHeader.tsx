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
      <a href="/" className="text-xs lg:text-sm uppercase text-gray-500 hover:underline">
        {lang === 'en' ? 'Editorial' : 'المجلة التحريرية'}
      </a>
      <h2 className="text-2xl lg:text-4xl leading-tight">{title}</h2>
      <a href={slug} className="text-sm uppercase hover:underline">
        {lang === 'en' ? 'Explore the Edit' : 'استكشف التحرير'}
      </a>
    </header>
  );
}
