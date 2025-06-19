import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const Image = ({ id }: { id: string }) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'eytyy' } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(id)
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto');

  return <AdvancedImage cldImg={img} />;
};
export default Image;
