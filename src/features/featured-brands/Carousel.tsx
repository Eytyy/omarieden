import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { cn } from '@/lib/utils';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';
import type { FeaturedBrandType } from './types';

import FeaturedBrandCard from './FeaturedBrandCard';

export default function Carousel({ data, lang }: { data: FeaturedBrandType[]; lang: 'en' | 'ar' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    active: true,
    breakpoints: { '(min-width: 1536px)': { active: false } },
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

  return (
    <>
      <Controls emblaApi={emblaApi} noOfSlides={data.length} />
      <div className="embla__viewport overflow-hidden h-full " ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-3 h-full">
          {data.map((item) => (
            <FeaturedBrandCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

function Controls({
  emblaApi,
  noOfSlides,
}: {
  emblaApi: EmblaCarouselType | undefined;
  noOfSlides: number;
}) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <>
      <button
        className={cn(
          'cursor-pointer flex items-center justify-center absolute top-1/2 left-2 z-10 text-4xl xl:left-8',
          noOfSlides > 3 ? '2xl:block' : '2xl:hidden'
        )}
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className={cn(
          'cursor-pointer flex items-center justify-center absolute top-1/2 right-2 z-10 text-4xl xl:right-8',
          noOfSlides > 3 ? '2xl:block' : '2xl:hidden'
        )}
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight />
      </button>
    </>
  );
}
