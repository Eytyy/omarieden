const highlights = [
  {
    id: 1,
    title: 'Marni',
    pages: [
      { image: 'brands/marni-men', slug: '/womens/brands/marni' },
      { image: 'brands/marni-women', slug: '/mens/brands/marni' },
    ],
  },
  {
    id: 3,
    title: 'Loewe',
    pages: [
      { image: 'brands/loewe-men', slug: '/womens/brands/loewe' },
      { image: 'brands/loewe-women', slug: '/mens/brands/loewe' },
    ],
  },
  {
    id: 2,
    title: 'Acne',
    pages: [
      { image: 'brands/acne-men', slug: '/womens/brands/acne' },
      { image: 'brands/acne-women', slug: '/mens/brands/acne' },
    ],
  },
];

export type HighlightType = {
  id: number;
  title: string;
  pages: {
    image: string;
    slug: string;
  }[];
};

export default highlights;
