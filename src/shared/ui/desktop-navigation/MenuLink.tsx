import type { MenuItemType } from '../../../data/main-menu';

type Props = {
  item: MenuItemType;
  activeMenu: string | null;
};

export default function MenuLink({ item, activeMenu }: Props) {
  const active = activeMenu === item.id;
  return (
    <li className="relative group uppercase">
      <a href={item.href} className="text-lg flex items-center gap-2">
        {item.subMenu ? (
          <div className="font-display-ar text-3xl w-5 flex justify-center">
            {active ? '-' : '+'}
          </div>
        ) : null}
        <div className="uppercase">{item.label}</div>
      </a>
    </li>
  );
}
