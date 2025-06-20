import useEmblaCarousel from 'embla-carousel-react';
import { type Products } from '../../data/products';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import ProductCard from '../ui/ProductCard';
import { useLang } from '../providers/LangProvider';

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
    <header className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 text-sm lg:text-lg py-4 pt-8">
      <div className="uppercase opacity-50 dark:opacity-80 leading-[1.2] flex items-center px-4 xl:col-start-2 xl:row-start-1">
        {title}
      </div>
      <div className="flex gap-1 font-display text-2xl px-4 justify-end xl:col-start-2 lg:justify-start 2xl:col-start-3 2xl:row-start-1">
        <button className="cursor-pointer" onClick={onPrevButtonClick} aria-label="Previous Slide">
          &larr;
        </button>
        <button className="cursor-pointer" onClick={onNextButtonClick} aria-label="Next Slide">
          &rarr;
        </button>
      </div>
      <a
        href="#"
        className="uppercase px-4 items-center flex gap-1 text-sm lg:text-base lg:gap-2 md:ltr:ml-auto md:rtl:mr-auto xl:col-start-2 xl:row-start-1 2xl:col-start-3"
      >
        <div className="font-display text-2xl lg:text-3xl w-5 lflex justify-center">+</div>
        <div>SHOP ALL</div>
      </a>
    </header>
  );
}
