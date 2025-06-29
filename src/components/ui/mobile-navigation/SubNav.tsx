import React, { useState } from 'react';
import type { MenuItemType } from '../../../data/main-menu';
import MenuItem from './MenuItem';
import ShopAllLink from './ShopAllLink';

const SubNav = ({
  menu,
  parent,
}: {
  menu: MenuItemType[];
  parent: {
    id: string;
    label: string;
    href: string;
    hide: boolean;
  };
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const onClickCb = React.useCallback((id: string) => {
    setActiveItem((prev) => (prev === id ? null : id));
  }, []);

  return (
    <ul className="sub-nav">
      <ShopAllLink key={parent.id} href={parent.href} label={parent.label} hide={parent.hide} />
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} activeItem={activeItem} onClickCb={onClickCb} />
      ))}
    </ul>
  );
};

export default SubNav;
