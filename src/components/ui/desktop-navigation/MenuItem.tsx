import type { MenuItemType } from '../../../data/main-menu';
import MenuButton from './MenuButton';
import MenuLink from './MenuLink';

type Props = {
  item: MenuItemType;
  onClick: (id: string) => void;
  activeMenu: string | null;
};

export default function MenuItem({ item, activeMenu, onClick }: Props) {
  if (item.subMenu) {
    return <MenuButton activeMenu={activeMenu} item={item} onClick={onClick} />;
  } else {
    return <MenuLink item={item} activeMenu={activeMenu} />;
  }
}
