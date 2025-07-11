import { useApp } from '@/shared/providers/useApp';

import type { EditorialSectionType } from './types';

import MultiVariantCarousel from './MultiVariantCarousel';
import SingleVariantView from './SingleVariantView';

export default function EditorialSection({ data }: EditorialSectionType) {
  const { lang } = useApp();
  if (data.variants.length > 1) {
    return <MultiVariantCarousel edit={data} lang={lang} />;
  } else {
    return <SingleVariantView edit={data} lang={lang} />;
  }
}
