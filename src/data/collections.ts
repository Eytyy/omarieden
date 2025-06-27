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
    mainImage: 'collections/marni_gpelj1',
    backImage: 'collections/marni-hover_syuxzh',
    slug: '/collections/marni',
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
    mainImage: 'collections/acni_zw9tza',
    backImage: 'collections/acni-hover_d7izi8',
    slug: '/collections/acne',
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
  mainImage: string;
  backImage: string;
  slug: string;
};
