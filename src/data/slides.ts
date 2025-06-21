export const slides = [
  {
    id: 1,
    title: {
      en: 'Omarieden Women Summery 2025 Delivery I',
      ar: 'أوماريدن - مجموعة النساء صيف 2025',
    },
    description: {
      en: 'Introducing the first delivery from Omarieden Women Summer 2025, designed for summer gateways and warm weather. This collection features lightweight fabrics, vibrant colors, and elegant silhouettes that embody the essence of summer fashion.',
      ar: 'تقديم أول مجموعة من أوماريدن للنساء لصيف 2025، مصممة للرحلات الصيفية والأجواء الدافئة. تتميز هذه المجموعة بأقمشة خفيفة الوزن، وألوان زاهية، وقصات أنيقة تجسد جوهر الموضة الصيفية.',
    },
    media: {
      type: 'video',
      src: 'https://res.cloudinary.com/eytyy/video/upload/v1750361644/fmnkcjtz1rvq7arg6dzu.mp4',
      poster: '/poster.jpg',
    },
  },
  {
    id: 2,
    title: {
      en: 'Omarieden Women Spring 2025',
      ar: 'أوماريدن - مجموعة النساء ربيع 2025',
    },
    description: {
      en: 'Explore transitional basics, spring-ready outwear, and occasionwear designed with an emphasis on texture',
      ar: 'استكشف الأساسيات الانتقالية، والملابس الخارجية المناسبة للربيع، وملابس المناسبات المصممة مع التركيز على الملمس.',
    },

    media: {
      type: 'video',
      src: 'https://res.cloudinary.com/eytyy/video/upload/v1750361676/tivmprok6uxza7gr7k3m.mp4',
      poster: '/poster.jpg',
    },
  },
];

export type SlideType = (typeof slides)[number];
