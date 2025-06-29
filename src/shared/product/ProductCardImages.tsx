import { useState } from 'react';
import Image from '../ui/Image';

export const ProductCardImages = ({
  frontImage,
  backImage,
}: {
  frontImage: string;
  backImage: string;
}) => {
  const [imageSide, setImageSide] = useState<'front' | 'back'>('front');
  const toggleImageSide = () => {
    setImageSide((prev) => (prev === 'front' ? 'back' : 'front'));
  };

  return (
    <div
      className="w-full h-full [&_img]:object-contain [&_img]:w-full [&_img]:h-full "
      onMouseEnter={toggleImageSide}
      onClick={toggleImageSide}
      aria-label="Product image"
    >
      {imageSide === 'front' ? <Image id={frontImage} /> : <Image id={backImage} />}
    </div>
  );
};
