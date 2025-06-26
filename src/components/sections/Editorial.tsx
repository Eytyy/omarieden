import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '../../lib/utils';
import Image from '../ui/Image';
import { useApp } from '../providers/useApp';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import { editorial, type EditorialProduct } from '../../data/editorial';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import EditorialProductCard from '../product/EditorialProductCard';

export default function Editorial() {
  const { lang } = useApp();

  return (
    <section className="lg:grid lg:grid-cols-[2fr_1fr] 2xl:grid-cols-4 border-b border-b-black dark:border-b-white relative">
      <Edit lang={lang} />
      <div className="2xl:col-span-2 relative">
        <ProductsCarousel products={editorial} lang={lang} />
      </div>
    </section>
  );
}

function Edit({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <div className="2xl:col-span-2 flex flex-col justify-end bg-white border-b lg:border-b-0 lg:rtl:border-l lg:ltr:border-r relative dark:bg-black h-[66.66vh] lg:h-auto ">
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

function ProductsCarousel({ products, lang }: { products: EditorialProduct[]; lang: 'en' | 'ar' }) {
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
      <button
        className="2xl:hidden cursor-pointer flex items-center justify-center absolute top-1/2 left-0 z-10 text-4xl -translate-y-1/2 lg:right-4 lg:left-auto lg:rotate-90 lg:-translate-y-full"
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="2xl:hidden cursor-pointer flex items-center justify-center absolute top-1/2 right-4 z-10 text-4xl -translate-y-1/2 lg:rotate-90 lg:translate-y-0"
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight />
      </button>
      <GridLine />
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex lg:flex-col lg:h-screen touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-2 2xl:h-full">
          {products.map((product, i) => (
            <div
              className={cn(
                'group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_50%] 2xl:flex[0_0_100%] lg:h-[50vh]',
                i < 2 ? '2xl:border-b' : '2xl:border-b-0'
              )}
            >
              <EditorialProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function GridLine() {
  return (
    <div className="border-b w-full hidden 2xl:hidden absolute top-1/2 left-0 -translate-y-1/2 lg:flex flex-col justify-center items-center" />
  );
}
