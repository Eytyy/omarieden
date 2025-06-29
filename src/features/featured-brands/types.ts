export type FeaturedBrandsSectionType = {
  _type: 'featuredBrands';
  _id: string;
  data: FeaturedBrandType[];
  title: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
};

export type FeaturedBrandType = {
  id: number;
  title: string;
  mainImage: string;
  backImage: string;
  slug: string;
};
