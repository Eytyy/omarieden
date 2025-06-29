import { data as sections } from '@/data/home';

import Hero from '@/shared/ui/Hero';
import ProductsCarouselSection from '../products-carousel';
import HeroSliderSection from '../hero-slider';
import FeaturedCollectionSection from '../featured-collections';
import EditorialSection from '../editorial';
import FeaturedBrandsSection from '../featured-brands';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative">
        {sections.map((section) => {
          switch (section._type) {
            case 'carousel':
              return <ProductsCarouselSection key={section._id} {...section} />;
            case 'heroSlider':
              return <HeroSliderSection key={section._id} {...section} />;
            case 'featuredCollections':
              return <FeaturedCollectionSection key={section._id} {...section} />;
            case 'editorial':
              return <EditorialSection key={section._id} {...section} />;
            case 'featuredBrands':
              return <FeaturedBrandsSection key={section._id} {...section} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
}
