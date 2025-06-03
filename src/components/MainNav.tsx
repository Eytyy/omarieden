import { useState } from 'react';
import { menu } from '../data/main-menu';
import { SubNav } from './SubNav';
import { cn } from '../lib/utils';
import HomeIcon from './HomeIcon';

export default function MainNav() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  const subMenu = menu.find((item) => item.id === activeMenu)?.subMenu || null;

  return (
    <>
      <nav
        className={cn(
          'sticky lg:fixed top-0 left-0 p-4 lg:p-8 z-50 text-white dark:bg-black mix-blend-difference uppercase text-lg',
          activeMenu !== null
            ? 'h-full bg-white  dark:bg-black mix-blend-normal text-black md:w-1/3 2xl:w-1/4 lg:border-r border-r-black dark:border-r-white dark:text-white'
            : 'h-auto'
        )}
      >
        <div className="flex gap-4">
          <HomeIcon invert={activeMenu !== null} />
          <div>
            {menu.map((item) => (
              <div key={item.id} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onClick(item.id);
                  }}
                >
                  <div className="font-display text-3xl w-5 flex justify-center">
                    {activeMenu === item.id ? '-' : '+'}
                  </div>
                  <div>{item.label}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {subMenu && (
        <div className="lg:flex fixed top-[140px] lg:top-0 md:left-1/2 lg:left-1/3 2xl:left-1/4 left-0 lg:w-2/3 2xl:w-auto w-full z-50 lg:z-40 bg-white dark:bg-black text-black dark:text-white h-full border-t lg:border-t-0">
          <SubNav items={subMenu} />
        </div>
      )}
    </>
  );
}
