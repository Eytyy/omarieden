import React, { useState } from 'react';
import type { MenuType } from '../../data/main-menu';
import MenuItem from './MenuItem';
import { useLang } from '../providers/useLang';

const MainNav = ({
  menu: bilingualMenu,
}: {
  menu: {
    en: MenuType;
    ar: MenuType;
  };
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { lang } = useLang();
  const menu = lang === 'ar' ? bilingualMenu.ar : bilingualMenu.en;

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
