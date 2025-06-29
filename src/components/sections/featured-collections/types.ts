export type CollectionType = {
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  mainImage: string;
  backImage: string;
  slug: string;
};

export type FeaturedCollectionsSectionType = {
  _type: 'featuredCollections';
  _id: string;
  collections: CollectionType[];
};
