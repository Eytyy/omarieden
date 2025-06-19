const women_new = [
  {
    id: 1,
    name: 'Dana Down Jacket in Black',
    designer: 'Studio Nicholson',
    price: 'SAR 1,200.00',
    images: {
      default: '/women/jacket.png',
      hover: '/women/jacket-model.png',
    },
  },
  {
    id: 2,
    name: 'Blanca Dress in Milk',
    designer: 'Studio Nicholson',
    price: 'SAR 2,500.00',
    images: {
      default: '/women/dress2.png',
      hover: '/women/dress2-model.png',
    },
  },
  {
    id: 3,
    name: 'Lise Linen Dress in Darkest Navy',
    designer: 'Studio Nicholson',
    price: 'SAR 850.00',
    images: {
      default: '/women/dress.png',
      hover: '/women/dress-model.png',
    },
  },
  {
    id: 4,
    name: 'Mae Skirt in Cream',
    designer: 'Studio Nicholson',
    price: 'SAR 1,700.00',
    images: {
      default: '/women/skirt.png',
      hover: '/women/skirt-model.png',
    },
  },
  {
    id: 5,
    name: 'Acuna Tropical Wool Pant in Darkest Navy',
    designer: 'Studio Nicholson',
    price: 'SAR 950.00',
    images: {
      default: '/women/pants.png',
      hover: '/women/pants-model.png',
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
      default: '/men/pants.png',
      hover: '/men/pants-model.png',
    },
  },
  {
    id: 2,
    name: 'Sanko Shirt in Milk',
    designer: 'Studio Nicholson',
    price: 'SAR 2,500.00',
    images: {
      default: '/men/shirt.png',
      hover: '/men/shirt-model.png',
    },
  },
  {
    id: 3,
    name: 'Loft Down Jacket in Black',
    designer: 'Studio Nicholson',
    price: 'SAR 850.00',
    images: {
      default: '/men/jacket.png',
      hover: '/men/jacket-model.png',
    },
  },
  {
    id: 4,
    name: 'Nopi Jacket in Darkest Navy',
    designer: 'Studio Nicholson',
    price: 'SAR 1,700.00',
    images: {
      default: '/men/jacket2-model.png',
      hover: '/men/jacket2.png',
    },
  },
  {
    id: 5,
    name: 'Denby Knit in Espresso Brown',
    designer: 'Studio Nicholson',
    price: 'SAR 950.00',
    images: {
      default: '/men/sweater.png',
      hover: '/men/sweater-model.png',
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
