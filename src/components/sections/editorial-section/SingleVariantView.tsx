import Image from '../../ui/Image';
import { EditorialHeader } from './EditorialHeader';
import ProductsCarousel from './ProductsCarousel';
import type { EditorialSectionData } from './types';

export default function SingleVariantView({
  edit,
  lang,
}: {
  edit: EditorialSectionData;
  lang: 'en' | 'ar';
}) {
  const variant = edit.variants[0];
  return (
    <section className="lg:grid lg:grid-cols-[2fr_1fr] 2xl:grid-cols-4 border-b border-b-black dark:border-b-white relative">
      <div className="2xl:col-span-2 flex flex-col justify-end bg-white border-b lg:border-b-0 lg:rtl:border-l lg:ltr:border-r relative dark:bg-black h-[66.66vh] lg:h-auto ">
        <div className="h-full relative">
          <div className="absolute inset-4 lg:inset-8 [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
            <Image id={variant.mainImage} />
          </div>
        </div>
        <EditorialHeader title={edit.title[lang]} slug={edit.slug} lang={lang} />
      </div>
      <div className="2xl:col-span-2 relative">
        <ProductsCarousel products={variant.products} lang={lang} />
      </div>
    </section>
  );
}
