import footer_menu from '../../../data/footer-menu';

type Props = {
  lang: 'en' | 'ar';
};

export default function FooterMenu({ lang }: Props) {
  return footer_menu.map((menu, index) => (
    <Group key={index} lang={lang} title={menu.title} links={menu.links} />
  ));
}

const Group = ({
  lang,
  title,
  links,
}: {
  lang: 'en' | 'ar';
  title: string;
  links: { name: { en: string; ar: string }; href: string }[];
}) => {
  return (
    <div className="flex flex-col gap-1 border-t lg:border-t-0 w-full lg:w-auto p-4 lg:p-0">
      <h3 className="ltr:font-display rtl:font-display-ar">{title}</h3>
      <ul className="flex lg:flex-col gap-4 flex-wrap gap-y-1 lg:gap-1">
        {links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <a href={link.href} className="hover:underline">
              {link.name[lang]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
