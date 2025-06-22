import { useState } from 'react';
import Image from './Image';

export default function ProductCard({
  designer,
  name,
  price,
  images,
}: {
  designer: string;
  name: string;
  price: string;
  images: {
    default: string;
    hover: string;
  };
}) {
  const [imageSide, setImageSide] = useState<'front' | 'back'>('front');

  return (
    <div>
      <div className="flex justify-center items-center px-4 lg:px-8">
        <div className="w-full h-full justify-center items-center  relative">
          <div
            className="w-full h-full [&_img]:object-contain [&_img]:w-full [&_img]:h-full "
            onMouseEnter={() => setImageSide('back')}
            onClick={() => setImageSide((prev) => (prev === 'front' ? 'back' : 'front'))}
            aria-label="Product image"
          >
            {imageSide === 'front' ? <Image id={images.default} /> : <Image id={images.hover} />}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:gap-0 p-4 pb-8 lg:p-8">
        <p className="text-gray-400 uppercase text-xs lg:text-sm">{designer}</p>
        <h2 className="uppercase text-sm lg:text-base ">{name}</h2>
        <p className="text-xs lg:text-sm">{price}</p>
      </div>
    </div>
  );
}
