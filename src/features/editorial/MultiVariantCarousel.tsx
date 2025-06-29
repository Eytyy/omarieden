import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import useEmblaCarousel from 'embla-carousel-react';

import Image from '@/shared/ui/Image';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';

import type { EditorialSectionData } from './types';

import { EditorialHeader } from './EditorialHeader';
import ProductsCarousel from './ProductsCarousel';

export default function MultiVariantCarousel({
  edit,
  lang,
}: {
  edit: EditorialSectionData;
  lang: 'en' | 'ar';
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });
  const { selectedIndex, onNextButtonClick, onPrevButtonClick } = usePrevNextButtons(emblaApi);
  const products = edit.variants[selectedIndex].products;

  return (
    <section className="lg:grid lg:grid-cols-[2fr_1fr] 2xl:grid-cols-4 border-b border-b-black dark:border-b-white relative">
      <div className="2xl:col-span-2 flex flex-col justify-end bg-white border-b lg:border-b-0 lg:rtl:border-l lg:ltr:border-r relative dark:bg-black h-[66.66vh] lg:h-auto ">
        <div className="embla h-full relative">
          <Controls onPrevButtonClick={onPrevButtonClick} onNextButtonClick={onNextButtonClick} />
          <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom h-full">
              {edit.variants.map((variant) => (
                <div
                  key={variant.audience}
                  className="embla__slide [transform:_translate3d(0,0,0)] min-w-0 flex-[0_0_100%] relative h-full"
                >
                  <div className="absolute inset-4 lg:inset-8 [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
                    <Image id={variant.mainImage} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <EditorialHeader title={edit.title[lang]} slug={edit.slug} lang={lang} />
      </div>
      <div className="2xl:col-span-2 relative">
        <ProductsCarousel products={products} lang={lang} />
      </div>
    </section>
  );
}

function Controls({
  onPrevButtonClick,
  onNextButtonClick,
}: {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}) {
  return (
    <>
      <button
        className="text-4xl cursor-pointer absolute top-1/2 ltr:left-0 rtl:right-0 z-10 rtl:rotate-180"
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="text-4xl cursor-pointer absolute top-1/2 ltr:right-0 rtl:left-0 z-10 rtl:rotate-180"
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight />
      </button>
    </>
  );
}
