export const collections = [
  {
    title: {
      en: 'The Marni Summer Collection',
      ar: 'مجموعة مارني لصيف 2025',
    },
    subtitle: {
      en: 'A celebration of the season’s most vibrant pieces, from the iconic Hammock bag to the new Puzzle bag in a limited-edition color',
      ar: 'احتفال بأكثر قطع الموسم حيوية، من حقيبة هاموك الأيقونية إلى حقيبة بزل الجديدة بلون محدود الإصدار',
    },
    pages: [
      { image: 'collections/marni_gpelj1', slug: '/womens/collections/marni' },
      { image: 'collections/marni-hover_syuxzh', slug: '/mens/collections/marni' },
    ],
  },
  {
    title: {
      en: 'The Acne Studios Summer Collection',
      ar: 'مجموعة أكني ستوديوز لصيف 2025',
    },
    subtitle: {
      en: 'A celebration of the season’s most vibrant pieces, from the iconic Hammock bag to the new Puzzle bag in a limited-edition color',
      ar: 'احتفال بأكثر قطع الموسم حيوية، من حقيبة هاموك الأيقونية إلى حقيبة بزل الجديدة بلون محدود الإصدار',
    },
    pages: [
      { image: 'collections/acni_zw9tza', slug: '/mens/collections/acne' },
      { image: 'collections/acni-hover_d7izi8', slug: '/womens/collections/acne' },
    ],
  },
];

export type CollectionType = {
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  pages: {
    image: string;
    slug: string;
  }[];
};
