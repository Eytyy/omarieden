import type { MenuItemType } from '../../../data/main-menu';
import { cn } from '../../../lib/utils';

const MenuLink = ({ item, hide }: { item: MenuItemType; hide: boolean }) => {
  return (
    <li className={cn('relative group border-t rtl:text-lg', hide ? 'hidden' : 'block')}>
      <a href={item.href} className={cn('flex items-center justify-between gap-2 p-4')}>
        <div>{item.label}</div>
      </a>
    </li>
  );
};

export default MenuLink;
