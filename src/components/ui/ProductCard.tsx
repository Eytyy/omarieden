import { useState } from 'react';
import Image from './Image';
import type { Product } from '../../data/products';

export default function ProductCard({ designer, name, price, images, slug }: Product) {
  const [imageSide, setImageSide] = useState<'front' | 'back'>('front');
  const toggleImageSide = () => {
    setImageSide((prev) => (prev === 'front' ? 'back' : 'front'));
  };

  return (
    <div>
      <div className="flex justify-center items-center px-4 lg:px-8">
        <div className="w-full h-full justify-center items-center  relative">
          <div
            className="w-full h-full [&_img]:object-contain [&_img]:w-full [&_img]:h-full "
            onMouseEnter={toggleImageSide}
            onClick={toggleImageSide}
            aria-label="Product image"
          >
            {imageSide === 'front' ? <Image id={images.default} /> : <Image id={images.hover} />}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4 pb-8 lg:p-8">
        <a
          href={designer.slug}
          className="text-gray-400 hover:underline uppercase text-xs lg:text-sm"
        >
          {designer.name}
        </a>
        <a href={slug} className="group">
          <h2 className="uppercase font-display text-sm lg:text-base group-hover:underline leading-[1.1]">
            {name}
          </h2>
        </a>
        <p className="text-xs lg:text-sm">{price}</p>
      </div>
    </div>
  );
}
