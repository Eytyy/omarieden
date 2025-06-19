import type { MenuItemType } from '../../data/main-menu';
import { cn } from '../../lib/utils';
import SubNav from './SubNav';

const MenuButton = ({
  item,
  active,
  hide,
  onClickCb,
}: {
  item: MenuItemType;
  active: boolean;
  hide: boolean;
  onClickCb: (id: string) => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClickCb(item.id);
  };

  return (
    <li className={cn('relative group border-t', hide ? 'hidden' : 'block')}>
      <a
        href={item.href}
        className={cn('flex items-center justify-between gap-2 p-4')}
        onClick={handleClick}
      >
        <div>{item.label}</div>
        <div className="font-display text-3xl w-5 flex justify-center">{active ? '-' : '+'}</div>
      </a>
      {active && item.subMenu ? (
        <SubNav
          parent={{
            label: item.label,
            href: item.href,
            id: item.id,
            hide,
          }}
          menu={item.subMenu}
        />
      ) : null}
    </li>
  );
};

export default MenuButton;
