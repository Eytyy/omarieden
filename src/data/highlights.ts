const highlights = [
  {
    id: 1,
    title: 'Marni',
    mainImage: 'brands/marni-men',
    backImage: 'brands/marni-women',
    slug: '/brands/marni',
  },
  {
    id: 3,
    title: 'Loewe',
    mainImage: 'brands/loewe-men',
    backImage: 'brands/loewe-women',
    slug: '/brands/loewe',
  },
  {
    id: 2,
    title: 'Acne',
    mainImage: 'brands/acne-men',
    backImage: 'brands/acne-women',
    slug: '/brands/acne',
  },
];

export type HighlightType = {
  id: number;
  title: string;
  mainImage: string;
  backImage: string;
  slug: string;
};

export default highlights;
