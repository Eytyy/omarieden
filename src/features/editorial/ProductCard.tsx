import { ProductCardDetails } from '@/shared/product/ProductCardDetails';
import { ProductCardImage } from '@/shared/product/ProductCardImage';
import type { Product } from '../products-carousel';

export default function ProductCard({ product }: { product: Product }) {
  const { name, designer, price, mainImage, slug } = product;

  return (
    <div className="lg:h-[50vh] lg:grid lg:grid-rows-[1fr_min-content] pt-4 lg:pt-8">
      <div className="w-full relative px-4 lg:px-8">
        <ProductCardImage image={mainImage} layout="editorial" />
      </div>
      <ProductCardDetails designer={designer} name={name} price={price} slug={slug} />
    </div>
  );
}
