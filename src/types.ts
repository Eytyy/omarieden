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
