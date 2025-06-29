import useEmblaCarousel from 'embla-carousel-react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import type { CarouselSectionType } from './types';
import ProductsCarouselSectionHeader from './ProductsCarouselSectionHeader';
import ProductCard from './ProductCard';
import { useApp } from '@/shared/providers/useApp';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';

export default function ProductsCarouselSection({ title, products }: CarouselSectionType) {
  const { lang } = useApp();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="border-b dark:border-b-white relative">
      <ProductsCarouselSectionHeader title={title[lang]} />
      <Controls onPrevButtonClick={onPrevButtonClick} onNextButtonClick={onNextButtonClick} />
      <div className="embla h-full relative pt-10">
        <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {products.map((product) => (
              <div
                key={product.id}
                className="embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_50%] md:flex-[0_0_33.333%] 2xl:flex-[0_0_25%] group"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Controls = ({
  onPrevButtonClick,
  onNextButtonClick,
}: {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}) => (
  <>
    <button
      className="cursor-pointer flex items-center justify-center absolute top-1/2 left-0 z-10 text-4xl xl:left-8"
      onClick={onPrevButtonClick}
      aria-label="Previous Slide"
    >
      <MdKeyboardArrowLeft />
    </button>
    <button
      className="cursor-pointer flex items-center justify-center absolute top-1/2 right-0 z-10 text-4xl xl:right-8"
      onClick={onNextButtonClick}
      aria-label="Next Slide"
    >
      <MdKeyboardArrowRight />
    </button>
  </>
);
