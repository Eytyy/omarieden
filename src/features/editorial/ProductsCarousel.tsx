import useEmblaCarousel from 'embla-carousel-react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import type { EditorialProduct } from './types';
import { cn } from '@/lib/utils';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';

import ProductCard from './ProductCard';

export default function ProductsCarousel({
  products,
  lang,
}: {
  products: EditorialProduct[];
  lang: 'en' | 'ar';
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    active: true,
    direction: lang === 'ar' ? 'rtl' : 'ltr',
    breakpoints: {
      '(min-width: 1024px)': { axis: 'y' },
      '(min-width: 1536px)': { active: false },
    },
  });
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <>
      <Controls onPrevButtonClick={onPrevButtonClick} onNextButtonClick={onNextButtonClick} />
      <GridLine />
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex lg:flex-col lg:h-screen touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-2 2xl:h-full">
          {products.map((product, i) => (
            <div
              className={cn(
                'embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_50%] 2xl:flex[0_0_100%] lg:h-[50vh]',
                i < 2 ? '2xl:border-b' : '2xl:border-b-0'
              )}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
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
    <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between">
      <button className="text-4xl" onClick={onPrevButtonClick} aria-label="Previous Slide">
        <MdKeyboardArrowLeft />
      </button>
      <button className="text-4xl" onClick={onNextButtonClick} aria-label="Next Slide">
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}

function GridLine() {
  return (
    <div className="border-b w-full hidden 2xl:hidden absolute top-1/2 left-0 -translate-y-1/2 lg:flex flex-col justify-center items-center" />
  );
}
