export const editorial = [
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

export type EditorialProduct = (typeof editorial)[number];
