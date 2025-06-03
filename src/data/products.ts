const products = [
  {
    id: 1,
    name: 'Classic Linen Dress',
    designer: 'Omarieden',
    price: 'SAR 1,200.00',
    image: '/images/products/linen-dress.jpg',
  },
  {
    id: 2,
    name: 'Silk Evening Gown',
    designer: 'Layla Couture',
    price: 'SAR 2,500.00',
    image: '/images/products/silk-gown.jpg',
  },
  {
    id: 3,
    name: 'Casual Denim Jacket',
    designer: 'Urban Threads',
    price: 'SAR 850.00',
    image: '/images/products/denim-jacket.jpg',
  },
  {
    id: 4,
    name: 'Embroidered Kaftan',
    designer: 'Desert Rose',
    price: 'SAR 1,700.00',
    image: '/images/products/kaftan.jpg',
  },
  {
    id: 5,
    name: 'Pleated Midi Skirt',
    designer: 'Modern Muse',
    price: 'SAR 950.00',
    image: '/images/products/midi-skirt.jpg',
  },
];

export type Product = (typeof products)[number];
export type Products = typeof products;
export default products;
