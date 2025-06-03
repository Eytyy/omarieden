import useEmblaCarousel from 'embla-carousel-react';
import products, { type Products } from '../../data/products';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import ProductImagePlaceholder from '../ProductImagePlaceholder';

export default function Carousel({ title }: { title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="border-b dark:border-b-white ">
      <header className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-lg p-4 lg:p-0">
        <div className="empty hidden lg:block" />
        <div className="lg:p-8 flex justify-between">
          <div className="uppercase opacity-50 dark:opacity-80 h-[36px] flex items-center">
            {title}
          </div>
        </div>
        <div className="lg:p-8 flex justify-between">
          <div className="flex gap-1 font-display text-2xl">
            <button
              className="cursor-pointer"
              onClick={onPrevButtonClick}
              aria-label="Previous Slide"
            >
              &larr;
            </button>
            <button className="cursor-pointer" onClick={onNextButtonClick} aria-label="Next Slide">
              &rarr;
            </button>
          </div>
          <a href="#" className="uppercase h-[36px]  items-center flex gap-2">
            <div className="font-display text-3xl w-5 flex justify-center">+</div>
            <div>SHOP ALL</div>
          </a>
        </div>
        <div className="empty hidden lg:block" />
      </header>

      <div className="embla h-full relative">
        <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ product }: { product: Products[number] }) {
  return (
    <div className="embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] 2xl:flex-[0_0_25%] group">
      <div className="flex flex-col justify-end">
        <div className="aspect-square flex justify-center items-center ">
          <ProductImagePlaceholder />
        </div>
        <div className="p-4 lg:p-8">
          <p className="text-gray-400 uppercase">{product.designer}</p>
          <h2 className="uppercase">{product.name}</h2>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}
