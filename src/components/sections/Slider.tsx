import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import { FaRegImage } from 'react-icons/fa6';

const slides = [
  {
    id: 1,
    title: 'Omarieden Women Summery 2025 Delivery I',
    description:
      'Introducing the first delivery from Omarieden Women Summer 2025, designed for summer gateways and warm weather. This collection features lightweight fabrics, vibrant colors, and elegant silhouettes that embody the essence of summer fashion.',
  },
  {
    id: 2,
    title: 'Omarieden Women Spring 2025',
    description:
      'Explore transitional basics, spring-ready outwear, and occasionwear designed with an emphasis on texture',
  },
  {
    id: 3,
    title: 'Omarieden Women Spring Lounge 2025',
    description:
      'Lightweight layers designed with Omarieden-branded mesh, sleek modal jersey, and brushed knit blends.',
  },
];
export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="h-screen justify-center bg-black text-white relative border-b-black border-b dark:border-b-white">
      <div className="embla h-full relative">
        <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom h-full">
            {slides.map((slide, index) => (
              <Slide key={slide.id} slide={slide} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-1 font-display text-2xl absolute bottom-8 right-8">
        <button className="cursor-pointer" onClick={onPrevButtonClick} aria-label="Previous Slide">
          &larr;
        </button>
        <button className="cursor-pointer" onClick={onNextButtonClick} aria-label="Next Slide">
          &rarr;
        </button>
      </div>
    </div>
  );
}

function Slide({ slide }: { slide: (typeof slides)[number]; index: number }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#111] text-white  embla__slide [transform:_translate3d(0,0,0)] min-w-0  flex-[0_0_100%] h-full relative ">
      <div className="text-4xl font-display absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center  hover:scale-110 ">
        <FaRegImage />
      </div>

      <div className="absolute bottom-8 left-8 w-3/4">
        <h2 className="text-4xl">{slide.title}</h2>
        <p className="mt-4 max-w-[60ch]">{slide.description}</p>
      </div>
    </div>
  );
}
