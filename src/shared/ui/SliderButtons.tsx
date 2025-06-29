import type { EmblaCarouselType } from 'embla-carousel';

import { cn } from '@/lib/utils';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

type Props = {
  format?: 'slides' | 'carousel';
  className?: string;
  emblaApi: EmblaCarouselType | undefined;
};

export default function SliderButtons({ className, format = 'carousel', emblaApi }: Props) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <div
      className={cn(
        'flex font-display text-2xl',
        format === 'carousel' ? 'flex-col-reverse' : 'rtl:flex-row-reverse gap-1 ',
        className
      )}
    >
      <button
        className={cn(
          'cursor-pointer',
          format === 'carousel' ? 'border  p-4  border-b-0 border-r-0' : ''
        )}
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className={cn(
          'cursor-pointer',
          format === 'carousel' ? 'border  p-4  border-b-0 border-r-0' : ''
        )}
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
