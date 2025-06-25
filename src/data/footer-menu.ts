const footer_menu = [
  {
    title: 'Learn',
    links: [
      { name: { en: 'FAQ', ar: 'الأسئلة الشائعة' }, href: '#' },
      { name: { en: 'Editorial', ar: 'المجلة التحريرية' }, href: '#' },
      { name: { en: 'Loyalty Program', ar: 'برنامج الولاء' }, href: '#' },
    ],
  },
  {
    title: 'Omarieden',
    links: [
      { name: { en: 'About', ar: 'عن أوماريدن' }, href: '#' },
      { name: { en: 'Discover', ar: 'اكتشف' }, href: '#' },
      { name: { en: 'Locations', ar: 'المواقع' }, href: '#' },
      { name: { en: 'Contact Us', ar: 'اتصل بنا' }, href: '#' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { name: { en: 'Cookie Policy', ar: 'سياسة الكوكيز' }, href: '#' },
      { name: { en: 'Privacy Statement', ar: 'بيان الخصوصية' }, href: '#' },
      { name: { en: 'Terms & Conditions', ar: 'الشروط والأحكام' }, href: '#' },
      { name: { en: 'Returns & Refunds', ar: 'المرتجعات والاسترداد' }, href: '#' },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { name: { en: 'Instagram', ar: 'إنستغرام' }, href: '#' },
      { name: { en: 'Facebook', ar: 'فيسبوك' }, href: '#' },
      { name: { en: 'Twitter / X', ar: 'تويتر / إكس' }, href: '#' },
      { name: { en: 'Spotify', ar: 'سبوتيفاي' }, href: '#' },
    ],
  },
];

export type FooterMenuType = {
  title: string;
  links: { name: { en: string; ar: string }; href: string }[];
};

export default footer_menu;
