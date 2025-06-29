import type { FeaturedBrandsSectionType } from './types';

import { useApp } from '@/shared/providers/useApp';

import Carousel from './Carousel';
import FeaturedBrandsHeader from './FeaturedBrandsHeader';

export default function FeaturedBrandsSection({
  data,
  title,
  description,
}: FeaturedBrandsSectionType) {
  const { lang } = useApp();

  return (
    <section className="grid md:grid-cols-3 2xl:grid-cols-4 border-b dark:border-b-white bg-white dark:bg-black md:bg-transparent lg:dark:bg-transparent lg:min-h-[75vh] relative">
      <FeaturedBrandsHeader
        lang={lang}
        title={title[lang]}
        description={description ? description[lang] : undefined}
      />
      <div className="md:col-span-2 2xl:col-span-3 lg:pt-10 relative">
        <Carousel data={data} lang={lang} />
      </div>
    </section>
  );
}
