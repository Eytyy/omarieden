import React from 'react';
import { collections, type CollectionType } from '../../data/collections';
import { useApp } from '../providers/useApp';
import Image from '../ui/Image';

export default function FeaturedCollections() {
  const { lang } = useApp();

  return (
    <section className="grid lg:grid-cols-2 lg:border-b border-b-black dark:border-b-white ">
      {collections.map((item, index) => (
        <FeaturedCollection key={index} collection={item} lang={lang} />
      ))}
    </section>
  );
}

function FeaturedCollection({
  collection,
  lang,
}: {
  collection: CollectionType;
  lang: 'en' | 'ar';
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const { title, subtitle, pages } = collection;

  const activePage = pages[activeIdx];

  const updateActivePage = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % pages.length);
  };

  return (
    <div className="grid grid-rows-[1fr_min-content]  bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black h-screen">
      <div
        className="cursor-pointer pt-20 px-4 lg:px-8 relative"
        onClick={updateActivePage}
        aria-label={lang === 'en' ? 'Click to change collection' : 'انقر لتغيير المجموعة'}
      >
        <div className="relative w-full h-full ">
          <div className="absolute top-0 w-full h-full object-contain [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
            <Image id={activePage.image} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:p-8 relative">
        <PageToggler pages={collection.pages} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
        <CardHeader title={title[lang]} subtitle={subtitle[lang]} />
        <CardCTA
          title={lang === 'ar' ? 'استكشاف المجموعة' : 'Explore Collection'}
          slug={activePage.slug}
        />
      </div>
    </div>
  );
}

function PageToggler({
  pages,
  activeIdx,
  setActiveIdx,
}: {
  pages: { image: string; slug: string }[];
  activeIdx: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="absolute top-4 lg:top-8 -translate-y-full flex gap-2 py-4">
      {pages.map((_, index) => (
        <button
          type="button"
          aria-label={`Page ${index + 1}`}
          key={index}
          className={`bg-black dark:bg-white transition-opacity duration-300 w-3 h-3 rounded-full cursor-pointer ${
            index === activeIdx ? 'opacity-100' : 'opacity-20'
          }`}
          onClick={() => setActiveIdx(index)}
        ></button>
      ))}
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex flex-col gap-2">
      <h2 className="text-2xl leading-[1.1] lg:text-4xl">{title}</h2>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </header>
  );
}

function CardCTA({ title, slug }: { title: string; slug: string }) {
  return (
    <a href={slug} className="uppercase h-[36px] items-center flex gap-2 text-sm">
      <div className="font-display text-3xl w-5 flex justify-center">+</div>
      <div>{title}</div>
    </a>
  );
}
