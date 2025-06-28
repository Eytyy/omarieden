export const editorial_mix = {
  format: 'mix',
  title: {
    en: 'FOCUS ON: ACTIVE',
    ar: 'التركيز على: النشاط',
  },
  slug: '/editorial/focus-on-active',
  men: {
    mainImage: 'editorial/editorial-outfit-men',
    slug: '/editorial/focus-on-active',
    products: [
      {
        id: 1,
        name: 'Ultra jacket in technical shell',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 850.00',
        mainImage: 'editorial/editorial-1-men',
        slug: '/products/ultra-jacket-in-technical-shell',
      },
      {
        id: 2,
        name: 'Soft bra in technical jersey',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 1,700.00',
        mainImage: 'editorial/editorial-2-men',
        slug: '/products/soft-bra-in-technical-jersey',
      },
      {
        id: 3,
        name: 'Active tights in technical jersey',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 2,500.00',
        mainImage: 'editorial/editorial-3-men',
        slug: '/products/active-tights-in-technical-jersey',
      },
      {
        id: 4,
        name: 'Cloudventure 2.0 sneaker',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 1,200.00',
        mainImage: 'editorial/editorial-4-men',
        slug: '/products/cloudventure-2-0-sneaker',
      },
    ],
  },
  women: {
    mainImage: 'editorial/editorial-outfit_zcjqge',
    products: [
      {
        id: 1,
        name: 'Ultra jacket in technical shell',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 850.00',
        mainImage: 'editorial/editorial-1_aihupa',
        slug: '/products/ultra-jacket-in-technical-shell',
      },
      {
        id: 2,
        name: 'Soft bra in technical jersey',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 1,700.00',
        mainImage: 'editorial/editorial-2_lomfwi',
        slug: '/products/soft-bra-in-technical-jersey',
      },
      {
        id: 3,
        name: 'Active tights in technical jersey',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 2,500.00',
        mainImage: 'editorial/editorial-3_kjdmzv',
        slug: '/products/active-tights-in-technical-jersey',
      },
      {
        id: 4,
        name: 'Cloudventure 2.0 sneaker',
        designer: {
          name: 'Loewe x On',
          slug: '/designers/loewe-x-on',
        },
        price: 'SAR 1,200.00',
        mainImage: 'editorial/editorial-4_c7ox7x',
        slug: '/products/cloudventure-2-0-sneaker',
      },
    ],
  },
};

export const editorial_men = {
  format: 'men',
  title: editorial_mix.title,
  slug: '/editorial/focus-on-active-men',
  mainImage: editorial_mix.men.mainImage,
  products: editorial_mix.men.products,
} as const;

export const editorial_women = {
  format: 'women',
  title: editorial_mix.title,
  slug: '/editorial/focus-on-active-women',
  mainImage: editorial_mix.women.mainImage,
  products: editorial_mix.women.products,
} as const;

export type MixedEditorialType = typeof editorial_mix;
export type SingleEditorialType = typeof editorial_men | typeof editorial_women;

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
