export type FeaturedBrandsSectionType = {
  _type: 'featuredBrands';
  _id: string;
  data: FeaturedBrandType[];
};

export type FeaturedBrandType = {
  id: number;
  title: string;
  mainImage: string;
  backImage: string;
  slug: string;
};
