import type { Product } from '../../data/products';
import { ProductCardImages } from '../product/ProductCardImages';
import { ProductCardImage } from '../product/ProductCardImage';
import { ProductCardDetails } from './ProductCardDetails';

export default function ProductCard({ product }: { product: Product }) {
  const { name, designer, price, mainImage, backImage, slug } = product;
  const hasFrontAndBackImages = mainImage && backImage;

  return (
    <div>
      <div className="w-full relative px-4 lg:px-8 h-full">
        {hasFrontAndBackImages ? (
          <ProductCardImages frontImage={mainImage} backImage={backImage} />
        ) : (
          <ProductCardImage image={mainImage} />
        )}
      </div>
      <ProductCardDetails designer={designer} name={name} price={price} slug={slug} />
    </div>
  );
}
