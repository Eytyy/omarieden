import { useState } from 'react';
import { menu } from '../../data/main-menu';

import HomeIcon from '../ui/HomeIcon';
import MenuBlock from './MenuBlock';
import { useApp } from '../providers/useApp';
import { cn } from '../../lib/utils';
import UserNav from './UserNav';
import MainNav from './MainNav';
import { ToggleMenuBtn } from './ToggleMenuBtn';

export default function Full() {
  const [isOpen, setIsOpen] = useState(false);
  const { setLang, lang } = useApp();

  return (
    <div className="max-h-dvh overflow-auto overscroll-y-contain" data-lenis-prevent>
      <nav className="grid grid-cols-6 w-full">
        <MenuBlock as="a" href="/" aria-lable="Home" title="Home" className="col-span-2">
          <HomeIcon invert={false} />
        </MenuBlock>
        <div className="flex flex-col h-full col-span-4">
          <div className="grid grid-cols-4 border-b">
            <ToggleMenuBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <MenuBlock>
              <button
                className={cn('cursor-pointer', lang == 'en' ? 'font-display' : '')}
                onClick={() => setLang('en')}
                aria-label="Change Language to English"
                title="Change Language to English"
              >
                <span className="font-display">EN</span>
              </button>
            </MenuBlock>
            <MenuBlock className="ltr:border-r-0 rtl:border-l-0">
              <button
                className={cn('cursor-pointer', lang == 'ar' ? 'font-display' : '')}
                onClick={() => setLang('ar')}
                aria-label="Change Language to Arabic"
                title="Change Language to Arabic"
              >
                <span>AR</span>
              </button>
            </MenuBlock>
          </div>
          <UserNav />
        </div>
      </nav>
      {isOpen ? <MainNav menu={menu} /> : null}
    </div>
  );
}
