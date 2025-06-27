import useEmblaCarousel from 'embla-carousel-react';
import Image from '../ui/Image';
import { useApp } from '../providers/useApp';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import type { EmblaCarouselType } from 'embla-carousel';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { cn } from '../../lib/utils';
import highlights, { type HighlightType } from '../../data/highlights';
import { useState } from 'react';

export default function Highlights() {
  const { lang } = useApp();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    active: true,
    breakpoints: { '(min-width: 1536px)': { active: false } },
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

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
        <SliderButtons emblaApi={emblaApi} noOfSlides={highlights.length} />
        <div className="embla__viewport overflow-hidden h-full " ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-3 h-full">
            {highlights.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card(item: HighlightType) {
  const [selectedImage, setSelectedImage] = useState<'mainImage' | 'backImage'>('mainImage');
  const toggleImage = () => {
    setSelectedImage((prev) => (prev === 'mainImage' ? 'backImage' : 'mainImage'));
  };

  return (
    <div
      className="grid grid-rows-[1fr_min-content] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] 2xl:flex-[0_0_100%]"
      onMouseEnter={toggleImage}
      onClick={toggleImage}
      aria-label="View Next Featured Highlight Page"
    >
      <div className="relative w-full aspect-square lg:aspect-auto">
        <div className="[&_img]:object-contain [&_img]:w-full [&_img]:h-full absolute inset-4 lg:inset-8">
          <Image id={item[selectedImage]} />
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <a href={item.slug} className="text-sm lg:text-base uppercase hover:underline font-display">
          {item.title}
        </a>
      </div>
    </div>
  );
}

function SliderButtons({
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
