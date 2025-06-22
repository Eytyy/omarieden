import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '../../lib/utils';
import Image from '../ui/Image';
import { useApp } from '../providers/useApp';
import { HiArrowLongDown, HiArrowLongLeft, HiArrowLongRight, HiArrowLongUp } from 'react-icons/hi2';
import type { EmblaCarouselType } from 'embla-carousel';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import { editorial, type EditorialProduct } from '../../data/editorial';

export default function Editorial() {
  const { lang } = useApp();
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
  return (
    <section className="lg:grid lg:grid-cols-[2fr_1fr] 2xl:grid-cols-4 border-b border-b-black dark:border-b-white relative">
      <Edit lang={lang} />
      <div className="2xl:col-span-2 relative">
        <GridLine />
        <SliderButtons emblaApi={emblaApi} />
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex lg:flex-col lg:h-screen touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-2 2xl:h-full">
            {editorial.map((product, i) => (
              <Card
                lang={lang}
                key={product.id}
                product={product}
                firstRow={i < 2} // true for first two cards
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Edit({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <div className="2xl:col-span-2 flex flex-col justify-end  bg-white border-b lg:border-b-0 lg:rtl:border-l lg:ltr:border-r relative dark:bg-black h-[66.66vh] lg:h-auto">
      <div className="px-4 lg:px-8 absolute top-0 left-0 h-full w-full [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
        <Image id="editorial/editorial-outfit_zcjqge" />
      </div>
      <header className="p-4 lg:p-8 relative">
        <a href="/" className="text-xs lg:text-sm uppercase text-[#999] mb-1">
          {lang == 'en' ? 'Editorial' : 'المجلة التحريرية'}
        </a>
        <a href="#">
          <h2 className="text-2xl leading-[1.1] lg:text-4xl">
            {lang == 'en' ? 'FOCUS ON: ACTIVE' : 'التركيز على: النشاط'}
          </h2>
        </a>
      </header>
    </div>
  );
}

function GridLine() {
  return (
    <div className="border-b w-full hidden 2xl:hidden absolute top-1/2 left-0 -translate-y-1/2 lg:flex flex-col justify-center items-center" />
  );
}

function Card({
  product,
  lang,
  firstRow,
}: {
  product: EditorialProduct;
  firstRow: boolean;
  lang: 'en' | 'ar';
}) {
  return (
    <div
      className={cn(
        'grid grid-rows-[3fr_1fr] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_50%] 2xl:flex[0_0_100%] lg:h-[50vh]',
        firstRow ? '2xl:border-b' : '2xl:border-b-0'
      )}
    >
      <div className="flex justify-center items-center px-4 lg:px-8 lg:pt-20 h-full relative">
        <div className="w-full h-full  absolute top-0 left-0 [&_img]:object-contain [&_img]:w-full [&_img]:h-full ">
          <Image id={product.image} />
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:gap-0 p-4 lg:p-8">
        <p className="text-gray-400 uppercase text-xs lg:text-sm">{product.designer}</p>
        <h2 className="uppercase text-sm lg:text-base ">{product.name[lang]}</h2>
        <p className="text-xs lg:text-sm">{product.price}</p>
      </div>
    </div>
  );
}

function SliderButtons({ emblaApi }: { emblaApi: EmblaCarouselType | undefined }) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <div className="flex rtl:flex-row-reverse lg:rtl:flex-col lg:flex-col font-display text-2xl absolute lg:top-1/2 lg:-translate-y-1/2 top-0 rtl:left-0 ltr:right-0 2xl:hidden z-10">
      <button
        className="cursor-pointer border p-4 border-t-0 rtl:border-l-0 lg:border-t lg:border-b-0 lg:ltr:border-r-0"
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        <HiArrowLongLeft className="lg:hidden" />
        <HiArrowLongUp className="hidden lg:block" />
      </button>
      <button
        className="cursor-pointer p-4 border-b rtl:border-r lg:ltr:border-l"
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <HiArrowLongRight className="lg:hidden" />
        <HiArrowLongDown className="hidden lg:block" />
      </button>
    </div>
  );
}
