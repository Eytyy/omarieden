import { collections, type CollectionType } from '../../data/collections';
import { useApp } from '../providers/useApp';
import Image from '../ui/Image';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function FeaturedCollections() {
  const { lang } = useApp();

  return (
    <section className="grid lg:grid-cols-2 lg:border-b border-b-black dark:border-b-white ">
      {collections.map((item, index) => (
        <FeaturedCollection key={index} collection={item} lang={lang} />
      ))}
    </section>
  );
}

function FeaturedCollection({
  collection,
  lang,
}: {
  collection: CollectionType;
  lang: 'en' | 'ar';
}) {
  const { title, subtitle, pages } = collection;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
  });
  const { onPrevButtonClick, onNextButtonClick, selectedIndex } = usePrevNextButtons(emblaApi);

  return (
    <div className="grid grid-rows-[1fr_min-content]  bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black lg:h-screen h-[calc(100vh-57px)]">
      <div className=" pt-20 px-4 lg:px-8 relative">
        <div className="relative w-full h-full">
          <CarouselControls
            onPrevButtonClick={onPrevButtonClick}
            onNextButtonClick={onNextButtonClick}
          />
          <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom h-full">
              {collection.pages.map((page, i) => (
                <Card image={page.image} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 pb-8 lg:p-8 relative">
        <header>
          <a href={pages[selectedIndex].slug} className="group">
            <h2 className="mb-1 text-2xl leading-[1.1] lg:text-4xl">{title[lang]}</h2>
            {subtitle && <p className="text-sm">{subtitle[lang]}</p>}
          </a>
        </header>
      </div>
    </div>
  );
}

const Card = ({ image }: { image: string }) => {
  return (
    <div className="embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%]">
      <div className="absolute top-0 w-full h-full object-contain [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
        <Image id={image} />
      </div>
    </div>
  );
};

const CarouselControls = ({
  onPrevButtonClick,
  onNextButtonClick,
}: {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}) => {
  return (
    <>
      <button
        className="cursor-pointer flex items-center justify-center absolute top-1/2 left-0 z-10 text-4xl "
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="cursor-pointer flex items-center justify-center absolute top-1/2 right-0 z-10 text-4xl"
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight />
      </button>
    </>
  );
};
