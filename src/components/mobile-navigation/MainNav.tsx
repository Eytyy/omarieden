import React, { useState } from 'react';
import type { MenuItemType } from '../../data/main-menu';
import MenuItem from './MenuItem';

const MainNav = ({ menu }: { menu: MenuItemType[] }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const onClickCb = React.useCallback((id: string) => {
    setActiveItem((prev) => (prev === id ? null : id));
  }, []);

  return (
    <ul className="main-nav">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} onClickCb={onClickCb} activeItem={activeItem} />
      ))}
    </ul>
  );
};

export default MainNav;
