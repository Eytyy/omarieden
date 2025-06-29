import FeaturedCollection from './FeaturedCollection';
import type { FeaturedCollectionsSectionType } from './types';

import { useApp } from '@/shared/providers/useApp';

export default function FeaturedCollectionSection({ data }: FeaturedCollectionsSectionType) {
  const { lang } = useApp();

  return (
    <section className="grid lg:grid-cols-2 lg:border-b border-b-black dark:border-b-white ">
      {data.map((item, index) => (
        <FeaturedCollection key={index} collection={item} lang={lang} />
      ))}
    </section>
  );
}
