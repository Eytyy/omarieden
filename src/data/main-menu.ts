export const menu: MenuType = [
  {
    id: 'womens',
    label: 'Womens',
    href: '/womens',
    subMenu: [
      {
        id: 'wna',
        label: 'New Arrivals',
        href: '/womens/new-arrivals',
        subMenu: [
          { id: 'wfw', label: 'Footwear', href: '/' },
          { id: 'wapp', label: 'Apparel', href: '/' },
          { id: 'wacc', label: 'Accessories', href: '/' },
        ],
      },
      {
        id: 'wa',
        label: 'Apparel',
        href: '/womens/apparel',
        subMenu: [
          { id: 'wats', label: 'Shirts', href: '/' },
          { id: 'watts', label: 'T-Shirts', href: '/' },
          { id: 'watsw', label: 'Sweaters', href: '/' },
          { id: 'wath', label: 'Hoodies', href: '/' },
          { id: 'wad', label: 'Dresses', href: '/' },
          { id: 'was', label: 'Skirts', href: '/' },
          { id: 'wap', label: 'Pants', href: '/' },
        ],
      },
      {
        id: 'wf',
        label: 'Footwear',
        href: '/womens/footwear',
        subMenu: [
          { id: 'wfsn', label: 'Sneakers', href: '/' },
          { id: 'wfb', label: 'Boots', href: '/' },
          { id: 'wfsa', label: 'Sandals', href: '/' },
        ],
      },
      {
        id: 'wacc',
        label: 'Accessories',
        href: '/womens/accessories',
        subMenu: [
          { id: 'wab', label: 'Bags', href: '/' },
          { id: 'waj', label: 'Jewelry', href: '/' },
          { id: 'wah', label: 'Hats', href: '/' },
          { id: 'was', label: 'Sunglasses', href: '/' },
        ],
      },
      {
        id: 'wbr',
        label: 'Brands',
        href: '/womens/brands',
        subMenu: [
          { id: 'wmarni', label: 'Marni', href: '/' },
          { id: 'wacni', label: 'Acni', href: '/' },
          { id: 'wbottega', label: 'Bottega', href: '/' },
          { id: 'wbalenciaga', label: 'Balenciaga', href: '/' },
          { id: 'wgucci', label: 'Gucci', href: '/' },
          { id: 'wprada', label: 'Prada', href: '/' },
        ],
      },
    ],
  },
  {
    id: 'mens',
    label: 'Mens',
    href: '/mens',
    subMenu: [
      {
        id: 'm',
        label: 'New Arrivals',
        href: '/mens/new-arrivals',
        subMenu: [
          { id: 'mfw', label: 'Footwear', href: '/' },
          { id: 'mapp', label: 'Apparel', href: '/' },
          { id: 'macc', label: 'Accessories', href: '/' },
        ],
      },
      {
        id: 'mapp',
        label: 'Apparel',
        href: '/mens/apparel',
        subMenu: [
          { id: 'mats', label: 'Shirts', href: '/' },
          { id: 'matts', label: 'T-Shirts', href: '/' },
          { id: 'matsw', label: 'Sweaters', href: '/' },
          { id: 'math', label: 'Hoodies', href: '/' },
          { id: 'maj', label: 'Jackets', href: '/' },
          { id: 'map', label: 'Pants', href: '/' },
          { id: 'mas', label: 'Shorts', href: '/' },
        ],
      },
      {
        id: 'mfw',
        label: 'Footwear',
        href: '/mens/footwear',
        subMenu: [
          { id: 'mfsn', label: 'Sneakers', href: '/' },
          { id: 'mfb', label: 'Boots', href: '/' },
          { id: 'mfsan', label: 'Sandals', href: '/' },
        ],
      },
      {
        id: 'macc',
        label: 'Accessories',
        href: '/mens/accessories',
        subMenu: [
          { id: 'maccb', label: 'Bags', href: '/' },
          { id: 'maccj', label: 'Jewelry', href: '/' },
          { id: 'macch', label: 'Hats', href: '/' },
          { id: 'maccs', label: 'Sunglasses', href: '/' },
        ],
      },
      {
        id: 'mbr',
        label: 'Brands',
        href: '/mens/brands',
        subMenu: [
          { id: 'mmarni', label: 'Marni', href: '/' },
          { id: 'macni', label: 'Acni', href: '/' },
          { id: 'mbottega', label: 'Bottega', href: '/' },
          { id: 'mbalenciaga', label: 'Balenciaga', href: '/' },
          { id: 'mgucci', label: 'Gucci', href: '/' },
          { id: 'mprada', label: 'Prada', href: '/' },
        ],
      },
    ],
  },
  {
    id: 'homeware',
    label: 'Homeware',
    href: '/homeware',
    subMenu: [
      {
        id: 'hna',
        label: 'New Arrivals',
        href: '/homeware/new-arrivals',
        subMenu: [
          { id: 'hf', label: 'Furniture', href: '/' },
          { id: 'hd', label: 'Decor', href: '/' },
          { id: 'hb', label: 'Bedding', href: '/' },
        ],
      },
      {
        id: 'hfm',
        label: 'Furniture',
        href: '/homeware/furniture',
        subMenu: [
          { id: 'hfms', label: 'Sofas', href: '/' },
          { id: 'hfmc', label: 'Chairs', href: '/' },
          { id: 'hfmt', label: 'Tables', href: '/' },
          { id: 'hfmb', label: 'Beds', href: '/' },
        ],
      },
      {
        id: 'decor',
        label: 'Decor',
        href: '/homeware/decor',
        subMenu: [
          { id: 'decorr', label: 'Rugs', href: '/' },
          { id: 'decorel', label: 'Lighting', href: '/' },
          { id: 'decorewa', label: 'Wall Art', href: '/' },
          { id: 'decorm', label: 'Mirrors', href: '/' },
        ],
      },
      {
        id: 'hwbr',
        label: 'Brands',
        href: '/homeware/brands',
        subMenu: [
          { id: 'hwbrmt', label: 'Medicom Toy', href: '/' },
          { id: 'hwbass', label: 'Assouline', href: '/' },
          { id: 'hwbsel', label: 'Seletti', href: '/' },
          { id: 'hwbver', label: 'Versace', href: '/' },
          { id: 'hwbdng', label: 'Dolce & Gabbana', href: '/' },
          { id: 'hwbtrud', label: 'Trudon', href: '/' },
        ],
      },
    ],
  },
];

export type MenuItemType = {
  id: string;
  label: string;
  href: string;
  subMenu?: MenuItemType[];
};

export type MenuType = MenuItemType[];
