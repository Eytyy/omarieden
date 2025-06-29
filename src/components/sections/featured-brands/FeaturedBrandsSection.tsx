import type { FeaturedBrandsSectionType } from './types';
import { useApp } from '../../providers/useApp';
import Carousel from './Carousel';

export default function FeaturedBrandsSection({ data }: FeaturedBrandsSectionType) {
  const { lang } = useApp();

  return (
    <section className="grid md:grid-cols-3 2xl:grid-cols-4 border-b dark:border-b-white bg-white dark:bg-black md:bg-transparent lg:dark:bg-transparent lg:min-h-[75vh] relative">
      <header className="p-4 py-8 lg:p-8 flex flex-col md:justify-end gap-1 md:gap-2 bg-white dark:bg-black md:ltr:border-r md:rtl:border-l 2xl:rtl:border-l-0 2xl:ltr:border-r-0 2xl:bg-transparent 2xl:dark:bg-transparent">
        <div>
          <h2 className="text-2xl leading-[1.1] lg:text-4xl  uppercase">
            {lang == 'en' ? 'Brands Highlight of the Month' : 'أبرز العلامات التجارية لهذا الشهر'}
          </h2>
          <p className="leading-[1.3] text-sm lg:base">
            {lang == 'en'
              ? 'A curated selection of brands that are redefining the fashion scene.'
              : 'مجموعة مختارة من العلامات التجارية التي تعيد تعريف مشهد الموضة.'}
          </p>
        </div>
      </header>
      <div className="md:col-span-2 2xl:col-span-3 lg:pt-10 relative">
        <Carousel data={data} lang={lang} />
      </div>
    </section>
  );
}
