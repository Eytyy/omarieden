import type { CarouselSectionType } from './Carousel';
import Carousel from './Carousel';
import type { EditorialSectionType } from './Editorial';
import Editorial from './Editorial';
import type { FeaturedCollectionsSectionType } from './FeaturedCollections';
import FeaturedCollections from './FeaturedCollections';
import type { HighlightsSectionType } from './Highlights';
import Highlights from './Highlights';
import Slider, { type SliderSectionType } from './Slider';

type SectionTypes =
  | CarouselSectionType
  | SliderSectionType
  | FeaturedCollectionsSectionType
  | EditorialSectionType
  | HighlightsSectionType;

export default function Section({ section }: { section: SectionTypes }) {
  switch (section._type) {
    case 'carousel':
      return <Carousel key={section._id} {...section} />;
    case 'slider':
      return <Slider key={section._id} {...section} />;
    case 'featuredCollections':
      return <FeaturedCollections key={section._id} {...section} />;
    case 'editorial':
      return <Editorial key={section._id} {...section} />;
    case 'highlights':
      return <Highlights key={section._id} {...section} />;
    default:
      return null;
  }
}
