import type { MenuItemType } from '../../data/main-menu';
import { cn } from '../../lib/utils';

const MenuLink = ({ item, hide }: { item: MenuItemType; hide: boolean }) => {
  return (
    <li className={cn('relative group border-t', hide ? 'hidden' : 'block')}>
      <a href={item.href} className={cn('flex items-center justify-between gap-2 p-4')}>
        <div>{item.label}</div>
        <div className="font-display text-3xl w-5 flex justify-center">&rarr;</div>
      </a>
    </li>
  );
};

export default MenuLink;
