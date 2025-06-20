import { useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import React from 'react';

const slides = [
  {
    id: 1,
    title: 'Omarieden Women Summery 2025 Delivery I',
    description:
      'Introducing the first delivery from Omarieden Women Summer 2025, designed for summer gateways and warm weather. This collection features lightweight fabrics, vibrant colors, and elegant silhouettes that embody the essence of summer fashion.',
    media: {
      type: 'video',
      src: 'https://res.cloudinary.com/eytyy/video/upload/v1750361644/fmnkcjtz1rvq7arg6dzu.mp4',
      poster: '/poster.jpg',
    },
  },
  {
    id: 2,
    title: 'Omarieden Women Spring 2025',
    description:
      'Explore transitional basics, spring-ready outwear, and occasionwear designed with an emphasis on texture',
    media: {
      type: 'video',
      src: 'https://res.cloudinary.com/eytyy/video/upload/v1750361676/tivmprok6uxza7gr7k3m.mp4',
      poster: '/poster.jpg',
    },
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
    <div className="aspect-square lg:aspect-video justify-center bg-black text-white relative border-b-black border-b dark:border-b-white">
      <div className="embla h-full relative">
        <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom h-full">
            {slides.map((slide, index) => (
              <Slide key={slide.id} slide={slide} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-1 font-display text-2xl absolute bottom-0 right-0 p-4 lg:p-8">
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
    <div className="flex flex-col items-center justify-center embla__slide [transform:_translate3d(0,0,0)] min-w-0 flex-[0_0_100%] h-full relative ">
      <div className="h-screen text-4xl font-display bg-[#111] w-full flex flex-col items-center justify-center  text-white/50">
        {slide.media.type === 'video' ? (
          <Video src={slide.media.src} poster={slide.media.poster} />
        ) : (
          <img src={slide.media.src} alt={slide.title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-4 lg:p-8 w-3/4  text-white ">
        <h2 className="text-2xl leading-[1.1] lg:text-4xl">{slide.title}</h2>
        <p className="mt-4 max-w-[60ch] text-sm lg:text-base">{slide.description}</p>
      </div>
    </div>
  );
}

const Video = ({ src, poster }: { src: string; poster?: string }) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.75 });

  React.useEffect(() => {
    if (inView && ref.current) {
      console.log('Video is in view, playing...');
      ref.current.play().catch((error) => console.error('Video play error:', error));
    } else if (ref.current) {
      console.log('Video is out of view, pausing...');
      ref.current.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      className="w-full h-full object-center object-cover absolute top-0 left-0"
    />
  );
};
