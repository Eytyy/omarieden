const men_products = [
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
];

const women_products = [
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
];

export const editorialMen = {
  slug: '/editorial/focus-on-active-men',
  title: {
    en: 'FOCUS ON: ACTIVE',
    ar: 'التركيز على: النشاط',
  },
  variants: [
    { audience: 'men', mainImage: 'editorial/editorial-outfit-men', products: men_products },
  ],
};

export const editorialWomen = {
  slug: '/editorial/focus-on-active-men',
  title: {
    en: 'FOCUS ON: ACTIVE',
    ar: 'التركيز على: النشاط',
  },
  variants: [
    {
      audience: 'men',
      mainImage: 'editorial/editorial-outfit_zcjqge',
      products: women_products,
    },
  ],
};

export const editorialMixed = {
  slug: '/editorial/focus-on-active',
  title: {
    en: 'FOCUS ON: ACTIVE',
    ar: 'التركيز على: النشاط',
  },
  variants: [
    {
      audience: 'women',
      mainImage: 'editorial/editorial-outfit_zcjqge',
      products: women_products,
    },
    { audience: 'men', mainImage: 'editorial/editorial-outfit-men', products: men_products },
  ],
};
