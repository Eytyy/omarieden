import useEmblaCarousel from 'embla-carousel-react';
import { type Products } from '../../data/products';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import ProductCard from '../ui/ProductCard';
import { useLang } from '../providers/useLang';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

export default function Carousel({ title, products }: { title: string; products: Products }) {
  const { lang } = useLang();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="border-b dark:border-b-white">
      <SectionHeader
        title={title}
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
      />
      <div className="embla h-full relative pt-20">
        <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {products.map((product) => (
              <div
                key={product.id}
                className="embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_50%] md:flex-[0_0_33.333%] 2xl:flex-[0_0_25%] group "
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  title,
  onPrevButtonClick,
  onNextButtonClick,
}: {
  title: string;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}) {
  return (
    <header className="grid grid-cols-4 md:grid-cols-3 2xl:grid-cols-4 text-sm lg:text-lg bg-white dark:bg-black border-b md:bg-transparent md:dark:bg-transparent 2xl:border-b-0">
      <div className="uppercase col-span-2 md:col-span-1 opacity-50 dark:opacity-80 leading-[1.2] flex items-center px-4 xl:col-start-2 xl:row-start-1 border-r py-4 pt-5 md:border-r-0">
        {title}
      </div>
      <div className="flex font-display text-2xl xl:col-start-2 2xl:rtl:justify-end 2xl:col-start-3 2xl:row-start-1 2xl:gap-2 2xl:px-4 rtl:flex-row-reverse">
        <button
          className="cursor-pointer p-4 border-r 2xl:p-0 2xl:border-r-0 w-full 2xl:w-auto flex items-center justify-center"
          onClick={onPrevButtonClick}
          aria-label="Previous Slide"
        >
          <HiArrowLongLeft />
        </button>
        <button
          className="cursor-pointer p-4 ltr:border-r 2xl:p-0 2xl:ltr:border-r-0 w-full 2xl:w-auto flex items-center justify-center"
          onClick={onNextButtonClick}
          aria-label="Next Slide"
        >
          <HiArrowLongRight />
        </button>
      </div>
      <a
        href="#"
        className="px-4 uppercase items-center flex  text-sm lg:text-base md:gap-2 md:ltr:ml-auto md:rtl:mr-auto xl:col-start-2 xl:row-start-1 2xl:col-start-3"
      >
        <div className="hidden font-display text-3xl md:flex justify-center">+</div>
        <div>SHOP ALL</div>
      </a>
    </header>
  );
}
