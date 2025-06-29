export type CarouselSectionType = {
  _type: 'carousel';
  _id: string;
  title: {
    en: string;
    ar: string;
  };
  products: Products;
};

export type Designer = {
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  name: string;
  designer: Designer;
  price: string;
  mainImage: string;
  backImage?: string;
  slug: string;
};

export type Products = Product[];
