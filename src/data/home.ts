import type { EditorialSectionType } from '../components/sections/editorial-section/types';
import type { FeaturedBrandsSectionType } from '../components/sections/featured-brands';
import type { FeaturedCollectionsSectionType } from '../components/sections/featured-collections/types';
import type { SliderSectionType } from '../components/sections/hero-slider/types';
import type { CarouselSectionType } from '../components/sections/products-carousel';
import { collections } from './collections';
import { editorialMixed } from './editorial';
import brands from './featured-brands';
import { products } from './products';
import { slides } from './slides';

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
    collections: collections,
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
