import { useState } from 'react';
import type { CollectionType, FeaturedCollectionsSectionType } from './types';
import { useApp } from '@/shared/providers/useApp';
import Image from '@/shared/ui/Image';

export default function FeaturedCollectionSection({ data }: FeaturedCollectionsSectionType) {
  const { lang } = useApp();

  return (
    <section className="grid lg:grid-cols-2 lg:border-b border-b-black dark:border-b-white ">
      {data.map((item, index) => (
        <MultiVariantView key={index} collection={item} lang={lang} />
      ))}
    </section>
  );
}

function MultiVariantView({ collection, lang }: { collection: CollectionType; lang: 'en' | 'ar' }) {
  const { title, subtitle, slug, backImage, mainImage } = collection;
  const [selectedImage, setSelectedImage] = useState<'mainImage' | 'backImage'>('mainImage');
  const toggleImage = () => {
    setSelectedImage((prev) => (prev === 'mainImage' ? 'backImage' : 'mainImage'));
  };

  return (
    <div className="grid grid-rows-[1fr_min-content] bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black lg:h-screen h-[calc(100vh-57px)] pt-10">
      <div
        className="px-4 lg:px-8 relative"
        onMouseEnter={toggleImage}
        onClick={toggleImage}
        aria-label="View Next Collection Page"
      >
        <div className="absolute left-0 top-0 w-full h-full object-contain [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
          <Image id={selectedImage === 'mainImage' ? mainImage : backImage} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 pb-8 lg:p-8 relative">
        <header>
          <h2 className="mb-1 text-2xl leading-[1.1] lg:text-4xl group-hover:underline">
            {title[lang]}
          </h2>
          {subtitle && (
            <p className="text-sm">
              {subtitle[lang]}
              <span>. </span>
            </p>
          )}
          <a href={slug} className="hover:underline uppercase text-sm">
            Explore the collection.
          </a>
        </header>
      </div>
    </div>
  );
}
