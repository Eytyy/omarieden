export type MediaType = 'image' | 'video';

export type SlideType = {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  media: {
    type: MediaType;
    src: string;
    poster?: string; // Optional for videos
  };
};

export type SliderSectionType = {
  _type: 'heroSlider';
  _id: string;
  data: SlideType[];
};
