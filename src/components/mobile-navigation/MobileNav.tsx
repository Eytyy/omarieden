import React, { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';

import HomeIcon from '../HomeIcon';
import MenuBlock from './MenuBlock';
import { menu } from '../../data/main-menu';
import MainNav from './MainNav';
import UserNav from './UserNav';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // hide the menu on scroll, show on scroll up or if near bottom (137px from bottom)
  const [isVisible, setIsVisible] = useState(true);
  React.useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollTop + windowHeight >= docHeight - 137;

      if (isOpen) {
        return;
      }

      if (isNearBottom) {
        setIsVisible(true);
      } else if (scrollTop > lastScrollTop) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <motion.div
      className="mobile-nav sticky top-0 left-0 xl:hidden lg:text-lg col-span-full uppercase w-full border-b z-[100] bg-white dark:bg-black max-h-dvh overflow-auto overscroll-y-contain"
      initial={{ y: '0%' }}
      animate={{ y: isVisible ? '0%' : '-100%' }}
      transition={{ duration: 0.5, ease: easeInOut }}
      data-lenis-prevent
    >
      <nav className="grid grid-cols-6 w-full">
        <MenuBlock as="a" href="/" aria-lable="Home" title="Home" className="col-span-2">
          <HomeIcon invert={false} />
        </MenuBlock>
        <div className="flex flex-col h-full col-span-4">
          <div className="grid grid-cols-4 border-b">
            <ToggleBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <MenuBlock>
              <a href="/">
                <span className="font-display">EN</span>
              </a>
            </MenuBlock>
            <MenuBlock className="border-r-0">
              <a href="/">
                <span>AR</span>
              </a>
            </MenuBlock>
          </div>
          <UserNav />
        </div>
      </nav>
      {isOpen ? <MainNav menu={menu} /> : null}
    </motion.div>
  );
}

const ToggleBtn = ({ onClick, isOpen }: { isOpen: boolean; onClick: () => void }) => (
  <MenuBlock
    className="col-span-2 items-start flex w-full uppercase cursor-pointer"
    as="button"
    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    title="Menu"
    onClick={onClick}
  >
    <div className="flex items-center gap-2 ">
      <span className="font-display text-3xl w-5 ">{isOpen ? '-' : '+'}</span>
      <span>Menu</span>
    </div>
  </MenuBlock>
);
