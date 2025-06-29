import { cn } from '../../lib/utils';
import Image from '../ui/Image';

export const ProductCardImage = ({
  image,
  layout = 'default',
}: {
  image: string;
  layout?: 'editorial' | 'default';
}) => {
  return (
    <div
      className={cn(
        '[&_img]:object-contain [&_img]:w-full [&_img]:h-full h-full w-full',
        layout === 'editorial' &&
          'lg:absolute lg:h-full lg:w-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2'
      )}
      aria-label="Product image"
    >
      <Image id={image} />
    </div>
  );
};
