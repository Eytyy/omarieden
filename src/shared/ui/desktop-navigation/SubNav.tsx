import React, { useState } from 'react';
import MenuItem from './MenuItem';
import ShopAllLink from './ShopAllLink';
import type { MenuItemType } from '../../../data/main-menu';

export const SubNav = ({
  items,
  parent,
}: {
  items: MenuItemType[];
  parent?: { label: string; href: string; id: string };
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const onClick = React.useCallback((id: string) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  }, []);

  const selectedItem = items.find((item) => item.id === activeMenu);
  const subMenu = selectedItem?.subMenu;

  return (
    <>
      <ul className="px-8 flex w-[33.333vw] 2xl:w-[25vw] flex-col py-8 uppercase border-b md:border-b-0 lg:border-r border-black dark:border-white  lg:h-full">
        {parent ? <ShopAllLink href={parent.href} label={parent.label} /> : null}
        {items.map((item) => (
          <MenuItem key={item.id} item={item} activeMenu={activeMenu} onClick={onClick} />
        ))}
      </ul>
      {subMenu ? (
        <SubNav
          items={subMenu}
          parent={{
            label: selectedItem.label,
            href: selectedItem.href,
            id: selectedItem.id,
          }}
        />
      ) : null}
    </>
  );
};
