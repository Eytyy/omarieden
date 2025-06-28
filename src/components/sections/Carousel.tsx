import useEmblaCarousel from 'embla-carousel-react';
import { type Products } from '../../data/products';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import ProductCard from '../product/ProductCard';
import { useApp } from '../providers/useApp';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export type CarouselSectionType = {
  _type: 'carousel';
  _id: string;
  title: {
    en: string;
    ar: string;
  };
  products: Products;
};
export default function Carousel({ title, products }: CarouselSectionType) {
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
      <SectionHeader title={title[lang]} />
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

function SectionHeader({ title }: { title: string }) {
  return (
    <header className="w-1/2 lg:w-auto px-4 pt-8 lg:grid lg:grid-cols-3 lg:px-0 2xl:grid-cols-4">
      <div className="text-lg uppercase opacity-50 dark:opacity-80 lg:col-start-2 xl:px-4 lg:px-8 leading-[1.1] mb-1">
        {title}
      </div>
      <a href="#" className="text-sm xl:px-4 lg:col-start-2 lg:px-8">
        <div>SHOP ALL</div>
      </a>
    </header>
  );
}
