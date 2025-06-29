import type { Product } from '@/types';

export type CarouselSectionType = {
  _type: 'carousel';
  _id: string;
  title: {
    en: string;
    ar: string;
  };
  products: Products;
};

export type Products = Product[];
