import type { Product } from '../../data/products';

export const ProductCardDetails = ({
  designer,
  name,
  price,
  slug,
}: Pick<Product, 'designer' | 'name' | 'price' | 'slug'>) => {
  return (
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
  );
};
