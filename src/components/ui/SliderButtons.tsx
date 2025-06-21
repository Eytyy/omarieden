import { cn } from '../../lib/utils';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import type { EmblaCarouselType } from 'embla-carousel';
import { HiArrowLongLeft, HiArrowLongRight, HiArrowLongUp, HiArrowLongDown } from 'react-icons/hi2';
type Props = {
  format?: 'slides' | 'carousel';
  direction?: 'vertical' | 'horizontal';
  className?: string;
  emblaApi: EmblaCarouselType | undefined;
};

export default function SliderButtons({
  className,
  format = 'carousel',
  direction = 'horizontal',
  emblaApi,
}: Props) {
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
          format === 'carousel' ? 'border  p-4 lg:p-8  border-b-0 border-r-0' : ''
        )}
        onClick={onPrevButtonClick}
        aria-label="Previous Slide"
      >
        {direction === 'horizontal' ? <HiArrowLongLeft /> : <HiArrowLongUp />}
      </button>
      <button
        className={cn(
          'cursor-pointer',
          format === 'carousel' ? 'border  p-4 lg:p-8 border-b-0 border-r-0' : ''
        )}
        onClick={onNextButtonClick}
        aria-label="Next Slide"
      >
        {direction === 'horizontal' ? <HiArrowLongRight /> : <HiArrowLongDown />}
      </button>
    </div>
  );
}
