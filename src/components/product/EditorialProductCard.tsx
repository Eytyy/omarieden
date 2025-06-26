import type { Product } from '../../data/products';
import { ProductCardImage } from '../product/ProductCardImage';
import { ProductCardDetails } from './ProductCardDetails';

export default function EditorialProductCard({ product }: { product: Product }) {
  const { name, designer, price, mainImage, slug } = product;

  return (
    <div className="lg:h-[50vh] lg:grid lg:grid-rows-[1fr_min-content]">
      <div className="w-full relative px-4 lg:px-8">
        <ProductCardImage image={mainImage} layout="editorial" />
      </div>
      <ProductCardDetails designer={designer} name={name} price={price} slug={slug} />
    </div>
  );
}
