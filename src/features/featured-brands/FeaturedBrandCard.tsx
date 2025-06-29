import { useState } from 'react';

import type { FeaturedBrandType } from './types';
import Image from '@/shared/ui/Image';

export default function FeaturedBrandCard(item: FeaturedBrandType) {
  const [selectedImage, setSelectedImage] = useState<'mainImage' | 'backImage'>('mainImage');
  const toggleImage = () => {
    setSelectedImage((prev) => (prev === 'mainImage' ? 'backImage' : 'mainImage'));
  };

  return (
    <div
      className="grid grid-rows-[1fr_min-content] group embla__slide [transform:_translate3d(0,0,0)] min-w-0 relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] 2xl:flex-[0_0_100%]"
      onMouseEnter={toggleImage}
      onClick={toggleImage}
      aria-label="View Next Featured Highlight Page"
    >
      <div className="relative w-full aspect-square lg:aspect-auto">
        <div className="[&_img]:object-contain [&_img]:w-full [&_img]:h-full absolute inset-4 lg:inset-8">
          <Image id={item[selectedImage]} />
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <a href={item.slug} className="text-sm lg:text-base uppercase hover:underline font-display">
          {item.title}
        </a>
      </div>
    </div>
  );
}
