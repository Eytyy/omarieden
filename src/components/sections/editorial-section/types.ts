type Gender = 'men' | 'women';

export type EditorialProduct = {
  id: number;
  name: string;
  designer: {
    name: string;
    slug: string;
  };
  price: string;
  mainImage: string;
  slug: string;
};

interface EditorialVariant {
  audience: Gender;
  mainImage: string;
  products: EditorialProduct[];
}

export interface EditorialSectionData {
  slug: string;
  title: { en: string; ar: string };
  variants: EditorialVariant[];
}

export type EditorialSectionType = {
  _type: 'editorial';
  _id: string;
  data: EditorialSectionData;
};
