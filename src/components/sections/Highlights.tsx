import useEmblaCarousel from 'embla-carousel-react';
import Image from '../ui/Image';
import { useLang } from '../providers/LangProvider';

const items = [
  {
    id: 1,
    title: 'Marni',
    images: { default: 'brands/marni-m_ypj0vx', hover: 'brands/marni-w_ioaw5g' },
  },
  {
    id: 3,
    title: 'Loewe',
    images: { default: 'brands/loewe-w_gqerho', hover: 'brands/loewe-m_uim7is' },
  },
  {
    id: 2,
    title: 'Acne',
    images: { default: 'brands/acne-m_ecrahp', hover: 'brands/acne-w_djldez' },
  },
];

export default function Highlights() {
  const { lang } = useLang();
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
    active: true,
    breakpoints: { '(min-width: 1536px)': { active: false } },
    direction: lang === 'ar' ? 'rtl' : 'ltr',
  });
  return (
    <section className="grid md:grid-cols-3 2xl:grid-cols-4 border-b dark:border-b-white bg-white dark:bg-black md:bg-transparent lg:dark:bg-transparent lg:min-h-[75vh] lg:pt-20">
      <header className="p-4 py-8 lg:p-8 flex flex-col md:justify-end gap-1 md:gap-2 bg-white dark:bg-black md:ltr:border-r md:rtl:border-l">
        <div>
          <h2 className="text-2xl leading-[1.1] lg:text-3xl uppercase">
            {lang == 'en' ? 'Brands Highlight of the Month' : 'أبرز العلامات التجارية لهذا الشهر'}
          </h2>
          <p className="leading-[1.3] text-sm lg:base">
            {lang == 'en'
              ? 'A curated selection of brands that are redefining the fashion scene.'
              : 'مجموعة مختارة من العلامات التجارية التي تعيد تعريف مشهد الموضة.'}
          </p>
        </div>
      </header>
      <div
        className="md:col-span-2 2xl:col-span-3 embla__viewport overflow-hidden h-full"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-3 h-full">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
}: {
  item: {
    id: number;
    title: string;
    images: {
      default: string;
      hover: string;
    };
  };
}) {
  return (
    <div className="grid grid-rows-[1fr_min-content] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] 2xl:flex-[0_0_100%]">
      <div className="group relative w-full aspect-square lg:aspect-auto">
        <div className="[&_img]:object-contain [&_img]:w-full [&_img]:h-full absolute inset-4 lg:inset-8 group-hover:opacity-0 transition-opacity duration-300">
          <Image id={item.images.default} />
        </div>
        <div className="absolute inset-4 lg:inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
          <Image id={item.images.hover} />
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <p className="text-sm lg:text-base text-gray-400 uppercase">{item.title}</p>
      </div>
    </div>
  );
}
