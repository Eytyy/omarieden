import type { SlideType } from './types';
import VideoSlide from './VideoSlide';

function Slide({ slide, lang }: { slide: SlideType; index: number; lang: 'en' | 'ar' }) {
  return (
    <div className="flex flex-col items-center justify-center embla__slide [transform:_translate3d(0,0,0)] min-w-0 flex-[0_0_100%] h-full relative ">
      <div className="h-screen text-4xl font-display bg-[#111] w-full flex flex-col items-center justify-center  text-white/50">
        {slide.media.type === 'video' ? (
          <VideoSlide src={slide.media.src} poster={slide.media.poster} />
        ) : (
          <img
            src={slide.media.src}
            alt={slide.title[lang]}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="absolute bottom-0 rtl:right-0 ltr:left-0 p-4 lg:p-8 w-3/4  text-white ">
        <h2 className="text-2xl leading-[1.1] lg:text-4xl rtl:lg:text-5xl rtl:text-3xl">
          {slide.title[lang]}
        </h2>
        <p className="mt-4 max-w-[60ch] text-sm rtl:text-base lg:text-base rtl:lg:text-lg">
          {slide.description[lang]}
        </p>
      </div>
    </div>
  );
}

export default Slide;
