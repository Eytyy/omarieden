import { useState } from 'react';
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
  const { title, subtitle, pages } = collection;
  const [selectedPage, setSelectedPage] = useState<0 | 1>(0);
  const togglePage = () => {
    setSelectedPage((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="grid grid-rows-[1fr_min-content] bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black lg:h-screen h-[calc(100vh-57px)] pt-10">
      <div
        className="px-4 lg:px-8 relative"
        onMouseEnter={togglePage}
        onClick={togglePage}
        aria-label="View Next Collection Page"
      >
        <div className="absolute left-0 top-0 w-full h-full object-contain [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
          <Image id={pages[selectedPage].image} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 pb-8 lg:p-8 relative">
        <header>
          <a href={pages[selectedPage].slug} className="group">
            <h2 className="mb-1 text-2xl leading-[1.1] lg:text-4xl group-hover::underline">
              {title[lang]}
            </h2>
            {subtitle && <p className="text-sm">{subtitle[lang]}</p>}
          </a>
        </header>
      </div>
    </div>
  );
}
