import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { menu } from '../../data/main-menu';
import { SubNav } from './SubNav';
import HomeIcon from '../HomeIcon';
import MenuItem from './MenuItem';

export default function MainNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const onClick = React.useCallback((id: string) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  }, []);

  const selectedItem = menu.find((item) => item.id === activeMenu);
  const subMenu = selectedItem?.subMenu;

  return (
    <>
      <nav
        className={cn(
          'hidden xl:block mainNav sticky lg:fixed top-0 left-0 p-4 lg:p-8 z-50 text-white dark:bg-black mix-blend-difference uppercase text-lg',
          activeMenu !== null
            ? 'h-full bg-white  dark:bg-black mix-blend-normal text-black md:w-1/3 2xl:w-1/4 lg:border-r border-r-black dark:border-r-white dark:text-white'
            : 'h-auto'
        )}
      >
        <div className="flex gap-4">
          <a href="/" aria-lable="Home" title="Home">
            <HomeIcon invert={activeMenu !== null} />
          </a>
          <ul>
            {menu.map((item) => (
              <MenuItem key={item.id} item={item} activeMenu={activeMenu} onClick={onClick} />
            ))}
          </ul>
        </div>
      </nav>
      {subMenu && (
        <div className="uppercase mainNav-sub hidden xl:flex fixed top-[140px] lg:top-0 md:left-1/2 lg:left-1/3 2xl:left-1/4 left-0 lg:w-2/3 2xl:w-auto w-full z-50 lg:z-48 bg-white dark:bg-black text-black dark:text-white h-full border-t lg:border-t-0">
          <SubNav
            items={subMenu}
            parent={
              selectedItem
                ? {
                    label: selectedItem.label,
                    href: selectedItem.href,
                    id: selectedItem.id,
                  }
                : undefined
            }
          />
        </div>
      )}
    </>
  );
}
