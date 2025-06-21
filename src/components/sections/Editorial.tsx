import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '../../lib/utils';
import Image from '../ui/Image';
import { useLang } from '../providers/useLang';

const products = [
  {
    id: 1,
    name: 'Ultra jacket in technical shell',
    designer: 'Loewe x On',
    price: 'SAR 850.00',
    image: 'editorial/editorial-1_aihupa',
  },
  {
    id: 2,
    name: 'Soft bra in technical jersey',
    designer: 'Loewe x On',
    price: 'SAR 1,700.00',
    image: 'editorial/editorial-2_lomfwi',
  },
  {
    id: 3,
    name: 'Active tights in technical jersey',
    designer: 'Loewe x On',
    price: 'SAR 2,500.00',
    image: 'editorial/editorial-3_kjdmzv',
  },
  {
    id: 4,
    name: 'Cloudventure 2.0 sneaker',
    designer: 'Loewe x On',
    price: 'SAR 1,200.00',
    image: 'editorial/editorial-4_c7ox7x',
  },
];

export default function Editorial() {
  const { lang } = useLang();
  const [emblaRef] = useEmblaCarousel({
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
    <section className="lg:grid lg:grid-cols-[2fr_1fr] 2xl:grid-cols-4 border-b border-b-black dark:border-b-white">
      <Edit lang={lang} />
      <div className="2xl:col-span-2 overflow-hidden" ref={emblaRef}>
        <div className="flex lg:flex-col lg:h-screen touch-pan-y touch-pinch-zoom 2xl:grid 2xl:grid-cols-2 2xl:h-full">
          {products.map((product, i) => (
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
        <h2 className="text-2xl leading-[1.1] lg:text-3xl ltr:font-display rtl:font-display-ar">
          {lang == 'en' ? 'FOCUS ON: ACTIVE' : 'التركيز على: النشاط'}
        </h2>
        <a href="#" className="uppercase h-[36px] items-center flex gap-2 text-sm">
          <div className="font-display text-3xl w-5 flex justify-center">+</div>
          <div>{lang == 'en' ? 'SHOP The Edit' : 'تسوق المجلة التحريرية'}</div>
        </a>
      </header>
    </div>
  );
}

function Card({ product, firstRow }: { product: (typeof products)[0]; firstRow: boolean }) {
  return (
    <div
      className={cn(
        'grid grid-rows-[3fr_1fr] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_50%] 2xl:flex[0_0_100%] lg:h-[50vh]',
        firstRow ? 'lg:border-b 2xl:border-b' : 'lg:border-b 2xl:border-b-0'
      )}
    >
      <div className="flex justify-center items-center px-4 lg:px-8 lg:pt-20 h-full relative">
        <div className="w-full h-full  absolute top-0 left-0 [&_img]:object-contain [&_img]:w-full [&_img]:h-full ">
          <Image id={product.image} />
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:gap-0 p-4 lg:p-8">
        <p className="text-gray-400 uppercase text-xs lg:text-sm">{product.designer}</p>
        <h2 className="uppercase text-sm lg:text-base ">{product.name}</h2>
        <p className="text-xs lg:text-sm">{product.price}</p>
      </div>
    </div>
  );
}
