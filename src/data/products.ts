const women_new = [
  {
    id: 1,
    name: 'Dana Down Jacket in Black',
    designer: 'Studio Nicholson',
    price: 'SAR 1,200.00',
    images: {
      default: 'women/jacket_cxivp4',
      hover: 'women/jacket-model_phu2kg',
    },
  },
  {
    id: 2,
    name: 'Blanca Dress in Milk',
    designer: 'Studio Nicholson',
    price: 'SAR 2,500.00',
    images: {
      default: 'women/dress2_lv6e5u',
      hover: 'women/dress2-model_r2nirh',
    },
  },
  {
    id: 3,
    name: 'Lise Linen Dress in Darkest Navy',
    designer: 'Studio Nicholson',
    price: 'SAR 850.00',
    images: {
      default: 'women/dress_infz8s',
      hover: 'women/dress-model_goio6h',
    },
  },
  {
    id: 4,
    name: 'Mae Skirt in Cream',
    designer: 'Studio Nicholson',
    price: 'SAR 1,700.00',
    images: {
      default: 'women/skirt_u6vsnj',
      hover: 'women/skirt-model_agtwjp',
    },
  },
  {
    id: 5,
    name: 'Acuna Tropical Wool Pant in Darkest Navy',
    designer: 'Studio Nicholson',
    price: 'SAR 950.00',
    images: {
      default: 'women/pants_rgijxz',
      hover: 'women/pants-model_nmjbps',
    },
  },
];

const menu_new = [
  {
    id: 1,
    name: 'Paolo Denim Pant in Indigo Wash',
    designer: 'Studio Nicholson',
    price: 'SAR 1,200.00',
    images: {
      default: 'men/image_5_kqwyxz',
      hover: 'men/image_4_koshod',
    },
  },
  {
    id: 2,
    name: 'Sanko Shirt in Milk',
    designer: 'Studio Nicholson',
    price: 'SAR 2,500.00',
    images: {
      default: 'men/shirt_jvkaqu',
      hover: 'men/shirt-model_wzcewf',
    },
  },
  {
    id: 3,
    name: 'Loft Down Jacket in Black',
    designer: 'Studio Nicholson',
    price: 'SAR 850.00',
    images: {
      default: 'men/jacket_lnjfl8',
      hover: 'men/jacket-model_io9sxy',
    },
  },
  {
    id: 4,
    name: 'Nopi Jacket in Darkest Navy',
    designer: 'Studio Nicholson',
    price: 'SAR 1,700.00',
    images: {
      default: 'men/jacket2-model_ckkvn6',
      hover: 'men/jacket2_hdgwoa',
    },
  },
  {
    id: 5,
    name: 'Denby Knit in Espresso Brown',
    designer: 'Studio Nicholson',
    price: 'SAR 950.00',
    images: {
      default: 'men/sweater_jdqivu',
      hover: 'men/sweater-model_ijugj3',
    },
  },
];

export type Product = {
  id: number;
  name: string;
  designer: string;
  price: string;
  images: {
    default: string;
    hover: string;
  };
};

export type Products = Product[];

export const products = {
  men: menu_new,
  wommen: women_new,
};
