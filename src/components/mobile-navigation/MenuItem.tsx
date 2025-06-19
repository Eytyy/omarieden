import type { MenuItemType } from '../../data/main-menu';
import MenuButton from './MenuButton';
import MenuLink from './MenuLink';

const MenuItem = ({
  item,
  activeItem,
  onClickCb,
}: {
  item: MenuItemType;
  activeItem: string | null;
  className?: string;
  onClickCb: (id: string) => void;
}) => {
  const active = activeItem === item.id;
  const hide = !!activeItem && !active;

  if (item.subMenu) {
    return (
      <MenuButton key={item.id} item={item} active={active} hide={hide} onClickCb={onClickCb} />
    );
  } else {
    return <MenuLink key={item.id} item={item} hide={hide} />;
  }
};

export default MenuItem;
