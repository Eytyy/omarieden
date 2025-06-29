import type { EmblaCarouselType } from 'embla-carousel';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import { cn } from '@/lib/utils';
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons';

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
        <HiArrowLongLeft />
      </button>
      <button
        className={cn(
          'cursor-pointer',
          format === 'carousel' ? 'border  p-4  border-b-0 border-r-0' : ''
        )}
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        <HiArrowLongRight />
      </button>
    </div>
  );
}
