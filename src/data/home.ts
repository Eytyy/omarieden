import type { CarouselSectionType } from '../components/sections/Carousel';
import type { EditorialSectionType } from '../components/sections/Editorial';
import type { FeaturedCollectionsSectionType } from '../components/sections/FeaturedCollections';
import type { HighlightsSectionType } from '../components/sections/Highlights';
import type { SliderSectionType } from '../components/sections/Slider';
import { collections } from './collections';
import { editorial_mix } from './editorial';
import highlights from './highlights';
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
    _type: 'slider',
    _id: 'slider',
    slides: slides,
  },
  {
    _type: 'featuredCollections',
    _id: 'featured-collections',
    collections: collections,
  },
  {
    _type: 'editorial',
    _id: 'editorial-focus-on-active',
    edit: editorial_mix,
  },
  {
    _type: 'highlights',
    _id: 'highlights',
    highlights: highlights,
  },
];

export type HomeDataPayload =
  | CarouselSectionType
  | SliderSectionType
  | FeaturedCollectionsSectionType
  | EditorialSectionType
  | HighlightsSectionType;
