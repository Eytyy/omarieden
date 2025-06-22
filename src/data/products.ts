const women_new = [
  {
    id: 1,
    name: 'Dana Down Jacket in Black',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 1,200.00',
    images: {
      default: 'women/jacket_cxivp4',
      hover: 'women/jacket-model_phu2kg',
    },
    slug: '/womens/dana-down-jacket',
  },
  {
    id: 2,
    name: 'Blanca Dress in Milk',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 2,500.00',
    images: {
      default: 'women/dress2_lv6e5u',
      hover: 'women/dress2-model_r2nirh',
    },
    slug: '/womens/blanca-dress',
  },
  {
    id: 3,
    name: 'Lise Linen Dress in Darkest Navy',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 850.00',
    images: {
      default: 'women/dress_infz8s',
      hover: 'women/dress-model_goio6h',
    },
    slug: '/womens/lise-linen-dress',
  },
  {
    id: 4,
    name: 'Mae Skirt in Cream',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 1,700.00',
    images: {
      default: 'women/skirt_u6vsnj',
      hover: 'women/skirt-model_agtwjp',
    },
    slug: '/womens/mae-skirt',
  },
  {
    id: 5,
    name: 'Acuna Tropical Wool Pant in Darkest Navy',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 950.00',
    images: {
      default: 'women/pants_rgijxz',
      hover: 'women/pants-model_nmjbps',
    },
    slug: '/womens/acuna-tropical-wool-pant',
  },
];

const menu_new = [
  {
    id: 1,
    name: 'Paolo Denim Pant in Indigo Wash',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 1,200.00',
    images: {
      default: 'men/image_5_kqwyxz',
      hover: 'men/image_4_koshod',
    },
    slug: '/mens/paolo-denim-pant',
  },
  {
    id: 2,
    name: 'Sanko Shirt in Milk',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 2,500.00',
    images: {
      default: 'men/shirt_jvkaqu',
      hover: 'men/shirt-model_wzcewf',
    },
    slug: '/mens/sanko-shirt',
  },
  {
    id: 3,
    name: 'Loft Down Jacket in Black',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 850.00',
    images: {
      default: 'men/jacket_lnjfl8',
      hover: 'men/jacket-model_io9sxy',
    },
    slug: '/mens/loft-down-jacket',
  },
  {
    id: 4,
    name: 'Nopi Jacket in Darkest Navy',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 1,700.00',
    images: {
      default: 'men/jacket2-model_ckkvn6',
      hover: 'men/jacket2_hdgwoa',
    },
    slug: '/mens/nopi-jacket',
  },
  {
    id: 5,
    name: 'Denby Knit in Espresso Brown',
    designer: { name: 'Studio Nicholson', slug: '/designers/studio-nicholson' },
    price: 'SAR 950.00',
    images: {
      default: 'men/sweater_jdqivu',
      hover: 'men/sweater-model_ijugj3',
    },
    slug: '/mens/denby-knit',
  },
];

export type Designer = {
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  name: string;
  designer: Designer;
  price: string;
  images: {
    default: string;
    hover: string;
  };
  slug: string;
};

export type Products = Product[];

export const products = {
  men: menu_new,
  wommen: women_new,
};
