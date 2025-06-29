import useEmblaCarousel from 'embla-carousel-react';

import type { SliderSectionType } from './types';
import { useApp } from '@/shared/providers/useApp';
import SliderButtons from '@/shared/ui/SliderButtons';
import Slide from './Slide';

export default function HeroSliderSection({ data }: SliderSectionType) {
  const { lang } = useApp();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

  return (
    <div className="h-[calc(100dvh-69px)] lg:h-auto lg:aspect-video justify-center bg-black text-white relative border-b-black border-b dark:border-b-white">
      <div className="embla h-full relative">
        <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom h-full">
            {data.map((slide, index) => (
              <Slide key={slide.id} slide={slide} index={index} lang={lang} />
            ))}
          </div>
        </div>
      </div>
      <SliderButtons
        format="slides"
        className="absolute bottom-0 rtl:left-0 ltr:right-0 p-4 lg:p-8"
        emblaApi={emblaApi}
      />
    </div>
  );
}
