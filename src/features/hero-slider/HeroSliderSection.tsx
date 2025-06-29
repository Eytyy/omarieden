import React from 'react';
import { useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

import type { SliderSectionType, SlideType } from './types';
import { useApp } from '@/shared/providers/useApp';
import SliderButtons from '@/shared/ui/SliderButtons';

export default function HeroSliderSection({ data }: SliderSectionType) {
  const { lang } = useApp();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

  return (
    <div className="h-[calc(100dvh-69px)]  lg:h-auto lg:aspect-video justify-center bg-black text-white relative border-b-black border-b dark:border-b-white">
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

function Slide({ slide, lang }: { slide: SlideType; index: number; lang: 'en' | 'ar' }) {
  return (
    <div className="flex flex-col items-center justify-center embla__slide [transform:_translate3d(0,0,0)] min-w-0 flex-[0_0_100%] h-full relative ">
      <div className="h-screen text-4xl font-display bg-[#111] w-full flex flex-col items-center justify-center  text-white/50">
        {slide.media.type === 'video' ? (
          <Video src={slide.media.src} poster={slide.media.poster} />
        ) : (
          <img
            src={slide.media.src}
            alt={slide.title[lang]}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="absolute bottom-0 rtl:right-0 ltr:left-0 p-4 lg:p-8 w-3/4  text-white ">
        <h2 className="text-2xl leading-[1.1] lg:text-4xl">{slide.title[lang]}</h2>
        <p className="mt-4 max-w-[60ch] text-sm lg:text-base">{slide.description[lang]}</p>
      </div>
    </div>
  );
}

const Video = ({ src, poster }: { src: string; poster?: string }) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.75 });

  React.useEffect(() => {
    if (inView && ref.current) {
      ref.current.play().catch((error) => console.error('Video play error:', error));
    } else if (ref.current) {
      ref.current.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      className="w-full h-full object-center object-cover absolute top-0 left-0"
    />
  );
};
