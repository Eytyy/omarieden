import useEmblaCarousel from 'embla-carousel-react';
import products, { type Products } from '../../data/products';
import { cn } from '../../lib/utils';

export default function Editorial() {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    active: true,
    breakpoints: { '(min-width: 1024px)': { active: false } },
  });
  const cards = products.slice(0, 4);
  return (
    <section className="grid lg:grid-cols-4 border-b border-b-black dark:border-b-white lg:h-screen">
      <div className="lg:col-span-2 flex flex-col justify-end p-8 bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black h-full">
        <div className="relative aspect-square">
          <div className="absolute dark:bg-white bg-black rounded-full aspect-square w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-3xl text-white dark:text-black"></div>
        </div>
        <header>
          <a href="/" className="text-sm uppercase text-[#999] mb-1">
            Editorial
          </a>
          <h2 className="text-4xl">FOCUS ON: ACTIVE</h2>
          <a href="#" className="uppercase h-[36px] items-center flex gap-2">
            <div className="font-display text-3xl w-5 flex justify-center">+</div>
            <div>SHOP The Edit</div>
          </a>
        </header>
      </div>
      <div className="lg:col-span-2 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom lg:grid lg:grid-cols-2">
          {cards.map((product, i) => (
            <Card
              key={product.id}
              product={product}
              firstRow={i < 2} // true for first two cards
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ product, firstRow }: { product: Products[number]; firstRow: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col justify-end  lg:h-[50vh] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%]',
        firstRow ? 'lg:border-b' : ''
      )}
    >
      <div className="aspect-square flex flex-col justify-center items-center">
        <div className="bg-black dark:bg-white w-1/3 aspect-square rounded-full text-xl flex flex-col justify-center items-center text-white dark:text-black group-hover:scale-110 transition-transform duration-300"></div>
      </div>
      <div className="p-8">
        <p className="text-gray-400 uppercase">{product.designer}</p>
        <h2 className="uppercase">{product.name}</h2>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
