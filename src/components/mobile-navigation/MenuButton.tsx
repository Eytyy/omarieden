import { FaMinus, FaPlus } from 'react-icons/fa6';
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
        <div className="ltr:font-display rtl:font-display-ar  flex justify-center">
          {active ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </div>
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
