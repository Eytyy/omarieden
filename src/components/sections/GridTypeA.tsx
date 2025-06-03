import useEmblaCarousel from 'embla-carousel-react';
import ProductImagePlaceholder from '../ProductImagePlaceholder';

const items = [
  { id: 1, title: 'Marni' },
  { id: 2, title: 'Acni' },
  { id: 3, title: 'Loewe' },
];
export default function GridTypeA() {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    active: true,
    breakpoints: { '(min-width: 1024px)': { active: false } },
  });
  return (
    <section className="grid lg:grid-cols-4 border-b dark:border-b-white lg:min-h-[50vh]">
      <header className="p-4 lg:p-8 flex flex-col justify-end gap-2">
        <div>
          <h2 className="text-3xl uppercase">Brands Highlight of the Month</h2>
          <p>A curated selection of brands that are redefining the fashion scene.</p>
        </div>
        <a href="#" className="uppercase h-[36px] items-center flex gap-2">
          <div className="font-display text-3xl w-5 flex justify-center">+</div>
          <div>SHOP ALL BRANDS</div>
        </a>
      </header>
      <div className="col-span-3 embla__viewport overflow-hidden h-full" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom lg:grid lg:grid-cols-3 h-full">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }: { item: { id: number; title: string } }) {
  return (
    <div className="grid grid-rows-[1fr_min-content] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%]">
      <ProductImagePlaceholder />
      <div className="p-8">
        <p className="text-gray-400 uppercase">{item.title}</p>
      </div>
    </div>
  );
}
