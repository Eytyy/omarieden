type Props = {
  lang: 'en' | 'ar';
  title: string;
  subtitle?: string;
  slug: string;
};

export default function FeaturedCollectionHeader({ lang, title, subtitle, slug }: Props) {
  return (
    <header className="flex flex-col gap-1 rtl:gap-2">
      <h2 className="text-2xl rtl:text-3xl rtl:leading-[1.2] rtl:lg:text-5xl leading-[1.1] lg:text-4xl group-hover:underline">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm rtl:text-base">
          {subtitle}
          <span>. </span>
        </p>
      )}
      <a
        href={slug}
        className="hover:underline uppercase text-sm rtl:text-base rtl:font-display-ar font-display"
      >
        {lang === 'en' ? 'Explore the collection.' : 'استكشف المجموعة.'}
      </a>
    </header>
  );
}
