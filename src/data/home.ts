import type { EditorialSectionType } from '@/features/editorial';
import { editorialMixed } from '@/features/editorial/data';
import type { FeaturedBrandsSectionType } from '@/features/featured-brands';
import type { FeaturedCollectionsSectionType } from '@/features/featured-collections';
import { collections } from '@/features/featured-collections/data';
import type { SliderSectionType } from '@/features/hero-slider';
import { slides } from '@/features/hero-slider/data';
import type { CarouselSectionType } from '@/features/products-carousel';
import { products } from './products';
import brands from '@/features/featured-brands/data';

export const data: HomeDataPayload[] = [
  {
    _type: 'carousel',
    _id: 'carousel-women-1',
    title: {
      en: 'Womens New Arrivals',
      ar: 'وصل حديثًا - نساء',
    },
    products: products.wommen,
  },
  {
    _type: 'carousel',
    _id: 'carousel-men-1',
    title: {
      en: 'Mens New Arrivals',
      ar: 'وصل حديثًا - رجال',
    },
    products: products.men,
  },
  {
    _type: 'heroSlider',
    _id: 'slider',
    data: slides,
  },
  {
    _type: 'featuredCollections',
    _id: 'featured-collections',
    data: collections,
  },
  {
    _type: 'editorial',
    _id: 'editorial-focus-on-active',
    data: editorialMixed,
  },
  {
    _type: 'featuredBrands',
    _id: 'brands',
    data: brands,
  },
];

export type HomeDataPayload =
  | CarouselSectionType
  | SliderSectionType
  | FeaturedCollectionsSectionType
  | EditorialSectionType
  | FeaturedBrandsSectionType;
