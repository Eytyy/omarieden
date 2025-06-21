export const editorial = [
  {
    id: 1,
    name: {
      en: 'Ultra jacket in technical shell',
      ar: 'جاكيت ألترا من قماش خارجي تقني',
    },
    designer: 'Loewe x On',
    price: 'SAR 850.00',
    image: 'editorial/editorial-1_aihupa',
  },
  {
    id: 2,
    name: {
      en: 'Soft bra in technical jersey',
      ar: 'حمالة صدر ناعمة من قماش تقني',
    },
    designer: 'Loewe x On',
    price: 'SAR 1,700.00',
    image: 'editorial/editorial-2_lomfwi',
  },
  {
    id: 3,
    name: {
      en: 'Active tights in technical jersey',
      ar: 'ليغنز رياضي من قماش تقني',
    },
    designer: 'Loewe x On',
    price: 'SAR 2,500.00',
    image: 'editorial/editorial-3_kjdmzv',
  },
  {
    id: 4,
    name: {
      en: 'Cloudventure 2.0 sneaker',
      ar: 'حذاء Cloudventure 2.0',
    },
    designer: 'Loewe x On',
    price: 'SAR 1,200.00',
    image: 'editorial/editorial-4_c7ox7x',
  },
];

export type EditorialProduct = (typeof editorial)[number];
